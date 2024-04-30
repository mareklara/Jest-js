import React from 'react'
import './CardBox.css';
import { CardBoxInfo } from './CardBoxInfo';
import logo from './media/ninja.png'

export const CardBox = () => {
  return (
    <div className='cardBox'>
        <CardBoxInfo 
        img={logo}
        subName={'Marco Lara'}
        paragraph={"Ninja picture in a square"}/>
    </div>
  )
}


