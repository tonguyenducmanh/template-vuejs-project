/**
 * File config dùng chung cho toàn bộ ứng dụng frontend, được tiêm thẳng vào index.html
 */
;(function (window) {
  window.__env = window.__env || {}
  window.__env.apiConfig = {
    SampleAPI: 'https://localhost:5321'
  }
})(this)
