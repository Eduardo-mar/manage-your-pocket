

export const getTypes = () => {
    return fetch('http://localhost:5000/types', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
}