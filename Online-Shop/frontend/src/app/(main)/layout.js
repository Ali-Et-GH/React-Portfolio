import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import { setReturnUrl } from '@/hooks/useReturnUrlParam';


export default function MainLayout({ children }) {

  return (
    <>
      <Header/>
      <section>
        {children}
      </section>
      <Footer/>
    </>
  );
}
