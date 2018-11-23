import Vue from 'vue'
import Router from 'vue-router'
import index from './page/index.vue'
import myliao from './page/myliao.vue'
import user_info from './page/user_info.vue'
import chakanliao from './page/chakanliao.vue'
import shouyimx from './page/shouyimx.vue'
import guanzhu from './page/guanzhu.vue'
import help from './page/help.vue'
import message from './page/message.vue'
import seniority from './page/seniority.vue'
import sale_subsidiary from './page/sale_subsidiary.vue'
import promotion_statistics from './page/promotion_statistics.vue'
import commission_statistics from './page/commission_statistics.vue'
import liaoxiangq from './page/liaoxiangq.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index,
            meta: {
                title: '新建料'
            }

    }, {
            path: '/myliao',
            name: 'myliao',
            component: myliao,
            meta: {
                title: '我的料'
            }

    }, {
            path: '/user_info',
            name: 'user_info',
            component: user_info,
            meta: {
                title: '我的'
            }

    }, {
            path: '/chakanliao',
            name: 'chakanliao',
            component: chakanliao,
            meta: {
                title: ''
            }

    }, {
            path: '/shouyimx',
            name: 'shouyimx',
            component: shouyimx,
            meta: {
                title: '收益明细'
            }

    }, {
            path: '/guanzhu',
            name: 'guanzhu',
            component: guanzhu,
            meta: {
                title: '关注'
            }

    }, {
            path: '/help',
            name: 'help',
            component: help,
            meta: {
                title: '帮助'
            }

    }, {
            path: '/message',
            name: 'message',
            component: message,
            meta: {
                title: '消息'
            }

    }, {
            path: '/seniority',
            name: 'seniority',
            component: seniority,
            meta: {
                title: '推广用户排行'
            }

    }, {
            path: '/sale_subsidiary',
            name: 'sale_subsidiary',
            component: sale_subsidiary,
            meta: {
                title: '明细'
            }

    }, {
            path: '/promotion_statistics',
            name: 'promotion_statistics',
            component: promotion_statistics,
            meta: {
                title: '推广用户统计'
            }

    }, {
            path: '/commission_statistics',
            name: 'commission_statistics',
            component: commission_statistics,
            meta: {
                title: '推广用户卖料提成统计'
            }

    }, {
            path: '/liaoxiangq',
            name: 'liaoxiangq',
            component: liaoxiangq,
            meta: {
                title: '料信息'
            }

    }
  ]
})
