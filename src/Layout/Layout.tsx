import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import WA from "../components/layout/WA";


interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className='bg-white'>
      <Navbar />
      {children}
      <Footer />
      <WA />
    </div>
  )
}

export default Layout

