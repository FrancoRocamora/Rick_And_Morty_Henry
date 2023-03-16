import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styles from './DetailId.module.css'

function DetailId(){
    //Vars and states
    const URL_BASE = 'https://be-a-rym.up.railway.app/api'
    const KEY = 'd8de350af07e.1b7f634195e659dd040f '
    const {DetailId} = useParams()
    const [properties, setProperties] = useState({})

    //Get actual card info
    useEffect(() => {
        fetch(`${URL_BASE}/character/${DetailId}?key=${KEY}`)
        .then((response) => response.json())
        .then((data) => { setProperties((newProperties) => newProperties = data )})
    }, [])

     return (
        <div className = {styles.container}>
        {
            properties.name ? 
            (<>
            <img src={properties.image} className={styles.image}></img>
            <div className={styles.name}>{properties.name}</div>
            <div className={styles.innerContainer}>
                <div className={styles.id}>CARD ID - {properties.id}</div>
                <div className={styles.gender}>GENDER - {properties.gender}</div>
                <div className={styles.locationName}>LOCATION - {properties.location.name}</div>
                <div className={styles.status}>STATUS - {properties.status}</div>
                <div className={styles.specie}>SPECIE - {properties.specie}</div>
                <div className={styles.originName}>ORIGIN - {properties.origin.name}</div>
                <div className={styles.type}>TYPE - {properties.type}</div>
            </div>
            </>) 
            : (
            <h3> Loading...</h3> 
            )
        }
        </div>
    )
}

export default DetailId