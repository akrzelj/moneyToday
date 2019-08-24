export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

export const handleLogin = ({ username, password }) => {
  if (username === `user123` && password === `12345`) {
    return setUser({
      username: `user123`,
      name: `Someone`,
      email: `one@cmp.org`,
    })
  }

  return false
}

export const loginWithoutCheckingCredentials = ({
  name,
  username,
  password,
  email,
}) => {
  return setUser({
    name: name,
    username: username,
    email: email,
  })

  return false
}

export const isLoggedIn = () => {
  const user = getUser()

  return !!user.username
}

export const logout = callback => {
  setUser({})
  callback()
}
