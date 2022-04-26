import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'


function LogoutButton(props) {
  
    return (
      <Button onClick={props.onClick} >
        Logout
      </Button>
    )
  }
  
  export default LogoutButton