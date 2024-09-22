import httpClient from '@/api/httpClient'
/**
 * Đối tượng base API khởi tạo các biến dùng chung
 * Created by tdmanh1 19/09/2024
 */
export default class BaseAPI {
  /**
   * Hàm khởi tạo
   */
  constructor() {}

  baseUrl = ''
  controllerName = ''
  urlName = ''
  apiList = window.__env.apiConfig

  /**
   * khởi tạo API url
   * Created by tdmanh1 19.09.2024
   */
  initAPI() {
    if (this.urlName && this.apiList) {
      this.baseUrl = this.apiList[this.urlName] + '/' + this.controllerName
    }
  }

  /**
   * lấy ra API url
   * @returns địa chỉ API
   * Created by tdmanh1 19.09.2024
   */
  getAPIUrl() {
    if (this.baseUrl == '') {
      this.initAPI()
    }
    return this.baseUrl
  }

  /**
   * gọi request API
   * Created by tdmanh1 19.09.2024
   */
  request(url, action, dataOrOptions, options) {
    return new Promise((resolve, reject) => {
      action = action.toLowerCase()

      let fn = httpClient[action]

      if (fn) {
        fn.call(httpClient, url, dataOrOptions, options)
          .then((res) => {
            if (res) {
              if (res.data) {
                resolve(res.data)
              } else {
                reject(res)
              }
            } else {
              reject(false)
            }
          })
          .catch((ex) => {
            console.log(ex)
            reject(false)
          })
      }
    })
  }
}
