import React from 'react';
import { useState, useEffect } from 'react';
import {  useParams,NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';
import Layout from '../shared/Layout';
import PlanForm from '../shared/PlanForm';

const PlanCreate = () => {

    const navigate = useNavigate();

    const [plan, setPlan] = useState({
        // we need the following depending on what we get from api
        date: '',
        time: '',
        plan:'',
        status:'',
    })

    // create useState with the following 
    const [createdPlan, setCreatedPlan] = useState(null);


    const handleChange = (event) => {
        const updatedField = { [event.target.name] : event.target.value }  
             // use the following to update the key value pairs
        const editedPlan = Object.assign(plan, updatedField)
        // assigned the new object to be updated to the state
        setPlan(editedPlan)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // if the entry is created in the database, save the response data to the state
        axios({
            url:`http://localhost:3000/api/plans/`,
            method : 'POST',
            data: plan
        }).then((res)=>setCreatedPlan(res.data.plan)).catch(console.error)
    }

    useEffect (()=>{
        if (createdPlan) {
            return navigate (`/plans`)
        }
    },[createdPlan, navigate])

    return (
        <Layout>
            <PlanForm
            plan={plan}
            handleChange={(e) => handleChange(e)}
            handleSubmit={(e) => handleSubmit(e)}
            cancelPath='/' 
            />
            {/* <h4>{item.title}</h4>
            <p>Link: {item.link}</p> */}

        </Layout>
    );
};

export default PlanCreate;