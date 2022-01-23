export default function manageClients( state = { kennels: [], }, action ){
    let {type} = action
    switch (type){ 
        case 'CREATING_KENNEL': 
        return {...state, kennels: action.kennels }; 
        default: 
        return state;
    }
}