import React from 'react';
import List from './List';

const BrewList = ({ beers }) => {
  return (
    <div>
      {
        beers.map((user, i) => {
          return (
            <List
                key={i}
                id={beers[i].id}
                name={beers[i].name}
                city={beers[i].city} 
                phone={beers[i].phone} 
                website_url={beers[i].website_url}
              />
          );
        })
      }
    </div>
  );
}

export default BrewList;