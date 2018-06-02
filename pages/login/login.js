// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    phone:'',
    maxLength: 11,
    disabled: true,
    content: 'con',
    base64_url_bg_button_login:'data:image/png;base64,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',
    base64_url_bf_input:'data:image/png;base64,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'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  
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
  
  },

  /**************************** */

  setDisabled: function (e) {
    this.setData({
      disabled: false
    })
  },

/**
 * 与输入框绑定
 */
  usernameInput: function (e) {
    console.log('输入时'+e.detail.value)
    this.setData({
      username: e.detail.value
    })
    if (this.data.phone && this.data.username){
      this.setDisabled()
    }
  },

  /**
   * 手机号或电话号码判断，更改可输入位数
   */
  phoneInput: function(e)  {
    if (1 == e.detail.value.length && 0 == e.detail.value){
      this.setData({
        maxLength: 12
      })
    } else if (1 == e.detail.value.length && 0 != e.detail.value){
      this.setData({
        maxLength: 11
      })
    }
    this.setData({
      phone: e.detail.value
    })
    if (this.data.phone && this.data.username) {
      this.setDisabled()
    }
  },
  
  /**
   * 继续登录
   */
  login: function() {
    var name = this.data.username
    console.log('登录时' + name)
    var phone = this.data.phone
    if(!name || !phone){
      if (!phone && !name) {
        this.showModal('姓名和电话不能为空')
      }
      else if(!name) {
        this.showModal('姓名不能为空')
      }else {
        this.showModal('电话不能为空')
      }
      return
    }

    //正则判断
    var condition = this.phoneReg(phone)
    if(condition){
      wx.reLaunch({
        url: '/pages/info/info',
        success: function (res) {
          console.log('跳')
          wx.setStorage({
            key: 'myToken',
            data: 'Jo',
            success: function (res) {
              console.log('存储成功')
            },
            fail: function (res) { },
            complete: function (res) { },
          })
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    }

    
  },
  
  /**
   * 手机号码
   * 验证规则：11位数字，以1开头。
   * 电话号码
    验证规则：区号+号码，区号以0开头，3位或4位
    号码由7位或8位数字组成
    区号与号码之间可以无连接符，也可以“-”连接
   */
  phoneReg: function(phone) {
    var phonereg = /^0\d{2,3}-?\d{7,8}$/;
    //手机号码
    var telreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/; 
    if(!telreg.test(phone) && !phonereg.test(phone)){
      wx.showToast({
        title: '电话格式有误',
        icon: 'none',
        duration: 1000
      })
      return false
    }
    return true
  },

  showModal: function(options) {
    wx.showModal({
      title: options,
      content: '',
      showCancel: false,
      cancelText: '',
      cancelColor: '',
      confirmText: '确定',
      confirmColor: '',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
 
})