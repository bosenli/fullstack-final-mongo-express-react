//from shared/PlanForm.js
import React from 'react';
import { useState, useEffect } from 'react';
import {  useParams,NavLink, useNavigate } from "react-router-dom";
import axios from 'axios'
import Layout from '../shared/Layout';
import PlanForm from '../shared/PlanForm';

const PlanEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams() // get the id from the current object

    const [plan, setPlan] = useState({
        // we need the following depending on what we get from api
        date: '',
        time: '',
        plan:'',
        status:'',
    })

    const [updated, setUpdated] = useState(false);

    useEffect(()=>{
        const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/plans/${id}`)
             console.log ('planEdit', response.data.plan)
             setPlan(response.data.plan)
            
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
        const editedPlan = Object.assign(plan, updatedField)
        // assigned the new object to be updated to the state
        setPlan(editedPlan)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // since we will be taking it to the database, we need axios
        //handle backend
        axios({
            url:`http://localhost:3000/api/plans/${id}`,
            method : 'PUT',
            data: plan
        }).then(()=>setUpdated(true)).catch(console.error)
    }

    useEffect (()=>{
        if (updated) {
            return navigate (`/plans/${id}`)
        }
    },[])

    return (
            <Layout>
                <PlanForm
                    plan={plan}
                    handleChange={(e) => handleChange(e)}
                    handleSubmit={(e) => handleSubmit(e)}
                    cancelPath={`/plans/${id}`}        
                />
                <h4> {plan.plan} </h4>
                <p>Link: {plan.status} </p>
            </Layout>  
    );
};
export default PlanEdit;

//refer to controllers/index.js/updatgeItem 