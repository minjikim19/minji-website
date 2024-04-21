import * as React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "gatsby";
import Navigation from "./navigation";
import Footer from "./footer";
import Logo from "../../favicon-32x32.png";

interface Props {
  pageTitle?: any;
  children?: React.ReactNode;
}

const Layout = ({ pageTitle, children }: Props) => {
  return (
    <>
      <Helmet>
        <title>Minji's Website</title>
        {/* <meta name="icon" href={Logo} /> */}
      </Helmet>
      <Navigation />
      <div className="container mx-auto">
        <main>
          <h1 className="text-3xl font-bold underline">{pageTitle}</h1>
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
