import React from "react";
import './navigation.styles.scss';

class navigation extends React.Component{
   constructor(){
        super();
        this.state = {
            location: [
                {
                    id: 0,
                    title: 'New York',
                    selected: false,
                    key: 'location'
                },
                {
                  id: 1,
                  title: 'Dublin',
                  selected: false,
                  key: 'location'
                },
                {
                  id: 2,
                  title: 'California',
                  selected: false,
                  key: 'location'
                },
                {
                  id: 3,
                  title: 'Istanbul',
                  selected: false,
                  key: 'location'
                },
                {
                  id: 4,
                  title: 'Izmir',
                  selected: false,
                  key: 'location'
                },
                {
                  id: 5,
                  title: 'Oslo',
                  selected: false,
                  key: 'location'
                }
            ]
        }
   }

   render(){
       return(
           <div>
                
           </div>
       );
   }
    
};
export default navigation;