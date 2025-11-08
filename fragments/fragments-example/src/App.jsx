import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/container';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  // let foodItems = [];
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];

  // if (foodItems.length === 0) {
  //   return <h3>I am still hungry.</h3>
  // }
  // let emptymessage = foodItems.length === 0 ? <h3>I am still hungry.</h3> : null;

  return (
    <>
      <Container>

        <h1 className='heading'>Healthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

    </>
  )
}

export default App
