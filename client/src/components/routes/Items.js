import { NavLink } from "react-router-dom";
import axios from 'axios'
import { useState, useEffect } from 'react';
//array of objects
const Items = () => {
    const [items, setItems] = useState([]);
    
    const fetchData = async () => {
        try {
          const response = await axios('http://localhost:3000/api/items') //displaying data from seed

          console.log('res', response.data.items)
          setItems(response.data.items)
    
            } catch (error) {
          console.error(error)
            }
        // fetchData()
    }
    useEffect(()=>{
        fetchData()
    },[])

    // set a variable to map the items as below
// to is sending it to , then goes to routes/index.js
    const itemsData = items.map((item)=>{
        return <li key={item._id}>
            <NavLink to={`/items/${item._id}`} >{item.title}</NavLink>
        </li>
    })
    return (
        <div>
            <h4>items</h4>
            <ul>
            {/* itemsData above */}
            {itemsData} 
            </ul>
        </div>
    );
};

export default Items;

//then goes to item.js in routes 
//because we want to display that item