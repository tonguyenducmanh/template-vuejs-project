import BaseAPI from '@/api/Base/BaseAPI'
/**
 * Đối tượng thực hiện request tới API Sample
 * Created by tdmanh1 19/09/2024
 */
class SampleAPI extends BaseAPI {
  /**
   * hàm khởi tạo
   */
  constructor() {
    super()
  }

  urlName = 'SampleAPI'
  controllerName = 'Sample'

  async getConnectToken(param) {
    const url = [this.getAPIUrl(), '/get-connect-token'].join('')
    return await this.request(url, 'post', param)
  }
}

export default new SampleAPI()
