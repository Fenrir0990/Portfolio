import React from 'react'

export default function CarcP(props) {
    const { img , title, description, deploid, urlR, urlD } = props
  return (
    <div className="containerP">
        <div class="cardP">
                <div class="face face1">
                    <div class="content">
                        <img className='imgP' src={img} alt="not found" />
                        <h3>{title}</h3>
                    </div>
                </div>
                <div class="face face2">
                    <div class="content">
                        <p>{description}</p>
                        <span className='buttons' >
                            <a href = {urlR} className='btn btn-primary'>Repositorio</a>
                            { deploid ? <a href = {urlD} className='btn btn-primary'>visitar</a> : null}
                        </span>
                    </div>
                </div>
		 </div>
    </div>
  )
}
