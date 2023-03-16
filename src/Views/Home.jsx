import Cards from "../components/Cards/Cards";
function Home (props) {
    console.log(props.characters);
    return(
        
        <Cards characters={props.characters}  removeCard={props.removeCard}/>
    )
}

export default Home;