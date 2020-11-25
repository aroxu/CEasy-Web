export const getDarkModeStatus = () => {
  if (localStorage.getItem('darkmode') === null) {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      localStorage.setItem('darkmode', 'true')
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches
    ) {
      localStorage.setItem('darkmode', 'false')
    } else {
      localStorage.setItem('darkmode', 'false')
    }
  }
  return localStorage.getItem('darkmode') === 'true' ? true : false
}

export const toggleDarkModeStatus = () => {
  const darkModeEnabled = localStorage.getItem('darkmode')
  if (darkModeEnabled === 'true') {
    localStorage.setItem('darkmode', 'false')
  } else {
    localStorage.setItem('darkmode', 'true')
  }
  return window.location.reload()
}
