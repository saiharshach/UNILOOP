import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../Components/LoginContext';
import './Loginsignup.css'

const Loginsignup = () => {
  const {setIsLoggedIn} = useContext(LoginContext);
  const [action, setAction] = useState("Login");
  const navigate = useNavigate();

  const handleSkipLogin = () => {
    setIsLoggedIn(true);
    navigate('/Shop');
  }
  
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className="inputs">
        <div className="input">
          <input type="text" placeholder='Name' />
        </div>
        <div className="input">
          <input type="email" placeholder='userID@university.com' />
        </div>
        <div className="input">
          <input type="password" placeholder='Password' />
        </div>
      </div>
      <div className="submit-container">
        <div className={action==="Login"?"submit-gray":"submit"}onClick={()=>{setAction("Sign Up")}}>SignUp</div>
        <div className={action==="Sign Up"?"submit-gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
      </div>
      <div className="switch-button" onClick={handleSkipLogin}>
          SKIP LOGIN(DEMO ACCESS)
      </div>
    </div>
  )
}

export default Loginsignup