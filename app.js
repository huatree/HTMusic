// app.js
import './libs/lodash-fix.js'
// libs本地方式导入lodash
import _ from './libs/lodash'
// 构建npm方式导入lodash
// import _ from 'lodash'

App({
    onLaunch() {
        // 全局挂载lodash工具库
        wx.$_ = _
    }
})
