import { React, useEffect, useState } from 'react'



export default function Palette( {currentColor, setCurrentColor}) {

    const colorList= [
        '#b71c1c',
        '#880e4f',
        '#4a148c',
        '#311b92',
        '#1a237e',
        '#0d47a1',
        '#01579b',
        '#006064',
        '#004d40',
        '#1b5e20',
        '#33691e',
        '#827717',
        '#f57f17',
        '#ff6f00',
        '#e65100',
        '#bf360c',
        '#3e2723',
        '#212121',
        '#000000',
    ]

    const colorListStyle ={
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: '2rem',
    }

    const handleClick = (e) => {
        setCurrentColor(e.target.style.backgroundColor)
    }

    function renderPalette(){
        return colorList.map((color, index) => {
            return (
                <div key={index} style={{backgroundColor: color, marginRight: '10px', minHeight:'2rem', minWidth:'2rem'}} onClick={handleClick}></div>
            )
        })
    }





  return (
        <div style={colorListStyle}>
            {renderPalette()}
        </div>
  )
}
