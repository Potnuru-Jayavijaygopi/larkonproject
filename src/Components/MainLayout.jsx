
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';

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
    </div>
  );
  
<ToastContainer/>
}

export default MainLayout;
