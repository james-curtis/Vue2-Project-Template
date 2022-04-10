class PageDataDTO {
  /**
   * @type {String} 记录总数 
   */
  total

  /**
   * @type {String} 每页大小
   */
  size

  /**
   * @type {String} 总页数
   */
  pages

  /**
   * @type {String} 当前所在页
   */
  current

  /**
   * @type {Boolean} 是否为正序
   */
  isAsc

  /**
   * @type {Array} 记录集
   */
  records

  /**
   * @description 分页数据集
   * @param {String} total 记录总数
   * @param {String} size 每页大小
   * @param {String} pages 总页数
   * @param {String} current 当前所在页
   * @param {Boolean} isAsc 是否为正序
   * @param {Array} records 记录集
   */
  constructor(total, size, pages, current, isAsc, records) {
    this.total = total
    this.size = size
    this.pages = pages
    this.current = current
    this.isAsc = isAsc
    this.records = records
  }
}

export default PageDataDTO
