import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './ProtectedRoute';
import HomePage from './pages/homePage'
import About from './pages/CommonPages/about';
import Contact from './pages/CommonPages/contact';
import ProtectedRouteExample from './pages/CommonPages/protectedRoute';
import DynamicRoute from './pages/CommonPages/dynamicRoutes'
import Unauthorized from './pages/ErrorPages/Unauthorized';
import NotFound from "./pages/ErrorPages/NotFound";
import AdminDashBoard from './pages/Dashboard/adminDashBoard';
import UserDashBoard from './pages/Dashboard/userDashBoard';
import AddForm from './component/Curd/addForm';
import { AuthProvider  } from './context/AuthContext';
import EditForm from './component/Curd/editform';
import Login from './component/login/login';
import LoginTest from './Test';
import Counter from './component/CounterRedux/Counter';
import User from './component/UserReduxThunk/User';
import  OverAllDisplay  from './component/Theme/overAllDisplay';
import FetchTasks from './component/UserReduxThunk/FetchTask';

function App() {
  return (
    <>
    <AuthProvider>
    <Router>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/addForm">add Form</Link> | {" "}
        <Link to="/login">Login</Link>| {" "}
        <Link to="/LoginTest">Counter</Link>| {" "}
        <Link to="/Counter">Counter</Link>| {" "}
        <Link to="/OverAllDisplay">ContextExample</Link> | {" "}
        <Link to="/user">User</Link>  | {" "}
       {/*  <Link to="/FetchTasks">FetchTasksReduxMiddleware</Link>  | {" "} */}

      </nav>

      <Routes>
      <Route path="/unauthorized" element={<Unauthorized />} />
       <Route path="*" element={<NotFound />} />  //Not found page
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/addForm" element={<AddForm />} />
        <Route path="/user/edit-user/:id" element={<EditForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/LoginTest" element={<LoginTest />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/OverAllDisplay" element={<OverAllDisplay />} />
         <Route path="/user" element={<User />} />
      {/*    <Route path="/FetchTasks" element={<FetchTasks />} /> */} 

        

         {/* Protected Route Example */}
         <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <ProtectedRouteExample /> // protected Routes
            </ProtectedRoute>
          }
        />
        {/* Protected Route Example Ends*/}
         {/* Dynamic Route Example */}
        <Route path="/user/:id" element={<DynamicRoute />} />
         {/* Dynamic Route Example Ends*/}
         {/* Role Based Route Example */}
         <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashBoard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user"
            element={
              <ProtectedRoute allowedRoles={['admin', 'user']}>
                <UserDashBoard />
              </ProtectedRoute>
            }
          />
          {/* Role Based Route Example Ends*/}
      </Routes>
    </Router>
    </AuthProvider>
    <ToastContainer />
   </>
  );
}

export default App;
