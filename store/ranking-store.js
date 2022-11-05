import { HYEventStore } from 'hy-event-store'

import htRequest from '../utils/http'

const rankingStore = new HYEventStore({
    state: {
        hotRanking: {}
    },
    actions: {
        getRankingDataAction(ctx) {
            htRequest.run('getRankings').then((res) => {
                ctx.hotRanking = res.playlist
            })
        }
    }
})

export { rankingStore }
