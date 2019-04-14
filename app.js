//app.js
App({
  onLaunch: function () {
    wx.getSystemInfo({
      success: (result) => {
        this.globalData.systemInfo = result;
      }
    })
  },
  globalData: {
    systemInfo: null,
    userInfo: null
  }
})