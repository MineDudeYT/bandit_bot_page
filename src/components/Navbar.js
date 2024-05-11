import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <navbar className="navbar">
        <nav className="navbar-header">
          <ul>
            <li>
              <Link className="h-color" href="/">
                Bandit
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="navbar-items">
          <ul>
            <li>
              <Link className="p-color" href="/">
                .home
              </Link>
            </li>
            <li>
              <Link className="p-color" href="/commands">
                .commands
              </Link>
            </li>
            <li>
              <Link className="p-color" href="https://buy.stripe.com/14k4ja4Do51PeRi4gj">
                .buy-access
              </Link>
            </li>
          </ul>
        </nav>
      </navbar>
    </div>
  );
};

export default Navbar;
