import * as React from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "./navigation";
import Footer from "./footer";
import favicon16x16 from "../assets/favicon-16x16.png";
import favicon32x32 from "../assets/favicon-32x32.png";

interface Props {
  pageTitle?: any;
  children?: React.ReactNode;
}

const Layout = ({ pageTitle, children }: Props) => {
  const faviconLinks = [
    { rel: "icon", type: "image/png", sizes: "16x16", href: favicon16x16 },
    { rel: "icon", type: "image/png", sizes: "32x32", href: favicon32x32 },
  ];
  return (
    <>
      <Helmet link={faviconLinks}>
        <title>Minji's Website</title>
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
