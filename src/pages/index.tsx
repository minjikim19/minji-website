import * as React from "react";
import { HelmetProvider } from "react-helmet-async";
import Layout from "../components/layout";
import Project from "../components/projects";
import Technologies from "../components/technologies";
import About from "../components/about";
import Main from "../components/main";
import Contact from "../components/contact";

const IndexPage = () => {
  return (
    <HelmetProvider>
      <Layout>
        <Main></Main>
        <About></About>
        <Technologies></Technologies>
        <Project></Project>
        <Contact></Contact>
      </Layout>
    </HelmetProvider>
  );
};

export default IndexPage;
