import ResultDTO from "./result-dto";
import PageDataDTO from "@/dto/page-data-dto";
class PageResultDTO extends ResultDTO {
  /**
   * @type {PageDataDTO} 分页数据集
   */
  data

  /**
   * @description 分页数据实体
   * @param {PageDataDTO} data 分页数据集
   * @param {String} message 操作信息
   * @param {String} statusCode 操作状态码
   */
  constructor(data, message, statusCode) {
    this.data = data
    this.message = message
    this.statusCode = statusCode
  }
}

export default PageResultDTO
