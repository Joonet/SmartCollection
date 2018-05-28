// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const ctx = wx.createCanvasContext('myCanvas', this)
    ctx.setFillStyle('green')
    ctx.setStrokeStyle('red')
    ctx.setShadow(10, 10, 50, 'yellow')
    ctx.shadowColor = 'red'
    ctx.fillRect(10, 10, 150, 75)
    ctx.strokeRect(20, 20, 150, 75)
    ctx.setFontSize(30)
    ctx.fillText('jj', 200,20)

    ctx.moveTo(100, 100)
    ctx.rect(100, 100, 100, 50)
    ctx.lineTo(200, 150)
    ctx.stroke()
    ctx.draw()
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
  
  }
})