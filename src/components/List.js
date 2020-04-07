import React from 'react';
// import Pic from './Pic';

const List = ({name, city, website_url}) => {

  
  

    return (
        <div className='tc grow bg-dark-blue  br3 pa3 ma2 dib bw2 shadow-5'>
            <img alt='beers' src={`https://source.unsplash.com/random/200x200`}/>
             <h2><a target="_blank" rel="noopener noreferrer" href={website_url}>{name}</a></h2>  
               <ul>
                  <li>{city}</li> 
               </ul>
        </div>
    );
  
 }


export default List;