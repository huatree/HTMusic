// pages/video/detail/index.js
import htRequest from '../../../utils/http'

Page({
    /**
     * 页面的初始数据
     */
    data: {
        mvURLInfo: {},
        mvDetail: {},
        relatedVideos: []
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        const { id } = options
        this.getPageData(id)
    },
    /**
     * @description 获取页面的数据
     * @param {string} id
     * @returns
     */
    getPageData(id) {
        htRequest.run('getMVUrl', { id }).then((res) => {
            this.setData({ mvURLInfo: res.data })
        })
        htRequest.run('getMVDetail', { mvid: id }).then((res) => {
            this.setData({ mvDetail: res.data })
        })
        htRequest.run('getRelatedVideo', { id }).then((res) => {
            this.setData({ relatedVideos: res.data })
        })
    }
})
