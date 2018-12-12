import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Homepage from './Pages/HomePage/homepage';
import Clientpage from './Pages/ClientPage/clientpage';
import Fashionpage from './Pages/FashionPage/fashionpage';

import Clientpage1 from './Pages/ClientPage/clientpage1';

import './App.css';
import Providerpage from './Pages/ProviderPage/providerpage'
import Searchpage from './Pages/SearchPage/searchpage'
import OtherServices from './Pages/HomePage/OtherServices'


const App = () => (
 
  <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/client' component={Clientpage} />
        <Route exact path='/provider' component={Providerpage} />
        <Route exact path='/fashion' component={Fashionpage} /> 
        
        <Route exact path='/search' component={Searchpage} />
        <Route exact path='/OtherServices' component={OtherServices} />
        <Route exact path='/client1' component={Clientpage1} />
      </Switch>
  </BrowserRouter>

)


export default App;
 
