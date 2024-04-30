import React from 'react';
import './CardBoxInfo.css';
import PropTypes from "prop-types";


export const CardBoxInfo = ({img,subName, paragraph}) => {
  return (
    <>
       <img className='logo' src={img} alt="" />
        <h2>{subName}</h2>
        <p>{paragraph}</p>
    </>
  )
}


CardBoxInfo.propTypes = {
    subName: PropTypes.string,
    paragraph: PropTypes.string
  };
