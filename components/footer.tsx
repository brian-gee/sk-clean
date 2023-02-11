import { navItems } from './nav';
import { BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

export default function Page({}) {
  return (
    <main className="pt-20">
      <footer className="footer footer-center p-10 rounded">
        <div className="grid grid-flow-col gap-4">
          {navItems.map((item, i) => (
            <a key={i} href={item.href}>
              {item.name}
            </a>
          ))}
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a>
              <BsTwitter className="fill-current" />
            </a>
            <a>
              <BsYoutube className="fill-current" />
            </a>
            <a>
              <FaFacebookF className="fill-current" />
            </a>
          </div>
        </div>
        <div>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </div>
      </footer>
    </main>
  );
}
