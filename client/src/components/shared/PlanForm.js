import { Link } from 'react-router-dom';

const PlanForm = ({ plan, handleSubmit, handleChange, cancelPath }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label> Plan </label>

      <input
        placeholder="date"
        defaultValue={plan.date}  //chanagible , not value , value wont change value
        name="date"
        onChange={(e) =>  handleChange(e)}
      />

      <input
        placeholder="14:00:00"
        defaultValue={plan.time}
        name="time"
        onChange={(e) => handleChange(e)}      
      />

      <input
        placeholder="dental appointment"
        defaultValue={plan.plan}
        name="plan"
        onChange={(e) => handleChange(e)}      
      />

      <input
        placeholder="completed"
        defaultValue={plan.status}
        name="status"
        onChange={(e) => handleChange(e)}      
      />

      <button type="submit" > Submit </button>
      {/* goto planEdit */}
      <Link to={cancelPath}>  
        <button>Cancel</button>
      </Link>

    </form>
  )
}

export default PlanForm

//then go to routes/planEdit.js