import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import {addFavorite, removeFavorite} from '../../Redux/Actions.js'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';






 function Card(props) {

   const myFavs = useSelector(initialState => initialState.myFavorites)
   const [isFav, setIsFav] = React.useState(false)
   const dispatch = useDispatch()

   const handleFavorite = () => {
      if(isFav === true) {
         dispatch(removeFavorite(props.id))
         setIsFav(false)
      }else{
         console.log(props)
         dispatch(addFavorite(props))
         setIsFav(true)
      }
   } 
      console.log(myFavs)
      React.useEffect(() => {
         myFavs.forEach((fav) => {
            if (fav.id === props.id) {
               setIsFav(true);
            }
         });
      }, [myFavs]);

   return (
      <div className = {styles.container}>
          {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )
         }  
         <Link to={`/Detail/${props.id}`}>
            <h2 className = {styles.name}>Name: {props.name}</h2>
         </Link>
         <img  className = {styles.image} src={props.image} alt="" /> 
         <div className = {styles.specs}>
            <h2 className = {styles.species} >Specie: {props.species}</h2>
            <h2 className = {styles.gender}>Gender: {props.gender}</h2>
            <button className = {styles.button} onClick={() => props.removeCard(props.id)} >X</button>
         </div>
      </div>
   );
}

export default (Card)
