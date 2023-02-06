import { HiMenuAlt1 } from 'react-icons/hi';

const navItems = [
  {
    name: 'Home',
    href: '#home',
  },
  {
    name: 'Services',
    href: '#services',
  },
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
];

export default function Nav({}) {
  return (
    <main>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <HiMenuAlt1 className="text-xl" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navItems.map((item, i) => (
                <li key={i}>
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">SK Clean</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((item, i) => (
              <li key={i}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
