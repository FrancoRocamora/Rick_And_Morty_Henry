import SearchBar from './components/SearchBar/SearchBar.jsx'
import Landing from './Views/Landing.jsx'
import About from './Views/AboutView'
import Detail from './Views/Detail'
import Home from './Views/Home'
import Favorites from './components/Favorites/Favorites.jsx'
import styles from './App.module.css'
import {useState, useEffect} from 'react'
import { Route, Routes, useNavigate} from 'react-router-dom'

function App () {
  //Vars and states
  const email = 'Martin.rocamoraf@gmail.com'
  const password = 'salmon22'
  const navigate = useNavigate()
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false)

  //Function to find a card
  const searchCard = (id) => {
    const URL_BASE = 'https://be-a-rym.up.railway.app/api'
    const KEY = 'd8de350af07e.1b7f634195e659dd040f '
    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then((response) => response.json())
    .then((data) =>{
      if(data.name) {
        if(characters.find((x) => x.id === data.id)) window.alert('Card already on screen')
        else setCharacters((oldCharacters) => [...oldCharacters, data])
      } else {
        window.alert('No se encontro ningun personaje con ese ID')
      }
    } )
  }

  //Remove a card function
  const removeCard = (id) =>{
    setCharacters(characters.filter((char) => char.id !== id))
  }

//False login function
  function login(userData) {
    if (userData.password === password && userData.email === email) {
       setAccess(true);
       navigate('/Home');
    }
 }

 //Deny access if access = false and go to Localhost:3000/
  useEffect(() => {
    !access && navigate('/');
 }, [access]);

 //Log Out and go back to Localhost:3000/
 
 function logOut(){
  setAccess(false);
 }

  return (
    <div className={styles.App} >
      {access ? (<SearchBar onSearch={searchCard} logOut={logOut} />) : <></> }
      <Routes>
        <Route path='/' element={<Landing login ={login}/>}/>
        <Route path='/Home' element={<Home characters={characters} removeCard={removeCard}/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Detail/:DetailId' element={<Detail/>}/>
        <Route path='/Favorites' element={<Favorites/>}/>
      </Routes>
    </div>

  )
}

export default App
