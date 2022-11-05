export default {
    getTopMVs: { // 获取mv列表
        method: 'GET',
        isMock: false,
        url: '/top/mv'
    },
    getMVUrl: { // 获取mv地址
        method: 'GET',
        isMock: false,
        url: '/mv/url'
    },
    getMVDetail: { // 获取mv数据
        method: 'GET',
        isMock: false,
        url: '/mv/detail'
    },
    getRelatedVideo: { // 获取相关视频
        method: 'GET',
        isMock: false,
        url: '/related/allvideo'
    }
}