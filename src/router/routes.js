const routes = [
  {path: '/', name: 'DashBoard', component: loadPage('DashBoard')}
]

export default routes

/* ******************************************** */

function loadPage (name) {
  return () => import(`@/Pages/${name}.vue`)
}
