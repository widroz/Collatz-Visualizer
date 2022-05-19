import React from 'react'

import NumberForm from './NumberForm'
import Palette from './Palette'
import RowColumnsButtons from './RowColumnsButtons'

export default function Controls({ currentColor, setCurrentColor, numberOfRows, setNumberOfRows, rowSize, setRowSize, firstNumberCollatz, setFirstNumberCollatz, drawCollatzPath, getCollatzPath, getGreatestFromList }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column'}}>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'flex-start', alignItems:'center', margin:'2rem' }}>
            <NumberForm getGreatestFromList={getGreatestFromList} getCollatzPath={getCollatzPath} setFirstNumberCollatz={setFirstNumberCollatz} firstNumberCollatz={firstNumberCollatz} drawCollatzPath={drawCollatzPath} ></NumberForm>
            <RowColumnsButtons numberOfRows={numberOfRows} setNumberOfRows={setNumberOfRows} rowSize={rowSize} setRowSize={setRowSize} ></RowColumnsButtons>
            
            </div>
            <Palette setCurrentColor={setCurrentColor} currentColor={currentColor} />

        </div>
    )
}
