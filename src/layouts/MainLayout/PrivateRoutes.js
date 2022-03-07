import { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import ScrollToTop from '../../hooks/ScrollToTop'
import ForgotPassword from '../../components/Auth/ForgotPassword/ForgotPassword.js'
import BuyerMyInquiries from '../../components/Admin/Buyer/MyInquiries/MyInquiries'
import BuyerMyQuote from '../../components/Admin/Buyer/MyQuote/MyQuote'
import BuyerDashboardProfile from '../../components/Admin/Buyer/Profile/Profile'

const PrivateRoutes = () => (
  <Suspense fallback={<p>Loading ..</p>}>
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route
            exact
            path="/dashboard/buyer/inquiries"
            component={BuyerMyInquiries}
          />
          <Route exact path="/dashboard/buyer/quote" component={BuyerMyQuote} />
          <Route
            exact
            path="/dashboard/buyer/profile"
            component={BuyerDashboardProfile}
          />
          <Redirect to="/" />
        </Switch>
      </ScrollToTop>
    </Router>
  </Suspense>
)

export default PrivateRoutes
