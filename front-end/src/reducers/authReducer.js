// A reducer is a FUNCTION that returns an object, or 
// a piece of state to the rootReducer
// I specficially  managed the user's name and token
// If you want to change me, let me know by an action.type

export default (state = [], action)=>{
    // signiture takes state, we default it to []
    if(action.type === "AUTH_ACTION"){
        // I am going to update, because I care
        console.log(action.payload.data);
        return action.payload.data;
    }else if(action.type === "LOGOUT"){
        return []
    }else{
        return state
    }
}