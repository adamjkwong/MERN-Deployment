import React, { useState,useEffect } from 'react'
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import '../App.css';
const MultiplePetDisplay = (props) => {
    const [petList, setPetList] = useState([]);
    
    const deletePet = (petId) => {
        axios.delete('http://localhost:8000/api/pets/'+petId)
        .then(res=>{console.log(res)
        })
        .catch(err=>console.log(err))
        }
    const editPet = (petId) => {
        navigate("/edit/"+petId)
    }

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets')
            .then(res=>{
                setPetList(res.data.pets)
                console.log(res.data)
            })
            .catch(err=>console.log(err))
    },[petList])
    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Skills</th>
                    <th>Actions</th>
                </tr>
            </table>
            {
            petList.map((pet, idx) => (
                <div>
                    <table>
                        <tr>
                            <td>{pet.name}</td>
                            <td>{pet.type}</td>
                            <td>{pet.description}</td>
                            <td>{pet.skill_1}, {pet.skill_2}, {pet.skill_3}</td>
                            <td> <button type="submit" onClick={(e)=>{editPet(pet._id)}}>Edit</button><button type="submit" onClick={(e)=>{deletePet(pet._id)}}>Adopt</button></td>
                        </tr>
                    </table>
                </div>
            ))
            }
        </div>
    )
}
export default MultiplePetDisplay;