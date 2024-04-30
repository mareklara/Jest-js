import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelloWorldApp } from './HelloWorldApp'
import { FirstComponent } from './assets/FirstComponent'
import './assets/styles.css'
import { CounterApp } from './CounterApp'
import { Lists } from './Lists'
import { CardBox } from './CardBox'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CounterApp value = {0}/>
    <Lists name={'Marco'} lastName={'Lara'}/> */}
    {/* <CardBox/> */}
  </React.StrictMode>
)