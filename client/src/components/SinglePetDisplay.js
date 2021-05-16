import React, { useState,useEffect } from 'react'
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import '../App.css';

const SinglePetDisplay = (props) => {
    const [petList, setPetList] = useState([]); 
    const [name, setName] = useState(""); 
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill_1, setSkill_1] = useState("");
    const [skill_2, setSkill_2] = useState("");
    const [skill_3, setSkill_3] = useState("");

    const onDelete = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:8000/api/pets/'+props.id)
        .then(res=>{
            console.log(res.data);
            navigate("/")
        })
        .catch(err=>console.log(err))
        }

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets/'+props.id)
            .then(res=>{
                setPetList(res.data.pets)
                console.log(res.data.pets)
                setName(res.data.pets.name)
                setType(res.data.pets.type)
                setDescription(res.data.pets.description)
                setSkill_1(res.data.pets.skill_1)
                setSkill_2(res.data.pets.skill_2)
                setSkill_3(res.data.pets.skill_3)
            })
            .catch(err=>console.log(err))
    },[])

    return (
        <div className="shiftleft">
            <div className="topright">
                <Link to = "/">back to home</Link>
                <button type="submit" onClick={onDelete}>Adopt {petList.name} </button>
            </div>  
        <h1>Pet Shelter</h1>
        <h2>Details about: {petList.name}</h2>
            {
            <div>
                <div class="detailed_pet_flex_box">
                    <div class="detailed_pet_flex_entity">
                        <h4>Pet Type: </h4>
                        <h4>Description: </h4>
                        <h4>Skills: </h4> 
                    </div>
                    <div class="detailed_pet_flex_entity">
                        <h4>{petList.type}</h4>
                        <h4>{petList.description}</h4>
                        <h4>{petList.skill_1}</h4>
                        <h4>{petList.skill_2}</h4> 
                        <h4>{petList.skill_3}</h4>
                        <input type="submit" value ="Like {petList.name}" className ="green-button"/>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default SinglePetDisplay;
