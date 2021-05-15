import React, { useState,useEffect } from 'react'
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import '../App.css';

const SinglePetDisplay = (props) => {
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
            navigate("/")
        })
        .catch(err=>console.log(err))
        // .catch(err=>{
        //     console.log(JSON.stringify(err));
        //     setErrors(err.response.data.error)
        // })
    }

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
        <div>
        <h1>Welcome to the detailed page for {petList.name} </h1>
            <Link to = "/">Take me to the pet list page</Link>
            <div class="detailed_pet_flex_box">
            <form class="detailed_pet_flex_entity" onSubmit={onSubmitHandler}>
                <p>
                    <label>Update Name: </label>
                    {
                    name.length > 0 && name.length < 3 ?
                    <span className="error-txt"> Pet name must be at least 3 characters long</span>
                    : null
                    }
                    <input type="text" value = {name} onChange = {(e)=>setName(e.target.value)}/>
                </p>
                <p>
                    <label>Update Type: </label>
                    {
                    type.length > 0 && type.length < 3 ?
                    <span className="error-txt"> Pet type must be at least 3 characters long</span>
                    : null
                    }
                    <input type="text" value = {type} onChange = {(e)=>setType(e.target.value)}/>
                </p>
                <p>
                    <label>Update Description: </label>
                    {
                    description.length > 0 && description.length < 3 ?
                    <span className="error-txt"> Pet description must be at least 3 characters long</span>
                    : null
                    }
                    <input className="bigTextBox" type="text" value = {description} onChange = {(e)=>setDescription(e.target.value)}/>
                </p>
                <p>
                    <label>Skill_1: </label>
                    {
                    skill_1.length > 0 && skill_1.length < 3 ?
                    <span className="error-txt"> This Skill must be at least 3 characters long</span>
                    : null
                    }
                    <input type="text" value = {skill_1} onChange = {(e)=>setSkill_1(e.target.value)}/>
                </p>
                <p>
                    <label>Skill_2: </label>
                    {
                    skill_2.length > 0 && skill_2.length < 3 ?
                    <span className="error-txt"> This skill must be at least 3 characters long</span>
                    : null
                    }
                    <input type="text" value = {skill_2} onChange = {(e)=>setSkill_2(e.target.value)}/>
                </p>
                <p>
                    <label>Skill_3: </label>
                    {
                    skill_3.length > 0 && skill_3.length < 3 ?
                    <span className="error-txt"> This skill must be at least 3 characters long</span>
                    : null
                    }
                    <input type="text" value = {skill_3} onChange = {(e)=>setSkill_3(e.target.value)}/>
                </p>
                    <input type="submit"/>
            </form>
            {
            <div class="detailed_pet_flex_entity">
                <h2>{petList.name}</h2>
                <h4>{petList.type}</h4>
                <h4>{petList.description}</h4>
                <h4>pet skills include: {petList.skill_1}, {petList.skill_2}, {petList.skill_3}</h4>
                <button type="submit" onClick={onDelete}>
                Adopt
            </button>
            </div>
            }
            </div>
        </div>
    )
}

export default SinglePetDisplay;
