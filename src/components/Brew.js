import React from 'react';

const Brew = ({name, city, phone, website_url}) => {
    return (
        <div className='tc grow green'>
           <div>
             <h2>{name}</h2>  
             <p>
               <ul>
                  <li>{city}</li> 
                  <li>{phone}</li>
                  <li>{website_url}</li>
               </ul>
             </p>
           </div> 
        </div>
    );


}

export default Brew;