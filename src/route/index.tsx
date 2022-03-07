import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routesConfig from './routes'

const AppRoute: FC <AppRouteProps> =({
  component: Component, 
  layout: Layout, 
  path,
  ...rest
}) => {
  return (
    <Layout>
      <Component {...rest} />
    </Layout>
  )
}



const Router = () => {

  return(
    <>
      <BrowserRouter>
        <Routes>
          {routesConfig.map(({ component, layout, exact, path, ...rest }) => (
            // <AppRoute path={path} component={component} layout={layout} exact={exact} />
            <Route path={path} element={<AppRoute layout={layout} component={component} /> }/>
          ))}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
