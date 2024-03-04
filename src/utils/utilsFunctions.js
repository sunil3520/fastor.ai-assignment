

export const setToLocalStorage = (id,value) =>{
  localStorage.setItem(id,JSON.stringify(value));
}


export const getFromLocalStorage = (id) =>{
   return JSON.parse(localStorage.getItem(id))
}


export const removeTokenFromLocalStorage = (id) =>{
   localStorage.removeItem(id);
}