import './App.css'
import ModalContainer from './containers/ModalContainer/ModalContainer'
import PokemonsContainer from './containers/PokemonsContainer/PokemonsContainer'

function App() {
  return (
    <div className='app'>
      <PokemonsContainer />
      <ModalContainer />
    </div>
  )
}

export default App

// logo, name,
// logoAbility, nameAbility
// Params = height, Weight, Power
// Stats = hp, defence, special defence, attack, special attack, speed
