import * as React from 'react'
import Layout from '../components/layout'
import ProjectComponent from '../components/projects'
import TechnologiesComponent from '../components/technologies'

const IndexPage = () => {
  return (
    <Layout pageTitle="Minji's Website">
      <p>Testing</p>
      <TechnologiesComponent></TechnologiesComponent>
      <ProjectComponent></ProjectComponent>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage;