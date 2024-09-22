import axios from 'axios'
import Qs from 'qs'
import Utility from '@/common/Utility'

/**
 * Đối tượng thực hiện toàn bộ các request đến các API từ client
 * Created by tdmanh1 19/09/2024
 */
class HttpClient {
  /**
   * Hàm khởi tạo
   */
  constructor() {
    Utility.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
      HttpClient.prototype[method] = function (url, config) {
        return this.callRequest(
          Object.assign(config || {}, {
            method: method,
            url: url
          })
        )
      }
    })

    Utility.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
      HttpClient.prototype[method] = function (url, data, config) {
        return this.callRequest(
          Object.assign(config || {}, {
            method: method,
            url: url,
            data: data
          })
        )
      }
    })

    this.isShowMessage = false
    this.awaitLockHttpClient = null
  }

  /**
   * thực hiện việc gọi request
   * Created by tdmanh1 19.09.2024
   */
  callRequest(options) {
    let me = this
    let axiosOpt = options
    me.processData(axiosOpt)
    me.processHeader(axiosOpt)
    var axiosTemp = axios.create()

    var promise = new Promise((resolve, reject) => {
      axiosTemp(axiosOpt)
        .then((res) => {
          resolve(res)
        })
        .catch((ex) => {
          axios.isCancel(ex)
          console.log(ex)
          reject(ex)
        })
    })

    return promise
  }

  /**
   * Xử lý gán data trước khi request
   * Created by tdmanh1 19.09.2024
   */
  processData(options) {
    if (options) {
      if (options.headers) {
        var key = 'Content-Type',
          data = options.data ? options.data : options.params,
          contentType = Utility.objectGetField(options.headers, key)

        if (data && data instanceof Object && contentType) {
          var qs = Qs
          if (contentType.contains('application/x-www-form-urlencoded') && data instanceof Object) {
            data = qs.stringify(data)
            if (options.data) {
              options.data = data
            }

            if (options.params) {
              options.params = data
            }
          }
        }
      }
    }
  }
  /**
   * Xử lý header trước khi thực hiện request
   */
  processHeader(options) {
    if (options && !options.isNotSetHeader) {
      let header = options.headers || {}
      if (!header['Content-Type']) {
        header['Content-Type'] = 'application/json'
      }
      options.headers = header
    }
  }
}
export default new HttpClient()
