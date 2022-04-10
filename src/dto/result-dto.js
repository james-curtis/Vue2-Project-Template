class ResultDTO {
  /**
   * @type {Object} 数据集
   */
  data

  /**
   * @type {String} 操作信息
   */
  message

  /**
   * @type {String} 操作状态码
   */
  statusCode

  /**
   * @description 通用数据实体
   * @param {Object} data 数据集
   * @param {String} message 操作信息
   * @param {String} statusCode 操作状态码
   */
  constructor(data, message, statusCode) {
    this.data = data
    this.message = message
    this.statusCode = statusCode
  }
}
export default ResultDTO
