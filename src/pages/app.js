import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Profile from "../components/profile"
import Login from "../components/login"
import PrivateRoute from "../components/privateRoute"
import Register from "./../components/register"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
      <Register path="/app/register" />
    </Router>
  </Layout>
)

export default App
