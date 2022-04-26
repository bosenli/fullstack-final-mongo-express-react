import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

function LoginButton(props) {
    return (<div>
      <Button onClick={props.onClick}>
        Login
      </Button>
      
      </div>
    )
  }
  
  
  export default LoginButton