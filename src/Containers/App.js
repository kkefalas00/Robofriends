import React, {useState, useEffect} from "react";
import Cardlist from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from '../Components/Scroll';


function App() {
    // If component did not use hooks but only class extend React Component
    // constructor//(){
    //     super();
    //     this.state = {
    //         robots : [],
    //         searchField : ''
    //     }
    // //}
    const [robots, setRobots] = useState([])
    const [searchField, setSearchField] = useState('')

    // If component did not use hooks but only class extend React Component
    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response=>{
    //         return response.json();
    //     })
    //     .then(users=>{
    //        this.setState({robots:users })
    //     })
        
    // }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(users=>{
            setRobots(users);
        })
    },[])


   const onSearchChange = (event) => {
        //If component did not use hooks but only class extend React Component
        // this.setState//({searchField: event.target.value});
        setSearchField(event.target.value);
    }


    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    console.log(robots,searchField);
        return !robots.length ? 
                    <h1>loading...</h1> 
            :
            (
                <div className="tc">
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange = {onSearchChange}/>
                    <Scroll>
                        <Cardlist robots = {filteredRobots} />
                    </Scroll>
                </div>
            );
    }

export default App;