import Display from './components/display';
import styles from './App.module.css';
import ButtonsContainer from './components/ButtonsContainer';


function App() {


  return (

    <div className={styles.calculator}>
      <Display></Display>
      <ButtonsContainer></ButtonsContainer>
    </div>

  )
}

export default App
