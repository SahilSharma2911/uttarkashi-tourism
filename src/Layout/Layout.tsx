import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";


interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className='bg-white'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

