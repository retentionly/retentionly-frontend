import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import './App.css';
import Loader from "./components/Loaders/Loading";
import { useGetAdminQuery } from "./features/admin/adminApi";
// import PublicRoutes from "./components/PrivateRoutes";
import { useGetUserQuery } from "./features/user/userApi";
import { setEventConfirmed, setTemplateLength } from "./features/user/userSlice";
import auth from "./firebase.init";
import Layout from "./layout";
import Dashboard from "./pages/Admin/Dashboard";
import UserDetail from "./pages/Admin/UserDetail";
import UserMaster from "./pages/Admin/UserMaster";
import UserTemplates from "./pages/Admin/UserTemplates";
import EmailPreview from "./pages/Admin/UserTemplates/EmailPreview";
import Appointment from "./pages/Appointment";
import EmailDashboard from "./pages/EmailDashboard";
import Emails from "./pages/Emails/Emails";
import EventConfirmedDashboard from "./pages/EventConfirmedDashboard";
import FinalConfirmation from "./pages/FinalConfirmation";
import Goals from "./pages/Goals";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import Master from "./pages/Master";
import Membership from "./pages/Membership";
import PaymentSuccess from "./pages/Membership/PaymentSuccess";
import UserDashboard from "./pages/UserDashboard";
import RequireAuth from "./routes/middleware/RequireAuth/RequireAuth";
import RequirePayment from "./routes/middleware/RequirePayment/RequirePayment";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const from = location.state?.from?.pathname || '/';

  const { data: adminData, isLoading: adminLoading, isError: adminError } = useGetAdminQuery(user?.email);
  const { data: userData, isLoading: userLoading, isError: userError } = useGetUserQuery(user?.email);
  const { admin: adminState, user: userState, payment } = useSelector(state => state);

  useEffect(() => {
    if (userData) {
      dispatch(setTemplateLength(userData?.templates?.length))
      dispatch(setEventConfirmed(userData?.eventConfirmed))
    }
  }, [userData, user])

  if (loading || adminLoading || userLoading || userState === undefined || adminState === undefined) {
    return <Loader />
  }

  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route element={<Layout />}>
          <Route path="/" element={<PrivateRoutes condition={user && !adminState?.admin && !userState?.eventConfirmed} to="/user" />}>
            <Route element={<RequirePayment />}>
              <Route index element={<Goals />} />
              <Route path="dashboard" element={<UserDashboard />} />
              <Route path="email/:id" element={<EmailDashboard />} />
              <Route path="master" element={<Master />} />
              <Route path="emails" element={<Emails />} />
              <Route path="success" element={<PaymentSuccess />} />
              <Route path="appointment" element={<Appointment />} />
            </Route>
            <Route path="/membership" element={<Membership />} />
          </Route>
          <Route
            path="final"
            element={
              <FinalConfirmation />
            } />
          <Route path="/user" element={
            <PrivateRoutes
              condition={user && !adminState?.admin && userState?.eventConfirmed}
              to="/admin" />
          }>
            <Route index element={<EventConfirmedDashboard />} />
          </Route>
          <Route
            path="/admin"
            element={
              <PrivateRoutes
                condition={user && adminState?.admin}
                to="/" />
            }>
            <Route index element={<Dashboard />} />
            <Route path="/admin/user/:email" element={<UserDetail />} />
            <Route path="/admin/master/:email" element={<UserMaster />} />
            <Route path="/admin/templates/:email" element={<UserTemplates />} />
            <Route path="/admin/template/:id" element={<EmailPreview />} />
          </Route>
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;

/* 
<Routes>
        <Route path="/" element={
          <RequireAuth>
            <Layout isLoading={isUserLoading}/>
          </RequireAuth>
        }>
          <Route index element={
            <Goals />} />
          <Route path="dashboard" element={
            <UserDashboard />
          } />
          <Route path="emails/:id" element={

            <EmailDashboard />
          } />
          <Route path="master" element={

            <Master />
          } />
          <Route path="emails" element={

            <Emails />
          } />
          <Route path="membership" element={<Membership />} />
          <Route path="membership/:email/:amount" element={<CheckoutPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
*/



/* 


 // <Routes>
    //   <Route element={<RequireAuth />}>
    //     <Route element={<RequirePayment />}>
    //       <Route path="/" element={<Layout />}>
    //         <Route index element={<Goals />} />
    //         <Route path="dashboard" element={<UserDashboard />} />
    //         <Route path="email/:id" element={<EmailDashboard />} />
    //         <Route path="master" element={<Master />} />
    //         <Route path="emails" element={<Emails />} />
    //         <Route path="success" element={<PaymentSuccess />} />
    //         <Route path="appointment" element={<Appointment />} />
    //         <Route path="final" element={<FinalConfirmation />} />
    //       </Route>
    //     </Route>
    //     <Route path="membership" element={<Membership />} />
    //     <Route element={<RequireEvent />}>
    //       <Route path="/user" />
    //     </Route>
    //   </Route>
    //   <Route element={<RequireAdmin />}>
    //     <Route path="/admin" element={<Admin />}>
    //       <Route index element={<Dashboard />} />
    //       <Route path="/admin/user/:email" element={<UserDetail />} />
    //       <Route path="/admin/master/:email" element={<UserMaster />} />
    //       <Route path="/admin/templates/:email" element={<UserTemplates />} />
    //       <Route path="/admin/template/:id" element={<Preview />} />
    //     </Route>
    //   </Route>
    //   <Route path="/login" element={<Login />} />
    //   <Route path="/register" element={<Register />} />
    // </Routes>
*/