
import Card from '../Card/Card.jsx'
import styles from './Cards.module.css'


export default function Cards(props) {

const {characters} = props
   
   return(
      <div className= {styles.container}>
         {characters.map(characters => {
         return (
            <Card 
               key = {characters.id}
               id = {characters.id}
               name = {characters.name}
               image = {characters.image} 
               species = {characters.species}
               gender = {characters.gender}
               removeCard = {props.removeCard}
            />
         )
         })}
      </div>
   ) ;
}
