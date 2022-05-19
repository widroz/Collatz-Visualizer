import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Palette( {currentColor, setCurrentColor}) {

    const colorList= [
        '#FF0000',
        '#FFA500',
        '#FFFF00',
        '#008000',
        '#0000FF',
        '#4B0082',
        '#EE82EE',
        '#A52A2A',
        '#FF00FF',
        '#800000',
        '#000000',
    ]

    const colorListStyle ={
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }

    const handleClick = (e) => {
        setCurrentColor(e.target.style.backgroundColor)
    }

  return (
    <div>
        <div className="my-5 mx-5" style={colorListStyle}>
            {colorList.map((color, index) => {
                return (
                    <div key={index} style={{backgroundColor: color, width: '50px', height: '50px', borderRadius: '50%', margin: '5px'}} onClick={handleClick}></div>
                )
            })}
        </div>
        </div>
  )
}
