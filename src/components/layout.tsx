import * as React from "react";
import { Link } from "gatsby";
import Navigation from "./navigation";
import Footer from "./footer";

interface Props {
  pageTitle?: any;
  children?: React.ReactNode;
}

const Layout = ({ pageTitle, children }: Props) => {
  return (
    <>
      <Navigation />
      <div className="container mx-auto">
        <main>
          <h1 className="text-3xl font-bold underline">{pageTitle}</h1>
          {children}
        </main>
        <div>
          <p>Footer</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
