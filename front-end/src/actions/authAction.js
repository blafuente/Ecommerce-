// an action is a JS function that returns an Object!!!!!
// that object MUST  have at least a property of type

import axios from 'axios';

export default (formData)=>{
    console.log("Auth action is running!")
    console.log(formData);
    const axiosPromise = axios({
        url: `${window.apiHost}/register`,
        method: 'POST',
        data: formData
    })
    return{
        type: "AUTH_ACTION",
        payload: axiosPromise
    }
}