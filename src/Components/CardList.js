import React from "react";
import Card  from "./Card";
import {robots} from "../robots";

const Cardlist = ({robots}) => {

    const cardComponent = robots.map((user,index) => {
        return <Card 
        key={index} 
        id={robots[index].id} 
        name={robots[index].name} 
        username = {robots[index].username} 
        email = {robots[index].email}
        />
    });
    return(
        <div>
            {cardComponent}
        </div>
    );
} 

export default Cardlist;