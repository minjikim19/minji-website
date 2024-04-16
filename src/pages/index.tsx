import * as React from "react";
import Layout from "../components/layout";
import Project from "../components/projects";
import Technologies from "../components/technologies";
import About from "../components/about";
import Main from "../components/main";
import Contact from "../components/contact";

const IndexPage = () => {
  return (
    <Layout>
      <Main></Main>
      <About></About>
      <Technologies></Technologies>
      <Project></Project>
      <Contact></Contact>
    </Layout>
  );
};

export const Head = () => {
  <>
    <title>Home Page</title>
  </>;
};

export default IndexPage;
