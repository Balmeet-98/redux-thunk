import axios from "axios"
const add=(a)=>{
    return {
        type:"ADD",
        payload:a
    }
}
const remove =(b)=>{
    return {
        type:"DEL",
        payload:b
    }
}
const edit=(c)=>{
    return {
        type:"EDIT",
        payload:c
    }
}
const apiCall=(d)=>{
    return{
        type:"CALL",
        payload:d
    }
}
const api=()=>{
    return async (dispatch)=>{
        const url=await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(url.data);
        dispatch(apiCall(url.data));
    }
}
export {add,remove,edit,api}