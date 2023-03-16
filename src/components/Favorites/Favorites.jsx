import { useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from './Favorites.module.css'


function Favorites(props){
    const myFavorites = useSelector((initialState) => initialState.myFavorites)
   

    return(
        <div className= {styles.container}>
       { myFavorites.map((x) => {
            return(
            
                <Card
            key = {x.id}
            id = {x.id}
            name = {x.name}
            image = {x.image} 
            species = {x.species}
            gender = {x.gender}
            removeCard = {x.removeCard}
            />
          
            )
           
        })} 
      </div> 
    )
}


export default Favorites;