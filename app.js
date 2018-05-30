//app.js
App({
  onLaunch: function() {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.globalData.windowHeight = res.windowHeight,
        that.globalData.windowWidth = res.windowWidth
      },
      fail: function (res) { },
      complete: function (res) { },
    })
    setInterval(function () {
      wx.request({
        url: 'https://elegzh.top/api/index/index',
        data: {
          'id': 4
        },
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          console.log(res.data)
          that.globalData.levpp = res.data['levpp']
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    }, 100)


    var token
    wx.getStorage({
      key: 'myToken',
      success: function(res) {
        console.log('提取成功'+res)
        token = res.data

        if(token == 'Jo'){
          wx.reLaunch({
            url: '/pages/info/info',
            success: function(res) {
              console.log('我要跳了')
            },
            fail: function(res) {},
            complete: function(res) {},
          })
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.showShareMenu({
      withShareTicket: false
    })
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null,
    levpp: 100,
    windowWidth: 375,
    windowHeight: 603
  },



/**
 * 分享
 */
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})
