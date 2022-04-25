import React from 'react';
import { useState, useEffect } from 'react';
import {  useParams,NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';
import Layout from '../shared/Layout';
import ItemForm from '../shared/ItemForm';

const ItemCreate = () => {

    const navigate = useNavigate();

    const [item, setItem] = useState({
        // we need the following depending on what we get from api
        title: '',
        link : ''
    })

    // create useState with the following 
    const [createdItem, setCreatedItem] = useState(null);


    const handleChange = (event) => {
        const updatedField = { [event.target.name] : event.target.value }
             // use the following to update the key value pairs
        const editedItem = Object.assign(item, updatedField)
        // assigned the new object to be updated to the state
        setItem(editedItem)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // if the entry is created in the database, save the response data to the state
        axios({
            url:`http://localhost:3000/api/items/`,
            method : 'POST',
            data: item
        }).then((res)=>setCreatedItem(res.data.item)).catch(console.error)
    }

    useEffect (()=>{
        if (createdItem) {
            return navigate (`/items`)
        }
    },[createdItem, navigate])

    return (
        <Layout>
            <ItemForm
            item={item}
            handleChange={(e) => handleChange(e)}
            handleSubmit={(e) => handleSubmit(e)}
            cancelPath='/' 
            />
            {/* <h4>{item.title}</h4>
            <p>Link: {item.link}</p> */}

        </Layout>
    );
};

export default ItemCreate;