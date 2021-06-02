import react from 'react';
import { mapType } from './helpers'

const Icon = ({ type }) => 
    <div>
        <img src={mapType(type)}></img>
    </div>

export default Icon;