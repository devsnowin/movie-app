import { type FC } from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="px-8 py-4 text-center">
      <p>
        @2023 | Made by{' '}
        <a href="https://zipy.live/snowin/website" target="_blank">
          snowin
        </a>
      </p>
    </footer>
  );
};
export default Footer;
