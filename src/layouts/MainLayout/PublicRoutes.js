import { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Aboutus from '../../components/Public/Aboutus/Aboutus.js'
import Career from '../../components/Public/Career/Career.js'
import Helpcenter from '../../components/Public/Helpcenter/Helpcenter.js'
import Homepage from '../../components/Public/Homepage/Homepage.js'
import Newsroom from '../../components/Public/Newsroom/Newsroom.js'
const PublicRoutes = () => (
  <Suspense fallback={<p>Loading ..</p>}>
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={Aboutus} />
        <Route exact path="/newsroom" component={Newsroom} />
        <Route exact path="/careers" component={Career} />
        <Route exact path="/help-center" component={Helpcenter} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </Suspense>
)

export default PublicRoutes
