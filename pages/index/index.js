//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    netData: '',
    index: 0,
    latitude: 22.71991,
    longitude: 114.24779,
    scale: 15,
    markers: [],            //标记点用于在地图上显示标记的位置
    hidden: true,
    controls: [{
      id: 1,
      iconPath: '/images/location.png',
      position: {
        left: 50,
        top: 500,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  
  onLoad: function (options) {
    var that = this
    var i = 0
    
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })

    this.getCenterLocation()
    
    
  },

/**
 * Do something when page show.
 */
  onShow: function () {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('smartCollectionMap')
    this.mapCtx.moveToLocation()

    
  },

  onReady: function () {
    // Do something when page ready.
    
    this.getScale()
    // this.getMarkers()
    var that = this
    setInterval(function(){
      var tmpMarkers = []
      for (var i = 0; i < 3; i++) {
        var marker = {
          id: i,
          // title: markersInfo[i].title,
          latitude: that.data.latitude + i * 0.01,
          longitude: that.data.longitude - i * 0.01,
          iconPath: '/images/费油变宝主页_0000s_marker.png',
          label: {
            x: 15,
            y: -15,
            content: String(app.globalData.levpp) + ' %',
            color: '#0A0',
            fontSize: 22,
            textAlign: "center"
          },
          width: 30,
          height: 30
        }
        tmpMarkers[i] = marker
      }
      that.setData({
        markers: tmpMarkers
      })
    }, 1000)
  },




/************************************* */

/**
 * 确定标记位置
 */
  getMarkers: function() {
    var tmpMarkers = []
    for(var i = 0; i < 3; i++){
      var marker = {
        id: i,
        // title: markersInfo[i].title,
        latitude: this.data.latitude + i * 0.01,
        longitude: this.data.longitude + i * 0.01,
        iconPath: '/images/费油变宝主页_0000s_marker.png',
        label: {
          x: 10,
          y: -10,
          content: String(app.globalData.levpp),
          color: '#F00',

        }
        // width: 20,
        // height: 40
      }
      tmpMarkers[i] = marker
    }
    console.log(tmpMarkers)
    this.setData({
      markers: tmpMarkers
    })
  },


  /**
   * 获取当前位置
   */
  getCenterLocation: function () {
    var that = this
    wx.getLocation({
      type: 'gcj02',      //返回可以用于wx.openLocation的经纬度
      altitude: true,
      success: function(res) {
        console.log(res)
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  tapViewEvent: function() {
    this.setData ({
      hidden: true
    })
  },

  gotoInfo: function () {
    wx.navigateTo({
      url: '../info/info',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  getScale: function (){
    this.mapCtx.getScale({
      success: function(res) {
        console.log(res)
      }
    })
  },

/**
 * 点击marker事件
 */
  bindmarkertap: function (e) {
    this.setData({
      hidden: false
    })
  },

  bindcontroltap:function (e) {
    if (e.controlId == 1){
      this.mapCtx.moveToLocation()
    }
  },

  // 地图视野改变事件
  bindregionchange: function (e) {
    // 拖动地图，获取附件单车位置
    if (e.type == "begin") {

    } else if (e.type == "end") {
      var that = this
      // this.getCenterLocation()
      //获取中心点
      // app.getCenterLocation(this.mapCtx, function () {
      //   app.getRequest(function (markersInfo) {
      //     that.getMarkers(that, markersInfo)
      //   })
      // })
      // this.hiddenDetail(true);
    }
  },

  tapButton: function () {
    console.log('你干哈')
  },

  /**
   * 1.跳转至map组件
   * 
   * 2.以当前位置为中心
   * 
   * 3.显示周边markers
   * 
   * 4.设置markers的label
   * 
   * 5.点击markers弹出预约框
   * 
   */

})
