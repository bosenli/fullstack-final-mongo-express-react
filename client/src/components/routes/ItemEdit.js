//from shared/ItemForm.js

import React from 'react';
import { useState, useEffect } from 'react';
import {  useParams,NavLink, useNavigate } from "react-router-dom";
import axios from 'axios'
import Layout from '../shared/Layout';
import ItemForm from '../shared/ItemForm';



const ItemEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams() // get the id from the current object

    const [item, setItem] = useState({
        // we need the following depending on what we get from api
        title: '',
        link : ''
    })

    const [updated, setUpdated] = useState(false);

    useEffect(()=>{
        const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/items/${id}`)
             console.log ('itemEdit', response.data.item)
             setItem(response.data.item)
            
        } catch (error) {
            console.log(error)
        }
    }
    fetchData();
    },[])

    const handleChange = (event) => {
        //created a placeholder grabbing value from the user input form
        const updatedField = { [event.target.name] : event.target.value } //from name, and defaultValue from ItemForm.js
        // use the following to update the key value pairs
        //assigned the empty state with the updatedField into one object
        const editedItem = Object.assign(item, updatedField)
        // assigned the new object to be updated to the state
        setItem(editedItem)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // since we will be taking it to the database, we need axios
        //handle backend
        axios({
            url:`http://localhost:3000/api/items/${id}`,
            method : 'PUT',
            data: item
        }).then(()=>setUpdated(true)).catch(console.error)
    }

    useEffect (()=>{
        if (updated) {
            return navigate (`/items/${id}`)
        }
    },[])

    return (
            <Layout>
                <ItemForm
                    item={item}
                    handleChange={(e) => handleChange(e)}
                    handleSubmit={(e) => handleSubmit(e)}
                    cancelPath={`/items/${id}`}        
                />
                <h4> {item.title} </h4>
                <p>Link: {item.link} </p>
            </Layout>  
    );
};
export default ItemEdit;

//refer to controllers/index.js/updatgeItem 