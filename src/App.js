import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import industries from './components/industries/industries.component';
import collectionItem from './components/services-collections/service-collection.component';
//Quick 


function App (){
      return(
        <div>
          <Switch>
            <Route path = '/' component = {Header} />
            <Route exact path = '/industries' component = {industries} />
            <Route exact path= "/advisory" component = {collectionItem} />
          </Switch>
        </div>
      )
}

export default App;
