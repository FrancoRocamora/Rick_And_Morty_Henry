import FormLogin from "../components/Forms/FormLogin/FormLogin.jsx";

function Landing(props) {
    return(
        <FormLogin
        login = {props.login}
        />
    )
}


export default Landing