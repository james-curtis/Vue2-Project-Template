import Axios from 'axios';
import config from '@/config';
// 之所以封装这个axios，是因为在一些请求中，无法上传信息，很尴尬，估计原因是继承的有问题，无法携带headers
export const baseUrl = config.baseUrl.apiUrl;

const baseAxios = Axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});


baseAxios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);
// 添加响应拦截器
baseAxios.interceptors.response.use(
  res => {
    if (res.config.responseType === 'blob') {
      let isReturnJson = res.headers && res.headers['content-type'] && res.headers['content-type'].indexOf('json') > -1;
      // 后端返回错误信息
      if (isReturnJson) {
        let reader = new FileReader();
        reader.onload = function (event) {
          let content = reader.result;
          let parseRes = JSON.parse(content); // 错误信息
          return validateResponseCode({
            data: parseRes,
          });
        };
        reader.readAsText(res.data);
        return true;
      } else {
        // 下载文件
        download(res);
      }
    } else {
      // 正常json请求
      return validateResponseCode(res);
    }
  },
  error => {
    // 对响应错误做点什么
    return Promise.reject(error);
  },
);

function validateResponseCode(res) {
  let { data } = res;
  return Promise.resolve(data);
}

function blobToText(blob) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsText(blob);
    fileReader.onload = function () {
      try {
        const result = JSON.parse(this.result);
        if (result && result['resultCode'] === 'fail') {
          resolve(result);
        } else {
          reject('');
        }
      } catch (e) {
        // TODO handle the exception
        reject('');
      }
    };
  });
}

export const postFileUploadAxios = (url, data) => {
  return baseAxios.post(url, data, { headers: { 'Content-Type': 'multipart/form-data' } });
};

export const getDownloadAxios = (url) => {
  return baseAxios.get(url, { responseType: 'blob' });
};

export const postDownloadAxios = (url, data) => {
  return baseAxios.post(url, data, { responseType: 'blob' });
};

export { baseAxios }


function download(res) {
  let reader = new FileReader();
  let data = res.data;
  reader.onload = e => {
    if (e.target.result.indexOf('Result') != -1 && JSON.parse(e.target.result).Result == false) {
      // 进行错误处理
    } else {
      let fileName = 'download';
      let contentDisposition = res.headers['Content-Disposition'];
      contentDisposition = contentDisposition || res.headers['content-disposition'];
      if (contentDisposition) {
        fileName = window.decodeURI(contentDisposition.split('=')[1], 'UTF-8');
      }
      executeDownload(data, fileName);
    }
  };
  reader.readAsText(data);
}

//  模拟点击a 标签进行下载
function executeDownload(data, fileName) {
  if (!data) {
    return;
  }
  let url = window.URL.createObjectURL(new Blob([data]));
  let link = document.createElement('a');
  link.style.display = 'none';
  link.href = url;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
