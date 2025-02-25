import {data} from "../utils/data"



export const login = async(username,password)=>{
    return new Promise((res, rej)=>{
        const user = data?.find((user)=>user.username==username);
        if(!user){
            return res(false);
            
        }
        if(user.password == password){
            return res(true);

        }
        return res(false)
    })
}