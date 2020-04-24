import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import GithubCorner from 'react-github-corner'
//own
//<Badge pill (.|\n)*?</Badge> - correct regexp for dell all badges pill
import Layout from 'components/Layout'
import './index.css'

const App = () => {
  return (
    <>
      <GithubCorner href="https://github.com/zloid/currency-processing-app" />
      <Layout />   
    </>
  )
}

export default App
