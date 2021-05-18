import React, { useState,useEffect } from 'react'
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import '../App.css';
const MultiplePetDisplay = (props) => {
    const [petList, setPetList] = useState([]);
    const viewPet = (petId) => {
        navigate("/pets/"+petId)
    }
    const editPet = (petId) => {
        navigate("/pets/"+petId+"/edit")
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
                    <th>Actions</th>                    
                </tr>
            </table>
            {
            petList.map((pet, idx) => (
                <table>
                        <tr>
                            <td>{pet.name}</td>
                            <td>{pet.type}</td>
                            <td> <button type="submit" onClick={(e)=>{viewPet(pet._id)}}>Details</button><button type="submit" onClick={(e)=>{editPet(pet._id)}}>Edit</button></td>
                        </tr>
                </table>
            ))
            }
        </div>
    )
}
export default MultiplePetDisplay;