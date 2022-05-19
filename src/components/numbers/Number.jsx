import { React, useEffect, useState } from 'react'
import { inListStyle, unclickedStyle } from '../Styles'

export default function Number({ number, inList, positionInList, currentColor }) {

  const [myNumber, setMyNumber] = useState(number)
  const [numberStyle, setNumberStyle] = useState(unclickedStyle)
  const [clicked, setClicked] = useState(false)
  const [thisNumberColor, setThisNumberColor] = useState()

  useEffect(() => {
    if (inList) {
      setNumberStyle({
        ...unclickedStyle,
        backgroundColor: 'green',
        color: 'white',
      })
    } else setNumberStyle({ ...unclickedStyle })
  }, [inList])


  const handleClickNumber = () => {
    clicked
      ? !inList
        ? setNumberStyle(unclickedStyle)
        : setNumberStyle(inListStyle)

      : setNumberStyle({
        ...unclickedStyle,
        backgroundColor: currentColor,
        color: 'white',
      })
    
    setClicked(!clicked)

    !clicked
    ? setThisNumberColor(currentColor)
    : setThisNumberColor('white')
  }


  useEffect(() => {
    setMyNumber(number)
  }, [number])



  return (<div>
    {positionInList !== -1
      ? <button style={numberStyle} onClick={handleClickNumber}>{myNumber}
        <div style={{ fontSize: 16, color: 'black' }}>
          {positionInList}
        </div>
      </button>

      : <button style={numberStyle} onClick={handleClickNumber}>
        {myNumber}
      </button>}
  </div>
  )
}
