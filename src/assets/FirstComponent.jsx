import React from "react";
import './estilos.css';
import PropTypes from 'prop-types';


export const FirstComponent = ({title, subTitle, name}) => {



  return (
    <>
    <h1>{title}</h1>

    <p>{subTitle}</p>
    <p>{name}</p>
    </>
  )
}

FirstComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}

FirstComponent.defaultProps = {
  title: "No titulo",
  subTitle: "No hay nada",
  name: 'Marco'
}

