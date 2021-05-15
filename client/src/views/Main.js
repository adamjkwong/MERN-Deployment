import PetForm from '../components/PetForm';
import MultiplePetDisplay from '../components/MultiplePetDisplay';
import React, { useState } from 'react'
import '../App.css';


const Main = () => {
    return (
        <div class ="mainbody">
            <h1>Welcome to the Animal Shelter</h1>
            <PetForm/>
            <h2>All The Pets: </h2>
            <MultiplePetDisplay/>
        </div>
    )
}
export default Main;