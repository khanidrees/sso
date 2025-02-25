import { useState } from "react"
import { login } from "../apis";
import { useNavigate } from "react-router-dom";

const x = 3;
const y = 5;
const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username:"",
        password:"",
        captcha:""
    }); 
    const [errorData, setErrorData] = useState({
        username:"",
        password:"",
        captcha:""
    });
    const inputChangeHandler = (e)=>{
        console.log(e);
        
        setFormData((prevData)=>({...prevData, [e.target.name]:e.target.value}));
    }
    //TODO if time remains
    // const x= Math.floor(Math.random()*10);
    // const y = Math.floor(Math.random()*10);
    const validate = ()=>{
        const errors = {};
        if(!formData?.username){
            errors.username  = "please enter username";
        }
        if(!formData?.password){
            errors.password  = "please enter password";
        }
        if(!formData?.captcha){
            errors.captcha  = "please enter captcha";
        }


        return errors;
         
    }
    const submitHandler= async()=>{
        //validations
        const errors = validate();
        if(errors?.username || errors?.password || errors?.captcha){
            setErrorData(errors);
            return;
        }

        const res = await login(formData?.username,formData?.password); 
        
        if(!res){
            return setErrorData({
                username:"username or password is incorrect"
            })
        }

        if(formData?.captcha != x+y){
            return setErrorData({
                captcha:"captcha is incorrect"
            })
        }

        //Logged In

        setErrorData({});
        localStorage.setItem('token' ,'true')
        navigate('/');



    }
  return (
    <div>
        <div>
            <label>Username:</label>
            <input type="text" 
            value={formData?.username} name="username"
            onChange={(e)=>inputChangeHandler(e)}
            />
            {errorData?.username &&
            <p>{errorData?.username}</p>
            }
        </div>
        <div>
            <label>Password:</label>
            <input type="password" 
            value={formData?.password} name="password"
            onChange={(e)=>inputChangeHandler(e)}
            />
            {errorData?.password &&
            <p>{errorData?.password}</p>
            }
        </div>

        <div>Captcha : {x + "+" + y + "= ?" }
            <input type="number" 
            value={formData?.captcha}
            onChange={(e)=>inputChangeHandler(e)}
            name="captcha"
            />
            {errorData?.captcha &&
            <p>{errorData?.captcha}</p>
            }
        </div>

        <div>
            <select 
            defaultChecked={false}
            onChange={(e)=> console.log(e.target.value)} >
                <option> --Select Application</option>
                <option value={2}>Application-2</option>
                <option value={3}>Application-3</option>
            </select>
        </div>

        <div>
            <button
            onClick={()=>submitHandler()}
            >Login</button>
        </div>

    </div>
  )
}

export default Login