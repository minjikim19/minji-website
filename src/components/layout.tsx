import * as React from "react";
import { Link } from "gatsby";
import Navigation from "./navigation";

interface Props {
  pageTitle?: any;
  children?: React.ReactNode;
}

const Layout = ({ pageTitle, children }: Props) => {
  return (
    <>
      <Navigation />
      <div className="container mx-auto">
        {/* <nav>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav> */}
        <main>
          <h1 className="text-3xl font-bold underline">{pageTitle}</h1>
          {children}
        </main>
        <div>
          <p>Footer</p>
        </div>
      </div>
    </>
  );
};

export default Layout;
