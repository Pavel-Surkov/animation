import { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import ScrollToTop from '../../hooks/ScrollToTop'
import Aboutus from '../../components/Public/Aboutus/Aboutus.js'
import Career from '../../components/Public/Career/Career.js'
import Helpcenter from '../../components/Public/Helpcenter/Helpcenter.js'
import Homepage from '../../components/Public/Homepage/Homepage.js'
import Newsroom from '../../components/Public/Newsroom/Newsroom.js'
import SignUp from '../../components/Auth/SignUp/SignUp.js'
import SignIn from '../../components/Auth/SignIn/SignIn.js'

import SupplierProfile from '../../components/Public/SupplierProfile/SupplierProfile.js'
import Products from '../../components/Public/Products/Products'
import Quote from '../../components/Public/Quote/Quote.js'
import SupplierDashboard from '../../components/Admin/Supplier/Dashboard'
import SupplierDashboardMessage from '../../components/Admin/Supplier/DashboardMessageTemp'
import SupplierDashboardService from '../../components/Admin/Supplier/DashboardServicesTemp'
import SupplierDashboardOrders from '../../components/Admin/Supplier/DashboardOrderTemp'
import SupplierDashboardProfile from '../../components/Admin/Supplier/DashboardProfileTemp'
import ForgotPassword from '../../components/Auth/ForgotPassword/ForgotPassword.js'

import PrivacyPolicy from '../../components/Public/PrivacyPolicy/PrivacyPolicy.js'
import FrequentlyAskedQuestion from '../../components/Public/FrequentlyAskedQuestion/FrequentlyAskedQuestion.js'
import TermsAndConditions from '../../components/Public/TermsAndConditions/TermsAndConditions'
import BuyerMyInquiries from '../../components/Admin/Buyer/MyInquiries/MyInquiries'
import BuyerMyQuote from '../../components/Admin/Buyer/MyQuote/MyQuote'
import BuyerDashboardProfile from '../../components/Admin/Buyer/Profile/Profile'
import BuyerDashboardProfilePaymentMethod from '../../components/Admin/Buyer/PaymentMethod/PaymentMethod'
import BuyerDashboardProfileShippingAddress from '../../components/Admin/Buyer/ShippingAddress/ShippingAddress'
import BlogListing from '../../components/Public/Blog/BlogListing/BlogListing'
import Blog from '../../components/Public/Blog/Blog/Blog'
import SupplierDashboardDirectLead from '../../components/Admin/Supplier/DashboardDirectLeadTemp'
import ComingSoon from '../../components/Public/ComingSoon/ComingSoon'
const PublicRoutes = () => (
  <Suspense fallback={<p>Loading ..</p>}>
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={Aboutus} />
          <Route exact path="/newsroom" component={Newsroom} />
          <Route exact path="/careers" component={Career} />
          <Route exact path="/help-center" component={Helpcenter} />
          <Route exact path="/blog" component={BlogListing} />
          <Route exact path="/blog/:id" component={Blog} />

          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={SignIn} />

          {/* TODO remove link  */}
          <Route
            exact
            path="/dashboard/buyer/inquiries"
            component={BuyerMyInquiries}
          />
          <Route
            exact
            path="/dashboard/buyer/quote/:id"
            component={BuyerMyQuote}
          />
          <Route
            exact
            path="/dashboard/buyer/profile"
            component={BuyerDashboardProfile}
          />
          <Route
            exact
            path="/dashboard/buyer/profile/payment-method"
            component={BuyerDashboardProfilePaymentMethod}
          />
          <Route exact path="/coming-soon" component={ComingSoon} />
          <Route
            exact
            path="/dashboard/buyer/profile/shipping-address"
            component={BuyerDashboardProfileShippingAddress}
          />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />

          <Route exact path="/faq" component={FrequentlyAskedQuestion} />
          <Route
            exact
            path="/terms-conditions"
            component={TermsAndConditions}
          />

          <Route exact path="/profile/:id" component={SupplierProfile} />
          <Route exact path="/products/:id" component={Products} />
          <Route exact path="/quote/:id" component={Quote} />

          <Route
            exact
            path="/dashboard/supplier/lead"
            component={SupplierDashboard}
          />
          <Route
            exact
            path="/dashboard/supplier/direct-lead"
            component={SupplierDashboardDirectLead}
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
      </ScrollToTop>
    </Router>
  </Suspense>
)

export default PublicRoutes
