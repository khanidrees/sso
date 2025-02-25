import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    let [searchParams] = useSearchParams();
    useEffect(()=>{
        let isLoggedIn = localStorage.getItem('token');
        if(!isLoggedIn){
            navigate('/login');
        }
        const appNum =  searchParams.get("loginRequest");
        if(appNum==2){
            window.location.href = "http://localhost:3001/?token=secret"
        }else if(appNum==3){
            window.location.href = "http://localhost:3002/?token=secret"
        }
    });

    const handleLogout = ()=>{
        localStorage.removeItem('token');
        navigate('/');
    }
  return (
    <div>
        <div className="container">
            <div>Icon</div>
            <button
            onClick={()=>handleLogout()}
            >logout</button>
        </div>

        <div>
            <a href="http://localhost:3001">
            <div className="container">
                <div>Icon 2</div>
                <h2>Application 2</h2>
            </div>
            </a>
            <a href="http://localhost:3002">
            <div className="container">
                <div>Icon 3</div>
                <h2>Application 3</h2>
            </div>
            </a>
        </div>
    </div>
  )
}

export default Dashboard