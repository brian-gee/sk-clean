import { BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

export default function Page({}) {
  return (
    <main>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Services</a>
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
          <p>Copyright © 2023 - All right reserved</p>
        </div>
      </footer>
    </main>
  );
}
