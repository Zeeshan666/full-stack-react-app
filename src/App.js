import React, { Component } from 'react'
import  MainComponent from '../src/components/MainComponent'
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
 const store = ConfigureStore();

 class App extends Component {
 
  render() {
    return (

      <Provider store={store}>
      <BrowserRouter>
      <div >
       <MainComponent/>
      </div>
      </BrowserRouter>
      </Provider>
     
     
    )
  }A
}

export default App

