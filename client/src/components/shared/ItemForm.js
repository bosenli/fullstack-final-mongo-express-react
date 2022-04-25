import { Link } from 'react-router-dom';

const ItemForm = ({ item, handleSubmit, handleChange, cancelPath }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Title </label>

      <input
        placeholder="A vetted Item"
        defaultValue={item.title}  //chanagible , not value , value wont change value
        name="title"
        onChange={(e) =>  handleChange(e)}
      />

      <input
        placeholder="http://coolstuff.com"
        defaultValue={item.link}
        name="link"
        onChange={(e) => handleChange(e)}      
      />

      <button type="submit" > Submit </button>

      <Link to={cancelPath}>
        <button>Cancel</button>
      </Link>

    </form>
  )
}

export default ItemForm

//then go to routes/itemEdit.js