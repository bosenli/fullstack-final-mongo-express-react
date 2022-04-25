//start from index.js import browserRouter 

import './App.css';
import { Routes, Route , useLocation} from 'react-router-dom';
import Home from './components/routes/Home';
import Plans from './components/routes/Plans';
import PlanCreate from './components/routes/PlanCreate';
import Plan from './components/routes/Plan';
import PlanEdit from './components/routes/PlanEdit';

function App() {
  return (
    <div className="App">
      {/*with complex, sometimes we need to access the history of the objects cloest Route match */}
      <Routes>
          <Route path='/' element = { <Home/> }/>
          <Route path='/plans' element = { <Plans/> }/>
          <Route path='/create-plan' element = { <PlanCreate/> }/>
          <Route path='/plans/:id' element = { <Plan/> }/>
          <Route path='/plans/:id/edit' element = { <PlanEdit/> }/>
      </Routes>
    </div>
  );
}

// function withRouter(Child){
//   return function withRouter(props){
//     const location = useLocation()
//     return <Child {...props} location={location} />
//   }
// }
// export default withRouter(App);

export default App;

//then go to Home.js