export const getImage = (searchText) => { 
    return fetch(`https://pixabay.com/api/?key=33010704-feed17696efaf039f05536787&per_page=12&q=${searchText}`)
} 