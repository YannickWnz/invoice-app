// function saving user token in local storage after registration is successful
export function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

export function getUserTokenFromLocalStorage() {

    const userDetails = JSON.parse(localStorage.getItem('userDetails'))

    if(userDetails) {return userDetails.token}

}