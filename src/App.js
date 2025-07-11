import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate
} from "react-router-dom";
import "./App.css";
import DoctorSignIn from "./Pages/Singin";
import DoctorRegistrationForm from "./Pages/DoctorRegistrationForm";
import LandingPage from "./Pages/LandingPage";
import LayoutWithNavbar from "./Components/LayoutWithNavbar";
import AdminLayout from "./Components/admin/AdminLayout";
import AdminDashboard from "./Pages/admin/AdminDashboard";
import DoctorsManagement from "./Pages/admin/DoctorsManagement";
import PaymentsManagement from "./Pages/admin/PaymentsManagements";
import DiscountsManagement from "./Pages/admin/DiscountsManagements";
import TransactionLogs from "./Pages/admin/TransactionLogs";
import AuditLogs from "./Pages/admin/AuditLogs";
import SecuritySettings from "./Pages/admin/SecuritySettings";
import PatientsManagement from "./Pages/admin/PatientsManagement";
import AboutMedversant from "./Pages/AboutUs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* ✅ Public routes */}
      <Route path="/login" element={<DoctorSignIn />} />
      <Route path="/registration" element={<DoctorRegistrationForm />} />

      {/* ✅ Doctor protected routes */}
      <Route element={<LayoutWithNavbar />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element ={<AboutMedversant/>}/>
        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Route>

      {/* ✅ Admin routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard/>} />
        <Route path="doctors" element={<DoctorsManagement />} />
        <Route path="patients" element={<PatientsManagement/>}/>
        <Route path="payments" element={<PaymentsManagement />} />
        <Route path="discounts" element={<DiscountsManagement />} />
        <Route path="transactions" element={<TransactionLogs />} />
        <Route path="audit" element={<AuditLogs />} />
        <Route path="security" element={<SecuritySettings />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;