import { useState, useEffect } from 'react';
import {  useParams,NavLink, useNavigate } from "react-router-dom";
import axios from 'axios'
import Layout from '../shared/Layout';
// import { NavLink } from "react-router-dom";

const Items = () => {
    const [items, setItems] = useState({})
    // sets delete fxns
    const [deleted, setDeleted] = useState(false)
    let navigate = useNavigate();

    const { id } = useParams()  //extracting id from URL object 
    console.log ('params', id)


    useEffect(()=> {
    const fetchData = async () => {
        // try {
        //     // the sequence for 
        //     const response = await axios.get(`http://localhost:3000/api/items/`)
        //     const result = response.data.items;
        //     console.log('res',result )
        //     const uniqItem = result.find(uniq => uniq._id ===id)
        //     setItem(uniqItem)
        //     console.log('j', uniqItem)
        //     return result;
        // } catch (error) {
        //     console.log(error)
        // }
        // OR THE CODE BELOW
        try {
            // the sequence for 
            //the URL link follows App.js
            const response = await axios.get(`http://localhost:3000/api/items/${id}`)
            console.log('response',response)
            const result = response.data.item
            console.log('res',result )
            setItems(result)
            return result;
        } catch (error) {
            console.log(error)
        }
    }
        fetchData()
    },[])//only mount on the first time
    
    useEffect(()=>{
        if(!items) {//if no item
            return <p>Loading...</p>
        }
    },[items])



    const destroy = ()=>{
        axios({
            url: `http://localhost:3000/api/items/${id}`,
            method: 'DELETE'
        }).then(()=> setDeleted(true)).catch(console.error)
    }

    useEffect(()=>{
        if (deleted) {
            return navigate('/')
        }
    },[deleted, navigate])

    return (
        <div>
            <Layout>
                <h4>{items.title}</h4>
                <p>LINK:{items.link}</p>
                <button onClick={()=> destroy()}>Delete Item</button>

                 <NavLink to={`/items/${id}/edit`}>
                     <button>Edit</button>
                 </NavLink>

                <NavLink to='/items'> Back to all items</NavLink>
                
            </Layout>
            
        </div>
    );
};

export default Items;

//then go to shared/ItemForms.js