function drawHuePanel() {
  const systemInfo = getApp().globalData.systemInfo;
  console.log(systemInfo);
  const context = wx.createCanvasContext('hue-panel');
  var gradient = context.createLinearGradient(0, 0, systemInfo.windowWidth, 0);
  gradient.addColorStop(0, "#f00");
  gradient.addColorStop(0.17, "#ff0");
  gradient.addColorStop(0.34, "#0f0");
  gradient.addColorStop(0.51, "#0ff");
  gradient.addColorStop(0.68, "#00f");
  gradient.addColorStop(0.85, "#f0f");
  gradient.addColorStop(1, "#f00");
  context.setFillStyle(gradient);
  context.fillRect(0, 0, systemInfo.windowWidth, 32);
  context.draw();
}

function drawFSIPanel() {
}

function drawAlphaPanel() {
}

Page({
  canvasIdErrorCallback(e) {
    console.error(e.detail.errMsg)
  },
  onReady(e) {
    drawHuePanel();
  }
})