import React from 'react';
import {FormGoogle} from './FormGoogle';
import { SocialMedia } from './SocialMedia';


export const Backside = ( )=> {
    
     return (
     <div className="card-side" id="Backside" >
        <div className="social">
        <p className="visit">Visit my links below or fill contact form</p>
          <SocialMedia/>
        </div>
        <div className="main-content">
            <FormGoogle/>
            
        </div>
     </div>
     );
 }