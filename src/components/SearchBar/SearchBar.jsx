
import RandomCard from '../RandomCard/RandomCard.jsx'
import styles from './searchBar.module.css'
import { NavLink } from 'react-router-dom'
import {useState} from 'react'


export default function SearchBar(props) {

   const [id, setId] = useState('')
   const takeId = (event) => {
      setId(event.target.value)
   }
  
   function handleLogOut(){
      props.logOut()
   }

  return (
      <div className = {styles.container} > 
      <div className={styles.absoluteContainer}>
         <button className={styles.button} onClick={() => {props.onSearch(id)}}>Agregar</button> 
         <input className ={styles.input} type='search' onChange={takeId} placeholder='Card ID'/>
      </div>
      <RandomCard onSearch={props.onSearch}/>
      <NavLink to='/about'className={styles.home} >About</NavLink>
      <NavLink to='/Home' className={styles.home} >Home</NavLink>
      <NavLink to='/Favorites' className={styles.favorites} >Favorites</NavLink>
      <NavLink to='/' className={styles.logOut} onClick={handleLogOut} >Log Out</NavLink>
      </div>
   );
}
