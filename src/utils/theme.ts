export const getDarkModeStatus = () => {
  if (localStorage.getItem('darkmode') === null) {
    localStorage.setItem('darkmode', 'false')
  }
  return localStorage.getItem('darkmode') === 'true' ? true : false
}
export const toggleDarkModeStatus = () => {
  console.log('called')
  const darkModeEnabled = localStorage.getItem('darkmode')
  if (darkModeEnabled === 'true') {
    localStorage.setItem('darkmode', 'false')
  } else {
    localStorage.setItem('darkmode', 'true')
  }
  return window.location.reload()
}
