// pages/map/map.js
//获取应用实例
var app = getApp()
var isTextNeededChanged = false
var oilLevelShouldDecrease = false
var windowWidth = app.globalData.windowWidth
var windowHeight = app.globalData.windowHeight
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lev: 0,
    hidden: true,
    isCarArrived: false,
    base64_url_bf_button_markerIcon: 'data:image/png;base64,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',
    base64_url_bf_button_green:'data:image/png;base64,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'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    setInterval(function(){
      that.setData({
        lev: app.globalData.levpp
      })
    }, 1000)


    /*********CanvasAnimation */
    var canvas2 = wx.createCanvasContext('myCanvas2')
    canvas2.setFillStyle('red')
    canvas2.setFontSize(10)
    canvas2.fillText('油箱已收集', windowWidth * 0.47 / 2, 40, windowWidth * 0.47)
    canvas2.draw()

    var ctx = wx.createCanvasContext('myCanvas')
    //画布属性
    var mW = windowWidth * 0.47;
    var mH = windowHeight * 0.25;
    var lineWidth = 0;
    var value = app.globalData.levpp;


    //圆属性
    var r = mH / 2; //圆心
    var cR = r - 16 * lineWidth; //圆半径

    //Sin 曲线属性
    var sX = 0;
    var sY = mH / 2;
    var axisLength = mW; //轴长
    var waveWidth = 0.1;   //波浪宽度,数越小越宽    
    var waveHeight = 6; //波浪高度,数越大越高
    var speed = 0.5; //波浪速度，数越大速度越快
    var xOffset = 1; //波浪x偏移量

    ctx.lineWidth = lineWidth;

    //画圈函数
    var IsdrawCircled = false;
    var drawCircle = function () {

      ctx.beginPath();
      ctx.strokeStyle = '#3CB371';
      ctx.arc(r, r, cR + 5, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(r, r, cR, 0, 2 * Math.PI);
      ctx.clip();

    }

    //画sin 曲线函数
    var drawSin = function (xOffset) {
      ctx.save();

      var points = [];  //用于存放绘制Sin曲线的点

      ctx.beginPath();
      //在整个轴长上取点
      for (var x = sX; x < sX + axisLength; x += 20 / axisLength) {
        //此处坐标(x,y)的取点，依靠公式 “振幅高*sin(x*振幅宽 + 振幅偏移量)”
        var y = -Math.sin((sX + x) * waveWidth + xOffset);

        var dY = mH * (1 - value / 100);

        points.push([x, dY + y * waveHeight]);
        ctx.lineTo(x, dY + y * waveHeight);
      }

      //封闭路径
      ctx.lineTo(axisLength, mH);
      ctx.lineTo(sX, mH);
      ctx.lineTo(points[0][0], points[0][1]);
      ctx.fillStyle = '#82BE75';
      ctx.fill();

      ctx.restore();
    };

    //写百分比文本函数
    var drawText = function () {
      ctx.save();
      canvas2.save();
      var size = 0.4 * cR;
      ctx.textAlign = 'center';
      ctx.setFontSize(35)
      ctx.fillStyle = "#F8D448";

      canvas2.setTextAlign('center')
      canvas2.setFillStyle('white')
      canvas2.setFontSize(25)
      if(!isTextNeededChanged){
        canvas2.fillText('油箱已收集', windowWidth * 0.47 / 2, 40, windowWidth * 0.47);
      }else {
        canvas2.fillText('废弃食用油剩余', windowWidth * 0.47 / 2, 40, windowWidth * 0.47)
      }
      canvas2.restore();
      ctx.fillText(value + '%', windowWidth * 0.47 / 2, r + size / 2);
      ctx.restore();
    };

    var render = function () {
      if (!oilLevelShouldDecrease){
        value = app.globalData.levpp
      }else {
        //整数10递减
        if(value % 10){
          value = value - value % 10
        }
        value-=10
        if(value <= 0){
          value = 0
          oilLevelShouldDecrease = false
          isTextNeededChanged = false
          wx.setStorage({
            key: 'isCarArrived',
            data: 'no',
          })

          wx.navigateBack({
            delta: 1,
          })
          
        }
      }

      ctx.clearRect(0, 0, mW, mH);

      if (IsdrawCircled == false) {
        // drawCircle();
      }


      drawSin(xOffset);
      drawText();

      xOffset += speed;
      // requestAnimationFrame(render);

      ctx.draw()
      canvas2.draw()
    }

    render();

    setInterval(function () {

      render()
    }, 100)
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
    
    var that = this
    wx.getStorage({
      key: 'isCarArrived',
      success: function(res) {
        console.log('isCarArrived')
        if(res.data == 'yes'){
          isTextNeededChanged = true
          that.setData({
            isCarArrived: true
          })
        }
        
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
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

  bindmarkertap: function (e) {
    this.setData({
      hidden: false
    })
  },

  closeInnerPage: function () {
    
    this.setData({
      hidden: true
    })
  },

  goToCar: function () {
    console.log('ononon')
    wx.navigateTo({
      url: '../car/car',
    })
  },

/**
 * 返回主页，传入油量数据
 */
  goToHome: function (){
    if (isTextNeededChanged) {
      oilLevelShouldDecrease = true
    }
    wx.setStorage({
      key: 'isDataIncreased',
      data: 'yes',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
    
  }

})