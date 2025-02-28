import React,{useState} from "react";
import Header from './Header';
import ListItems from "./ListItems";
import InputModal from "./InputModal";

const Home = () => {

    const initialTodos = [{
        title:"Get Started",
        date: "Fri,  today",
        key:"1"
    },{
        title:"Have Lunch",
        date: "Fri,  today",
        key:"2"
    },{
        title:"Workout",
        date: "Fri,  today",
        key:"3"
    },]

    const [todos,setTodos] = useState(initialTodos)

    const handleClearTodos = () =>{
        setTodos([]);
    }


    return (
        <>
            <Header handleClearTodos={handleClearTodos}/>
            <ListItems
                todos={todos}
                setTodos={setTodos}
            />
            <InputModal/>
        </>

    );
}

export default Home;