import React, {Component} from "react";
import Cardlist from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from '../Components/Scroll';


class App extends Component {

    constructor(){
        super();
        this.state = {
            robots : [],
            searchField : ''
        }
    }


    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            return response.json();
        })
        .then(users=>{
           this.setState({robots:users })
        })
        
    }


    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

 render(){

    const filteredRobots = this.state.robots.filter(robots =>{
        return  robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })

        return !this.state.robots.length ? 
                    <h1>loading...</h1> 
            :
            (
                <div className="tc">
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <Cardlist robots = {filteredRobots} />
                    </Scroll>
                </div>
            );
    }
}

export default App;