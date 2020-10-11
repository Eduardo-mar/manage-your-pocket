

export const getAccounts = () => {
    return fetch('http://localhost:5000/accounts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
}