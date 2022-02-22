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
import SignUp from '../../components/Auth/SignUp/SignUp.js'
import SignIn from '../../components/Auth/SignIn/SignIn.js'
import GreetingTemp from '../../components/Auth/SignUp/GreetingTemp.js'
import BuyerTemp from '../../components/Auth/SignUp/Buyertemp.js'
import SupplierTemp from '../../components/Auth/SignUp/SupplierTemp'
import SupplierDetailTemp from '../../components/Auth/SignUp/SupplierDetailTemp.js'
import SupplierCompletedTemp from '../../components/Auth/SignUp/SupplierCompleted.js'
import SupplierProfile from '../../components/Public/SupplierProfile/SupplierProfile.js'
import Products from '../../components/Public/Products/Products'
import Quote from '../../components/Public/Quote/Quote.js'
import SupplierDashboard from '../../components/Admin/Supplier/Dashboard'
import SupplierDashboardMessage from '../../components/Admin/Supplier/DashboardMessageTemp'
import SupplierDashboardService from '../../components/Admin/Supplier/DashboardServicesTemp'
import SupplierDashboardOrders from '../../components/Admin/Supplier/DashboardOrderTemp'
import SupplierDashboardProfile from '../../components/Admin/Supplier/DashboardProfileTemp'
import ForgotPassword from '../../components/Auth/ForgotPassword/ForgotPassword.js'
import SignUpTemp from '../../components/Auth/SignUp/SignUpTemp/SignUpTemp.js'

const PublicRoutes = () => (
  <Suspense fallback={<p>Loading ..</p>}>
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={Aboutus} />
        <Route exact path="/newsroom" component={Newsroom} />
        <Route exact path="/careers" component={Career} />
        <Route exact path="/help-center" component={Helpcenter} />

        <Route exact path="/user-type" component={SignUp} />
        <Route exact path="/signup" component={SignUpTemp} />
        <Route exact path="/login" component={SignIn} />

        {/* TODO remove link  */}
        <Route exact path="/signup/buyer" component={BuyerTemp} />
        <Route exact path="/signup/supplier" component={SupplierTemp} />
        <Route
          exact
          path="/signup/supplier-details"
          component={SupplierDetailTemp}
        />
        <Route
          exact
          path="/signup/completed-supplier"
          component={SupplierCompletedTemp}
        />
        <Route exact path="/profile/:id" component={SupplierProfile} />
        <Route exact path="/products/:id" component={Products} />
        <Route exact path="/quote" component={Quote} />
        <Route exact path="/signup/completed" component={GreetingTemp} />
        <Route
          exact
          path="/dashboard/supplier/lead"
          component={SupplierDashboard}
        />
        <Route
          exact
          path="/dashboard/supplier/message"
          component={SupplierDashboardMessage}
        />
        <Route
          exact
          path="/dashboard/supplier/services"
          component={SupplierDashboardService}
        />
        <Route
          exact
          path="/dashboard/supplier/orders"
          component={SupplierDashboardOrders}
        />
        <Route
          exact
          path="/dashboard/supplier/profile"
          component={SupplierDashboardProfile}
        />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </Suspense>
)

export default PublicRoutes
