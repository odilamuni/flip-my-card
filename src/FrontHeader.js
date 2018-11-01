import React from 'react';
import {Content} from './Content';

export const FrontHeader = ( )=> {
    
    return (
    <div id="FrontHeader" >
     <h2>{Content.name}</h2>
     <h3>{Content.location} based</h3>
     <h1>{Content.title}</h1>
    </div>
    );
}