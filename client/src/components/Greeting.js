import GuestGreeting from "./GuestGreeting"
import UserGreeting from "./UserGreeting"

import App from "../App"
import Footer from "./shared/Footer"

// function Greeting() {
//     if (isLoggedIn){ // conditional render different components
//         return <UserGreeting/>
//     }
//     return <GuestGreeting/>
// }

// export default Greeting

export default function Greeting(props) {
    const isLoggedIn = props.isLoggedIn
    if (isLoggedIn) {
    return ( 
        <div>
            <UserGreeting />
            <App />
        </div>)
  }
   return (<div>
            <GuestGreeting />
            <Footer/> 
            </div>)
  }