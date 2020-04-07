import React from 'react';

const List = ({name, city}) => {

  
  

    return (
        <div className='tc grow bg-dark-blue  br3 pa3 ma2 dib bw2 shadow-5'>
           
             <h2>{name}</h2>  
               <ul>
                  <li>{city}</li> 
                  {/* <li>{website_url}</li> */}
               </ul>
        </div>
    );
  
 }


export default List;