import { type FC } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import BaseLayout from './Layout/BaseLayout';
import Search from './pages/Search';
import Review from './pages/Review';

interface AppProps {}

const App: FC<AppProps> = ({}) => {
  return (
    <HashRouter>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movies/:id" element={<Review />} />
        </Routes>
      </BaseLayout>
    </HashRouter>
  );
};
export default App;
