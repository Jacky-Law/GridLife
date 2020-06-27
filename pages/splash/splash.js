// pages/splash.js
const app = getApp()
var windowHeight = wx.getSystemInfoSync().windowHeight
var windowWidth = wx.getSystemInfoSync().windowWidth
let info = app.globalData.info;
Page({
  
  data: {
    date:"",
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    gridWidth: 0,
    str: ""
  },
  //事件处理函数
  bindViewTap: function() {
    wx.switchTab({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        gridWidth: (this.windowWidth-31)/30,
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },



  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e)
    info.date = e.detail.value,
    this.setData({
      date: e.detail.value
    }),
    
    wx.switchTab({
      url: '../index/index',
    })
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})