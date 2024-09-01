import React, {Component} from "react";
import { connect } from "react-redux";
import Cardlist from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from '../Components/Scroll';
import { setSearchField,requestRobots } from "../actions";

const mapStateToprops = state =>{

    return {
        searchField : state.searchRobots.searchField,
        robots : state. requestRobots.robots,
        isPending : state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

//dispatch => action (Here we sending actions)
const  mapDispatchToProps = (dispatch) =>{
    //We can name the action as at we want to, but we keep the same name as we had before the redux (onSearchChange)
   return {
    onSearchChange : (event)=>dispatch(setSearchField(event.target.value)),
    onRequestRobots : ()=> dispatch(requestRobots())
   } 
}

class App extends Component {
    
    componentDidMount(){
       this.props.onRequestRobots();
    }

//We don not need it anymore, we replace it with the dispatchToProps
//    onSearchChange = (event) => {
//         //If component did not use hooks but only class extend React Component
//         this.setState({searchField: event.target.value});
//         //setSearchField(event.target.value);
//     }


    render(){

        const {searchField, onSearchChange , robots, isPending} = this.props;

       const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })


        return isPending? 
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
            )
    }
    }

export default connect(mapStateToprops, mapDispatchToProps)(App);

//mapStateToProps = What state should the app listen to
//mapDispatchToProps = What action should the app listen to