export default [
  {
    path: '/scinfo',
    name: 'scinfo',
    component: () => import(/* webpackChunkName: "article" */ 'views/scinfo'),
    meta: {
      auth: true,
      title: '生产信息表',
      keepAlive: true
    }
  }
]
