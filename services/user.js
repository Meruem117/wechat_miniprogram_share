const {
  API_HOST
} = require('../constant/index')

function getAll() {
  let data = []
  wx.request({
    url: API_HOST + '/user/all',
    success(res) {
      data = res.data
    }
  })
  return data
}

module.exports = {
  getAll
}