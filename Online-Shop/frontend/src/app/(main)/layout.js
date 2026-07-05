import Header from '@/app/layout/header/Header';
import Footer from '@/app/layout/footer/Footer';
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
