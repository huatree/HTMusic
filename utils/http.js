import apiConfig from '../api/index'

const BASE_URL = 'http://123.207.32.32:9001'

class HTRequest {
    run(serviceName, originalParams = {}, options = {}) {
        return new Promise((resolve, reject) => {
            const service = apiConfig[serviceName]
            if (service.isMock) {
                try {
                    const result = require(`../mock/${serviceName}.js`) // 返回的是 module.exports 对象， 默认为 {}
                    console.log(`${serviceName}获取mock数据: ${JSON.stringify(result)}`)
                    resolve(result)
                } catch (error) {
                    console.error(`${serviceName}模拟数据不存在`)
                    reject(error)
                }
            } else {
                let finalUrl = ''
                if (service.overUrl) {
                    finalUrl = service.overUrl
                } else {
                    finalUrl = BASE_URL + service.url
                }
                console.log(`${serviceName}入参：${JSON.stringify(originalParams)}`)
                wx.request({
                    url: finalUrl,
                    method: service.method,
                    data: originalParams,
                    success: (res) => {
                        console.log(`${serviceName}出参：${JSON.stringify(res)}`)
                        resolve(res.data)
                    },
                    fail: (err) => {
                        reject(err)
                    }
                })
            }
        })
    }
}

const htRequest = new HTRequest()
export default htRequest
