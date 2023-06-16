import Movies from '@/components/Movies';
import { useState, type FC } from 'react';

interface SearchProps {}

const Search: FC<SearchProps> = ({}) => {
  const [searchKey, setSearchKey] = useState<string>('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchKey(e.currentTarget.value);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 my-8">
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search..."
        className="input input-primary input-md w-full max-w-xl"
        autoFocus
      />
      <Movies searchValue={searchKey} />
    </div>
  );
};
export default Search;
