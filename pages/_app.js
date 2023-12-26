import '../styles/globals.css';
import Layout from '../components/Layout';
import Transition from '../components/Transition';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait"></AnimatePresence>
      <motion.div key={router.route} className="h-full">
        <Transition />
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  );
}

export default MyApp;
