var app = getApp()
var batmv = 0
var levpp = 0
var mac = ''
var online = 0

// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    batmv: 0,
    levpp: 0,
    mac  : '',
    online: ''
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    setInterval(function () {
      wx.request({
        url: 'https://elegzh.top/api/index/index',
        data: {
          'locationId': 290
        },
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          console.log(res.data)
          app.globalData.levpp = res.data['levpp']
          that.setData({
            // netData: res.data['movies'][i]['actorName1'],
            batmv: res.data['batmv'],
            levpp: res.data['levpp'],
            mac:  res.data['mac'],
            online: res.data['online']
          })
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('xxxxxxx')
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('触底')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    console.log('分享' + res.from)
  }
})