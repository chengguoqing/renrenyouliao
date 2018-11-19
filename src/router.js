import Vue from 'vue'
import Router from 'vue-router'
import index from './page/index.vue'
import myliao from './page/myliao.vue'
import user_info from './page/user_info.vue'
import chakanliao from './page/chakanliao.vue'
import shouyimx from './page/shouyimx.vue'
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

    }
  ]
})
