const routes = [
  {path: '/', name: 'DashBoard', component: loadPage('DashBoard')},
  {path: '/p/:username', name: 'Profile', props: true, component: loadPage('Profile')}
]

export default routes

/* ******************************************** */

function loadPage (name) {
  return () => import(`@/Pages/${name}.vue`)
}
