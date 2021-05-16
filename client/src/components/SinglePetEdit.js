import React, { useState,useEffect } from 'react'
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import '../App.css';

const SinglePetEdit = (props) => {
    const {id} = props;
    const [petList, setPetList] = useState([]); 
    const [name, setName] = useState(""); 
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill_1, setSkill_1] = useState("");
    const [skill_2, setSkill_2] = useState("");
    const [skill_3, setSkill_3] = useState("");
    const [errors, setErrors] = useState({});
const onSubmitHandler = e => {
    //prevent default behavior of the submit
    e.preventDefault();
    //make a post request to create a new person
    axios.put('http://localhost:8000/api/pets/'+props.id, {
        "name":name,
        "type":type,
        "description":description,
        "skill_1":skill_1,
        "skill_2":skill_2,
        "skill_3":skill_3
    })
    .then(res=>{
        setPetList(res.data.pets);
        navigate("/pets/"+props.id)
    })
    .catch(err=>{
        console.log(JSON.stringify(err));
        setErrors(err.response.data.errors);
        console.log(err.response.data.errors);
    })
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
        <Link className="topright" to = "/">back to home</Link>
        <h1>Pet Shelter </h1>
        <h2>Edit {petList.name}</h2>
            <form onSubmit={onSubmitHandler} className="detailed_pet_flex_box">
                <div className="detailed_pet_flex_entity">
                    <p>
                        <label>Update Name: </label>
                        {
                            errors.name ?
                                <span className="error-txt">{ errors.name.message }</span>
                                : null
                        }
                        {
                        name.length > 0 && name.length < 3 ?
                        <span className="error-txt"> Pet name must be at least 3 characters long</span>
                        : null
                        }
                        <input className="bigTextBox" type="text" value = {name} onChange = {(e)=>setName(e.target.value)}/>
                    </p>
                    <p>
                        <label>Update Type: </label>
                        {
                            errors.type ?
                                <span className="error-txt">{ errors.type.message }</span>
                                : null
                        }
                        {
                        type.length > 0 && type.length < 3 ?
                        <span className="error-txt"> Pet type must be at least 3 characters long</span>
                        : null
                        }
                        <input className="bigTextBox" type="text" value = {type} onChange = {(e)=>setType(e.target.value)}/>
                    </p>
                    <p>
                        <label>Update Description: </label>
                        {
                            errors.description ?
                                <span className="error-txt">{ errors.description.message }</span>
                                : null
                        }
                        {
                        description.length > 0 && description.length < 3 ?
                        <span className="error-txt"> Pet description must be at least 3 characters long</span>
                        : null
                        }
                        <input className="bigTextBox" type="text" value = {description} onChange = {(e)=>setDescription(e.target.value)}/>
                    </p>
                    <input type="submit" value ="Edit Pet" className="blue-button"/>
                </div>
                <div className="detailed_pet_flex_entity">
                    <p>
                        Skills (Optional):
                    </p>
                    <p>
                        <label>Skill_1: </label>
                        <input className="bigTextBox" type="text" value = {skill_1} onChange = {(e)=>setSkill_1(e.target.value)}/>
                    </p>
                    <p>
                        <label>Skill_2: </label>
                        <input className="bigTextBox" type="text" value = {skill_2} onChange = {(e)=>setSkill_2(e.target.value)}/>
                    </p>
                    <p>
                        <label>Skill_3: </label>
                        <input className="bigTextBox" type="text" value = {skill_3} onChange = {(e)=>setSkill_3(e.target.value)}/>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default SinglePetEdit;