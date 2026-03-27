import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from '../ui/ScrollProgress';
import WhatsAppButton from '../ui/WhatsAppButton';
import LoadingScreen from '../ui/LoadingScreen';

const Layout = () => {
  return (
    <div className="bg-white">
      <LoadingScreen />
      <ScrollProgress />
      <WhatsAppButton />
      <Navbar />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
