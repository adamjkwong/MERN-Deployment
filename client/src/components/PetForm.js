import React, { useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import '../App.css';

const PetForm = () => {
    const [name, setName] = useState(""); 
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({});
    const [skill_1, setSkill_1] = useState("");
    const [skill_2, setSkill_2] = useState("");
    const [skill_3, setSkill_3] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets', {
            name,   
            type,
            description,
            skill_1,
            skill_2,
            skill_3,
        })
            .then(res=>{
                console.log(res.data);
                navigate("/");
            })
            .catch(err=>{
                console.log(JSON.stringify(err));
                setErrors(err.response.data.errors);
                console.log(err.response.data.errors);
            })
    }

    return (
        <div className="shiftleft">
            <Link className="topright" to = "/">back to home</Link>
            <h1>Pet Shelter</h1>
            <h2>Know a pet needing a home?</h2>
            <form className="detailed_pet_flex_box" onSubmit={onSubmitHandler}>
                <div className="detailed_pet_flex_entity">
                    <p>
                        <label>Name: </label>
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
                    </p>
                        <input type="text" onChange = {(e)=>setName(e.target.value)}/>
                    <p>
                        <label>Type: </label>
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
                    </p>
                        <input type="text" onChange = {(e)=>setType(e.target.value)}/>
                    <p>
                        <label>Description: </label>
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
                    </p>
                    <p>
                        <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
                    </p>
                    <input type="submit" value ="Add Pet" className="blue-button"/>
                </div>
                <div className="detailed_pet_flex_entity">
                    <p>
                        <input type="text" onChange = {(e)=>setSkill_1(e.target.value)}/>
                    </p>
                    <p>
                        <input type="text" onChange = {(e)=>setSkill_2(e.target.value)}/>
                    </p>
                    <p>
                        <input type="text" onChange = {(e)=>setSkill_3(e.target.value)}/>
                    </p>
                </div>
            </form>
        </div>
    )
}
export default PetForm;