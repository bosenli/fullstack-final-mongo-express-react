//start from index.js import browserRouter 
import './App.css';
import { Routes, Route , useLocation} from 'react-router-dom';
import Home from './components/routes/Home';
import Items from './components/routes/Items';
import ItemCreate from './components/routes/ItemCreate';
import Item from './components/routes/Item';
import ItemEdit from './components/routes/ItemEdit';

function App() {
  return (
    <div className="App">
      {/*with complex, sometimes we need to access the history of the objects cloest Route match */}
      <Routes>
          <Route path='/' element = { <Home/> }/>
          <Route path='/items' element = { <Items/> }/>
          <Route path='/create-item' element = { <ItemCreate/> }/>
          <Route path='/items/:id' element = { <Item/> }/>
          <Route path='/items/:id/edit' element = { <ItemEdit/> }/>
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