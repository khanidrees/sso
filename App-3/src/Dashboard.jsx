import {useEffect} from 'react';
import {useSearchParams,}  from 'react-router-dom';

const Dashboard = () => {

    let [searchParams] = useSearchParams();
  useEffect(()=>{
    const secret = searchParams.get("token");
    //TODO verify the toeken in future
    if(secret || localStorage.getItem('isLoggedIn')){//verified
        localStorage.setItem('loggedIn','true');
    }else{
      window.location.href = "http://localhost:3000/";
    }
    

  },[]);
  return (
    <>
      <div className="container">
            <div>Icon-3</div>
            <a href="http://localhost:3000">
            <button
            onClick={()=>localStorage.removeItem('isLoggedIn')}
            >logout</button>
            </a>
        </div>
    </>
  )
}

export default Dashboard