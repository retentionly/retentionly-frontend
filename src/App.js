import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import './App.css';
// import PublicRoutes from "./components/PrivateRoutes";
import { useCallback, useState } from "react";
import { hotjar } from 'react-hotjar';
import EmailTemplateFive from "./container/EmailPreview/EmailTemplateFive";
import EmailTemplateFour from "./container/EmailPreview/EmailTemplateFour";
import EmailTemplateOne from "./container/EmailPreview/EmailTemplateOne";
import EmailTemplateThree from "./container/EmailPreview/EmailTemplateThree";
import EmailTemplateTwo from "./container/EmailPreview/EmailTemplateTwo";
import { useGetUserQuery } from "./features/user/userApi";
import { setTemplateLength, setUser } from "./features/user/userSlice";
import auth from "./firebase.init";
import Layout from "./layout";
import Dashboard from "./pages/Admin/Dashboard";
import UserDetail from "./pages/Admin/UserDetail";
import UserMaster from "./pages/Admin/UserMaster";
import UserTemplates from "./pages/Admin/UserTemplates";
import Preview from "./pages/Admin/UserTemplates/Preview";
import Appointment from "./pages/Appointment";
import BookDemo from "./pages/BookDemo";
import EmailFinal from "./pages/EmailFinal";
import Emails from "./pages/Emails/Emails";
import EventConfirmedDashboard from "./pages/EventConfirmedDashboard";
import FinalConfirmation from "./pages/FinalConfirmation";
import Goals from "./pages/Goals";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import Master from "./pages/Master";
import Membership from "./pages/Membership";
import PaymentSuccess from "./pages/Membership/PaymentSuccess";
import NotFound from "./pages/NotFound";
import Sales from "./pages/Sales";
import UserDashboard from "./pages/UserDashboard";
import { RequireAdmin, RequireAuth, RequireConfirmedUser, RequirePayment } from "./routes/middleware";
import { NewUserRoute, OldUserRoute } from "./routes/PrivateRoutes";
import AdminRoute from "./routes/PrivateRoutes/AdminRoute";
import Loader from "./ui/Loaders/Loading";
import trackPathForAnalytics from "./utils/trackPageForAnalytics";

function App() {
  const [first, setFirst] = useState(true);
  const dispatch = useDispatch();
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const { data: userData, isLoading: userLoading, isError: userError } = useGetUserQuery(user?.email);

  useEffect(() => {
    if (userData && first) {
      !userData.paymentStatus ? navigate("/membership") : userData.eventConfirmed ? navigate("/final") : navigate("/goals");
      setFirst(false)
    }
  }, [userData, first])

  // HOTJAR INITIALIZE
  useEffect(() => {
    hotjar.initialize(3199799, 6)
  }, [])

  // Check if Hotjar has been initialized before calling its methods
  if (hotjar.initialized()) {
    hotjar.identify('USER_ID', { userProperty: 'value' });
  }

  // scroll to top when path changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [pathname]);

  // if userData is true dispatch template length and user with userdata
  useEffect(() => {
    if (userData) {
      dispatch(setTemplateLength(userData?.templates?.length))
      dispatch(setUser(userData))
    }
  }, [userData])

  // GOOGLE ANALYTICS
  const analytics = useCallback(() => {
    trackPathForAnalytics({ path: pathname, search: search, title: pathname.split("/")[1] });
  }, [pathname, search]);

  useEffect(() => {
    analytics();
  }, [analytics]);

  if (userLoading) {
    return <Loader />
  }

  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route element={<RequireAuth />}>
          {/* Routes For New User Who Isnt completed their template confirmation and event scheduling */}
          <Route element={<NewUserRoute />}>
            <Route element={<RequirePayment />}>
              <Route path="/goals" element={<Goals />} />
              <Route path="/dashboard" element={<UserDashboard />} />
              {/* <Route path="email/:id" element={<EmailDashboard />} /> */}
              <Route path="/master" element={<Master />} />
              {/* <Route path="emails" element={<Emails />} /> */}
              <Route path="/email">
                <Route index element={<Emails />} />
                <Route path="1" element={<EmailTemplateOne />} />
                <Route path="2" element={<EmailTemplateTwo />} />
                <Route path="3" element={<EmailTemplateThree />} />
                <Route path="4" element={<EmailTemplateFour />} />
                <Route path="5" element={<EmailTemplateFive />} />
              </Route>
              <Route path="/email-final" element={<EmailFinal />} />
              <Route path="/success" element={<PaymentSuccess />} />
              <Route path="/appointment" element={<Appointment />} />
            </Route>
            <Route path="/membership" element={<Membership />} />
          </Route>
          {/* New User Routes End*/}

          {/* Routes For Old user who has confirmed their template and scheduled event */}
          <Route element={<OldUserRoute />}>
            <Route path="/final" element={<FinalConfirmation />} />
            <Route path="/user" element={<Layout />}>
              <Route element={<RequireConfirmedUser />}>
                <Route index element={<EventConfirmedDashboard />} />
              </Route>
            </Route>
          </Route>
          {/* Old User Routes End */}

          {/* Admin Routes */}
          <Route element={<AdminRoute />}>
            <Route path="/admin" element={<Layout />}>
              <Route element={<RequireAdmin />}>
                <Route index element={<Dashboard />} />
                <Route path="/admin/user/:email" element={<UserDetail />} />
                <Route path="/admin/master/:email" element={<UserMaster />} />
                <Route path="/admin/templates/:email" element={<UserTemplates />} />
                <Route path="/admin/template/:id" element={<Preview />} />
              </Route>
            </Route>
          </Route>
          {/* Admin Routes End */}
        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Sales />} />
        <Route path="/book-a-demo" element={<BookDemo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
