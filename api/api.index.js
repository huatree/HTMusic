export default {
    getBanner: { // 获取轮播图
        method: 'GET',
        isMock: false,
        url: '/banner?type=2'
    },
    getRankings: { // 推荐歌曲
        method: 'GET',
        isMock: true,
        url: '/top/list'
    }
}
