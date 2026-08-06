
import { BsHeartFill } from 'react-icons/bs';

function Footer() {
  return (
    <footer className="footer-custom">
      <div>
        2024 &copy; Larkon. Crafted by{' '}
        <span className="text-danger mx-1">
          <BsHeartFill className="small" />
        </span>{' '}
        <a href="https://techzaa.in" target="_blank" rel="noreferrer">
          Techzaa
        </a>
      </div>
    </footer>
  );
}

export default Footer;
