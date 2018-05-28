// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ollData: 19.75,
    oilSumData: 321.5,
    carbonSum: 2221.33,
    base64_url_bf_button_yellow: "data:image/png;base64,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"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('jo')
    console.log(options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
    wx.getStorage({
      key: 'isDataIncreased',
      success: function(res) {
        console.log(res.data)
        that.setData({
          ollData: that.data.ollData + 20,
          oilSumData: that.data.oilSumData + 20,
          carbonSum: that.data.carbonSum + 57

        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
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
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },



  onClickContinue: function () {
    wx.navigateTo({
      url: '/pages/map/map',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})