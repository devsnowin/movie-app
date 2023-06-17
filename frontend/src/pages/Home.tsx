import Movies from '@/components/Movies';
import { useEffect, type FC } from 'react';

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  const getMovies = async () => {
    const res = await fetch('/api/v1/movies');
    const json = await res.json();
    console.log(json);
  };

  useEffect(() => {
    (async () => await getMovies())();
  }, []);

  return (
    <div className="flex flex-col items-center my-8">
      {/* <h1>Home</h1> */}
      <Movies />
    </div>
  );
};
export default Home;
