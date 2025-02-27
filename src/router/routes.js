const routes = [
  {
    path: '/',
    component: loadPage('secure'),
    children: [
      {path: '/', name: 'DashBoard', component: loadPage('DashBoard')},
      {path: 's/addUser', name: 'AddUser', component: loadPage('AddUser')},
      {path: 'p/:username', name: 'Profile', props: true, component: loadPage('Profile')}
    ]
  },
  {path: '/login', name: 'LoginPage', component: loadPage('Auth/Login')}
]

export default routes

/* ******************************************** */

function loadPage (name) {
  return () => import(`@/Pages/${name}.vue`)
}
