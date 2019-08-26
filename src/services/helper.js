export const isBrowser = () => typeof window !== "undefined"

export const getData = () =>
  isBrowser() && window.localStorage.getItem("gatsbyZadnjaStranica")
    ? window.localStorage.getItem("gatsbyZadnjaStranica")
    : "/"

export const setLastPage = data => {
  window.localStorage.setItem("gatsbyZadnjaStranica", data)
  console.log("################# set")
  console.log(getData())
}

export const getLastPage = () => {
  console.log("################# get")
  console.log(getData())

  return getData().substr(1, getData().length - 1)
}
