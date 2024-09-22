/**
 * các method utility dùng cho toàn bộ frontend
 * Created by tdmanh1 19.09.2024
 */
class Utility {
  /**
   * Thực hiện duyệt từng phần tử của bảng hoặc thuộc tính của object để call fn
   * @param {Array/Object/...} obj
   * @param {Function} fn hàm thực hiện khi for
   * Created by tdmanh1 19.09.2024
   */
  forEach(obj, fn) {
    if (obj === null || typeof obj === 'undefined') {
      return
    }

    // Force an array if not already something
    if (typeof obj !== 'object') {
      obj = [obj]
    }

    if (obj instanceof Array) {
      // Duyệt từng phần tử của mảng
      for (var i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj)
      }
    } else {
      // nếu là Object thì duyệt từng thuộc tính
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj)
        }
      }
    }
  }
  /**
   * hàm format string giống như String.Format của C#
   * @param {*} template chuỗi string cần formart
   * @param  {...any} args danh sách các trường format
   * @returns string đã được format
   * Created by tdmanh1 19/09/2024
   */
  formatString(template, ...args) {
    return template.replace(/{(\d+)}/g, (match, number) => {
      return typeof args[number] !== 'undefined' ? args[number] : match
    })
  }
}

export default new Utility()
