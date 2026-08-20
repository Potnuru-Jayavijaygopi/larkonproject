
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MainLayout() {
  return (
    <div className="app-container">
     
      <Sidebar />

      <div className="main-content">
       
        <Header title="ACCORDION" />

        <main className="page-container">
          <Outlet />
        </main>

        <Footer />
      </div>
       <ToastContainer/>
    </div>
  );
}

export default MainLayout;
