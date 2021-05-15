import React, { useState } from 'react'
import axios from 'axios';
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
        })
            .then(res=>{
                console.log(res);
            })
            .catch(err=>{
                console.log(JSON.stringify(err));
                setErrors(err.response.data.error)
            })
    }

    return (
        <div>
        <h4>Add a new animal, here:</h4>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Name: </label>
                    {
                        errors.name ?
                            <span className="error-txt">{ errors.errors.name.message }</span>
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
                        errors.name ?
                            <span className="error-txt">{ errors.errors.type.message }</span>
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
                        errors.name ?
                            <span className="error-txt">{ errors.errors.description.message }</span>
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
                <p>
                    <label>Skill_1: </label>
                    {
                        errors.skill_1 ?
                            <span className="error-txt">{ errors.errors.skill_1.message }</span>
                            : null
                    }
                    {
                        skill_1.length > 0 && skill_1.length < 3 ?
                        <span className="error-txt"> This Skill must be at least 3 characters long</span>
                        : null
                    }
                </p>
                <p>
                    <input type="text" onChange = {(e)=>setSkill_1(e.target.value)}/>
                </p>
                <p>
                    <label>Skill_2: </label>
                    {
                        errors.skill_2 ?
                            <span className="error-txt">{ errors.errors.skill_2.message }</span>
                            : null
                    }
                    {
                        skill_2.length > 0 && skill_2.length < 3 ?
                        <span className="error-txt"> This skill must be at least 3 characters long</span>
                        : null
                    }
                </p>
                <p>
                    <input type="text" onChange = {(e)=>setSkill_2(e.target.value)}/>
                </p>
                <p>
                    <label>Skill_3: </label>
                    {
                        errors.name ?
                            <span className="error-txt">{ errors.errors.skill_3.message }</span>
                            : null
                    }
                    {
                        skill_3.length > 0 && skill_3.length < 3 ?
                        <span className="error-txt"> This skill must be at least 3 characters long</span>
                        : null
                    }
                </p>
                <p>
                    <input type="text" onChange = {(e)=>setSkill_3(e.target.value)}/>
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}
export default PetForm;