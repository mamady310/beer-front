import React from 'react';

const List = ({name, city, phone, website_url}) => {
    return (
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
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

export default List;