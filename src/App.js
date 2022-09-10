import React,{useEffect} from 'react'
import RithIcon from './Screens/RithIcon'
import { store } from './components/Redux/Store';
import { Provider } from 'react-redux';
import RootComponent from './RootComponent';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom"
import Banner from './components/Header/Banner';


const App = () => {
 
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RootComponent />
        <RithIcon />
      </BrowserRouter>
    </Provider>
  )
}

export default App;