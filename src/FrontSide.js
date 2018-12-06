import React from 'react';
import { FrontHeader } from './FrontHeader';
import { FrontImg } from './FrontImg';
import { Main } from './Main';

export const FrontSide = ( )=> {
    
     return (
     <div className="card-side" id="FrontSide" >
        <div className="header">
            <FrontHeader/>
            <FrontImg/>
        </div>
        <div className="main-content" id="main-frontside">
            <Main/>
            
            <div className="seeReverse"><span>Contact Info</span><i className="fas fa-hand-point-right"></i>
            </div>
        </div>
     </div>
     );
 }