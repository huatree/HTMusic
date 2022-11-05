// pages/index/index.js
import { rankingStore } from '../../store/index'
import htRequest from '../../utils/http'
import queryReact from '../../utils/queryRect'

Page({
    /**
     * 页面的初始数据
     */
    data: {
        swiperHeight: 0,
        banners: [],
        recommendSongs: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getPageData()
        this.onLoadPic = wx.$_.throttle((event) => {
            this.getSwiperHeight()
        }, 300)
        // 发起共享数据请求
        rankingStore.dispatch('getRankingDataAction')
        // 从store获取共享的数据
        rankingStore.onState('hotRanking', (res) => {
            if (!res.tracks) return
            const recommendSongs = res.tracks.slice(0, 6)
            this.setData({ recommendSongs })
        })
    },
    onUnload() {
        this.onLoadPic.cancel()
    },
    /**
     * @description 获取页面数据
     * @returns
     */
    getPageData() {
        htRequest.run('getBanner').then((res) => {
            this.setData({ banners: res.banners })
        })
    },
    /**
     * @description 跳到搜索详情页
     */
    onSearch() {
        wx.navigateTo({
            url: '/pages/index/search/index'
        })
    },
    /**
     * @description 获取图片高度
     */
    getSwiperHeight() {
        queryReact('.swiper-image').then((res) => {
            const rect = res[0]
            this.setData({ swiperHeight: rect.height })
        })
    }
})
