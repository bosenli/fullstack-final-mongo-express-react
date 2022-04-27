import { useState } from 'react';
import LogoutButton from './LogoutButton.js';
import LoginButton from './LoginButton.js';
import Greeting from './Greeting.js';
import "../style.css"

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)//start with false as logout first
  //function change the state  
  const handleLoginClick = () => {
    setIsLoggedIn(true)
  }

  const handleLogoutClick = () => {
  setIsLoggedIn(false)
  }
  
  let button; //no value because want to reassign a value 

  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick }/>
  } else {
    button = <LoginButton onClick={handleLoginClick} />
  }

  return (
    <div className='logButton'>

      <Greeting isLoggedIn={isLoggedIn} />
      <div className="logbutt"> {button} </div>
    </div>
  )
}


export default LoginControl

