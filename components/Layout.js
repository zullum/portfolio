import { Sora } from '@next/font/google';
import TopLeftImg from './TopLeftImg';
import Nav from './Nav';
import Header from './Header';

const sora = Sora({
  subsets: ['latin-ext'],
  weight: ['100', '200', '300', '400', '500', '700', '800'],
  variable: '--font-sora',
});

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site bg-no-repeat bg-cover ${sora.variable} font-sora relative text-white`}
    >
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
