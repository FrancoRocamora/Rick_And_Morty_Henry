import styles from './randomCard.module.css'
import {useState} from 'react'


export default function RandomCard(props) {

    const [random, setRandom] = useState([])

    const randomNumber = () =>{
        const number = Math.ceil(Math.random() * 826)
       if(random.includes(number)){
           window.alert('ya existe')
        } else {
            setRandom((random) => [...random, number] )
            return number
        }
       
    }
    return (
        <div>
     <button className={styles.button} 
     onClick={() => {props.onSearch(randomNumber())}}>Random Card
     </button>  
     </div>
    ) 
}

