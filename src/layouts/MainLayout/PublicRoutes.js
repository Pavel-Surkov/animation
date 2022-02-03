import { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Homepage from '../../components/Public/Homepage/Homepage.js'

const PublicRoutes = () => (
  <Suspense fallback={<p>Loading ..</p>}>
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </Suspense>
)

export default PublicRoutes
