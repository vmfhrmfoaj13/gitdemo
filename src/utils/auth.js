export function setToken(){
    sessionStorage.setItem('token','token')
}

export function getToken(){
  return sessionStorage.getItem('token')
}

export function removeToken(){
    sessionStorage.clear()
}