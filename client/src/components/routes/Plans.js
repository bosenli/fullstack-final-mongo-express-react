import { NavLink } from "react-router-dom";
import axios from 'axios'
import { useState, useEffect } from 'react';
import { Plan } from './Plan'
//array of objects

import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css'

const Plans = () => {
    const [plans, setPlans] = useState([]);
    
    const fetchData = async () => {
        try {
          const response = await axios('http://localhost:3000/api/plans') //displaying data from seed

          console.log('res', response.data.plans)
          setPlans(response.data.plans)
    
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
    const plansData = plans.map((plan)=>{
        return  <li key={plan._id}>
                <NavLink to={`/plans/${plan._id}`} >
                    {plan.date} <t/> {plan.time} <br/> 
                    <div>
                       
                        {plan.plan} 
                    </div>

                    {
                    plan.status === "pending"? <Alert variant="danger">{plan.status}</Alert> : 
                    plan.status === "cancelled"? <Alert variant="secondary"> {plan.status} </Alert>: 
                    plan.status === "completed"? <Alert variant="success"> {plan.status} </Alert>:
                    <Alert variant="info">{plan.status} </Alert>
                    }
                     {/* <button onClick={()=> destroy()}> Delete Plan </button> */}
                </NavLink>
                </li>
    })
    return (
        <div className="plans">
            <h4>PLANS</h4>

                <ul>
                {/* plansData above */}
                    {plansData} 
                </ul>
            {/* <NavLink to='/'> Back to HOME</NavLink> */}
        </div>
    );
};

export default Plans;

//then goes to plan.js in routes 
//because we want to display that item