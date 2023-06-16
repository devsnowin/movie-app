import { type FC } from 'react';
import { FiSearch } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className="navbar bg-base-100 px-8">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Moviez
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 flex items-center">
          <li>
            <Link to="/search">
              <FiSearch className="text-xl" />
            </Link>
          </li>
          <li>
            <Link to="/" target="_blank">
              <AiFillGithub className="text-2xl" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
