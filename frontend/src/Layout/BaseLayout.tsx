import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { type ReactNode, type FC } from 'react';

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen mx-auto grid grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="px-12">{children}</main>
      <Footer />
    </div>
  );
};
export default BaseLayout;
