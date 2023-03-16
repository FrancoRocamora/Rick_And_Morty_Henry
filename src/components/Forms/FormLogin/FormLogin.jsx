import styles from './FormLogin.module.css'
import { useState } from "react"

//Function Validate Username Input
function validateLoginUsername(form, error, setError){
    if(!form.email) setError({...error, email:'Este campo es obligatorio'})
    else{ 
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)){
        setError({...error, email:'Email Inválido'})}
        else{
            if(form.email.length > 35) setError({...error, email:'Maximo 35 characteres'})
            else{
                setError({...error, email:''})
            }
        }
     }
}

//Function Validate Password Input
function validateLoginPassword(form, error, setError) {
    if(!form.password)setError({...error, password: 'This field is obligatory'})
    else {
        if(!/\d/.test(form.password)) setError({...error, password: 'Must include a number'})
        else {
           if(form.password.length < 6 || form.password.length > 10)  setError({...error, password:'Must have between 6 and 10 cahracteres'})
            else {
                setError({...error, password:''})
            }
        }
    }
}

//Component Fn
function FormLogin(props){
//States
    const [form, setForm ]= useState({
        email: '',  
        password: ''
    })

    const [error, setError] = useState({
        email: '',
        password: ''
    })

//Double link on input and state
    function handleChange(event){
        const property = event.target.name;
        const value = event.target.value
        setForm({...form, [property]: value})
        if(event.target.name === 'email'){
            validateLoginUsername({...form, [property]: value}, error, setError)}
        else{
            validateLoginPassword({...form, [property]: value}, error, setError)
        }
    }
//Submit frorm function
    function handleSubmit(event){
        event.preventDefault()
        props.login(form)
    }

    return(
        <form className={styles.formContainer}>
            <div className={styles.usernameContainer}>
                <label className={styles.label}htmlFor='email'>Email:</label>
                <input className={styles.username}type='text' name='email' value={form?.email}  onChange={handleChange}/>
                <span className={styles.error}>{error.email}</span>
            </div>
            <div className={styles.passwordContainer}>
                <label className={styles.label} htmlFor='password'>Password:</label>
                <input className={styles.password} type='text' name='password'value={form?.password} onChange={handleChange}/>
                <span className={styles.error}>{error.password}</span>
            </div>
            <button className={styles.button}type='submit'  onClick={handleSubmit}>Login</button>
        </form>

    )
}

export default FormLogin