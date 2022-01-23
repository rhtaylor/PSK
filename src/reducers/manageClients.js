export default function manageClients( state = { clients: [], }, action ){
    let {type} = action
    switch (type){
        case 'CHANGE_DISPLAY': 
        return {...state, clients: action.display };
        case 'CREATING_CUSTOMER': 
        return {...state, clients: action.clients }; 
        default: 
        return state;
    }
}