import React from 'react'
import "./technologies.scss"
function TCard(props) {
    const {icon, name , description, experience} = props
  return (
    
<div className="containerT">
    <div className="card">
        <div className="face face1">
            <div className="content">
            <span className="stars"></span>
            <h2 className="cSharp">{name}</h2>
            
            <p className="cSharp">{description}</p>
            <p className='exp'>{experience} de experience</p>
            </div>
        </div>
        <div className="face face2">
            {icon}
        </div>
    </div>  
</div>
  )
}

export default TCard