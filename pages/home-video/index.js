// pages/home-video/index.js
import htRequest from '../../utils/http'
Page({
    /**
     * 页面的初始数据
     */
    data: {
        topMVs: [],
        hasMore: true
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getTopMVData(0)
    },
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
        this.getTopMVData(0)
    },
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        this.getTopMVData(this.data.topMVs.length)
    },
    /**
     * @description 获取视频
     * @param {number} offset
     */
    getTopMVData(offset) {
        if (!this.data.hasMore) return
        wx.showNavigationBarLoading()
        htRequest.run('getTopMVs', {
            offset,
            limit: 10
        }).then(res => {
            let topMVs = this.data.topMVs
            if (offset === 0) {
                topMVs = res.data
            } else {
                topMVs = topMVs.concat(res.data)
            }
            this.setData({
                topMVs,
                hasMore: res.hasMore
            })
            wx.hideNavigationBarLoading()
            if (offset === 0) {
                wx.stopPullDownRefresh()
            }
        })
    }
})