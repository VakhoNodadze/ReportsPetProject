import Default from 'utils/layout'


import MainPage from 'pages/MainPage'


const routesConfig: Array<AppRouteProps> = [
  {
    path: '/',
    exact: true,
    component: MainPage,
    layout: Default
  }
]

export default routesConfig