const AL = (data) => alert(JSON.stringify(data))
const parseJSON = (data) => data !== 'undefined' && JSON.parse(data)
const getLocal = (key) => parseJSON(window.localStorage.getItem(key))
const setLocal = (key, value) => localStorage.setItem(key, JSON.stringify(value))
const rmLocal = (key) => localStorage.removeItem(key)
const clearLocalStorage = () => localStorage.clear();

export const handleOpenUrlInNewTab = (url) => {
  window.open(url, '_blank')
}

export { getLocal, setLocal, parseJSON, AL, rmLocal, clearLocalStorage };
