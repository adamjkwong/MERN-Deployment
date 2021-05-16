import MultiplePetDisplay from '../components/MultiplePetDisplay';
import React from 'react'
import {Link} from '@reach/router';

import '../App.css';

const Main = () => {
    return (
        <div>
            <Link class= "topright" to = "/pets/new">add a pet to the shelter</Link>
            <div class ="mainbody">
                <h1>Pet Shelter</h1>
                <h2>These pets are looking for a good home</h2>
                <MultiplePetDisplay/>
            </div>
        </div>
    )
}
export default Main;