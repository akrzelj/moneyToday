export const isBrowser = () => typeof window !== "undefined"

export const getData = () =>
  isBrowser() && window.localStorage.getItem("gatsbySearchData")
    ? JSON.parse(window.localStorage.getItem("gatsbySearchData")).split(" ")
    : []

export const setData = data =>
  window.localStorage.setItem("gatsbySearchData", JSON.stringify(data))

export const getFilterData = () => {
  const user = getData()

  return !!user.username
}
