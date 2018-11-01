import React from 'react';
import Github from './assets/GitHub-Mark-32px.png';
import Linkedin from './assets/Linkedin.png';


export const SocialMedia = () =>{

   return(
   <div className='social-media'>
        <ul className='social-links'>
                <li><a href="https://github.com/odilamuni" target="blank"><div><img src={Github} alt="Github link"/></div></a></li>
                <li><a href="https://www.linkedin.com/in/romina-muni/" target="blank"><div><img src={Linkedin} alt="Linkedin link"/></div></a></li>
        </ul>
    </div>
  );
   }