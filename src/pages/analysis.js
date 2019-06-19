import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"

export default () => (
  <Layout>
    <h1>Hello {isLoggedIn() ? getUser().name : "dear user"}!</h1>
    <p>
      {isLoggedIn() ? (
        <>analysis</>
      ) : (
        <>
          You should <Link to="/app/login">log in</Link> or{" "}
          <Link to="/app/register">register</Link>to see restricted content
        </>
      )}
    </p>
  </Layout>
)
