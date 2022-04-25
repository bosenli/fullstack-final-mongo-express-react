import { useState, useEffect } from 'react';
import {  useParams,NavLink, useNavigate } from "react-router-dom";
import axios from 'axios'
import Layout from '../shared/Layout';
// import { NavLink } from "react-router-dom";

const Plans = () => {
    const [plans, setPlans] = useState({})
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
            const response = await axios.get(`http://localhost:3000/api/plans/${id}`)
            console.log('response',response)
            const result = response.data.plan
            console.log('res',result )
            setPlans(result)
            return result;
        } catch (error) {
            console.log(error)
        }
    }
        fetchData()
    },[])//only mount on the first time
    
    useEffect(()=>{
        if(!plans) {//if no item
            return <p>Loading...</p>
        }
    },[plans])



    const destroy = ()=>{
        axios({
            url: `http://localhost:3000/api/plans/${id}`,
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
                <p>Date: {plans.date}</p>
                <p>Time: {plans.time}</p>
                <p>Plan: {plans.plan}</p>
                <p>Status: {plans.status}</p>
                <button onClick={()=> destroy()}> Delete Plan </button>

                 <NavLink to={`/plans/${id}/edit`}>
                     <button>Edit Plan</button>
                 </NavLink>

                <NavLink to='/plans'> Back to all plans</NavLink>
                
            </Layout>
            
        </div>
    );
};

export default Plans;

//then go to shared/ItemForms.js