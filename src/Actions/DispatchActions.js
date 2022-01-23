export function changeDisplay(customer_id){
    return (dispatch) => {
        dispatch({type: 'GETTING_LAYOUT', patload: 'LOADING'}); 
        return fetch('http://localhost3001/api/v1/customers/${customer_id}/layout') 
        .then(res => res.json()) 
        .then(data => dispatch({type: 'GOT_LAYOUT', customers: data})) 
        .catch(err => console.error(err.message))
    }
}