import { NavLink } from "react-router-dom";
import axios from 'axios'
import { useState, useEffect } from 'react';
//array of objects

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
                    {plan.date} <br/> {plan.time} {plan.plan} {plan.status}
                </NavLink>
                </li>
    })
    return (
        <div>
            <h4>PLANS APP</h4>

                <ul>
                {/* plansData above */}
                    {plansData} 
                </ul>
            <NavLink to='/'> Back to HOME</NavLink>
        </div>
    );
};

export default Plans;

//then goes to plan.js in routes 
//because we want to display that item