// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

import Room from '../pages/Room'
import Facility from '../pages/Facility'
import Access from '../pages/Access'

// 创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path: '/',
            component:Room
        },
        {
            path: '/room',
            component:Room
        },
        {
            path: '/facility',
            component:Facility
        },
        {
            path: '/access',
            component:Access
        }
    ]
})

