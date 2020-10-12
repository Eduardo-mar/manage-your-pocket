

export const getRecords = () => {
    return fetch('http://localhost:5000/records', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
}


export const saveRecords = (record) => {
    return fetch('http://localhost:5000/records', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(record)
    })
        .then(response => response.json())
}

export const deleteRecords = (id) => {
    return fetch('http://localhost:5000/records/delete', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({id}),
    })
        .then(response => response.json())
}