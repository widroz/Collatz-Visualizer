import React from 'react'

export default function RowColumnsButtons({ rowSize, setRowSize, numberOfRows, setNumberOfRows }) {


    const MINUS_EMOJI = '➖';
    const PLUS_EMOJI = '➕';

    const incrementRowSize = () => {
        setRowSize(rowSize + 1)
    }

    const decrementRowSize = () => {
        if(rowSize > 1) setRowSize(rowSize - 1)
    }

    const incrementNumberOfRows = () => {
        setNumberOfRows(numberOfRows + 1)
    }

    const decrementNumberOfRows = () => {
        if(numberOfRows > 1) setNumberOfRows(numberOfRows - 1)
    }




    return (
        <div>

            <div style={{display:'flex', flexDirection:'row'}}>
       
                <div style={{display:'flex', flexDirection:'row', marginRight:'4rem'}}>
                <button className="decrement-increment-button" onClick={decrementRowSize}><h3>{MINUS_EMOJI} Column</h3></button>
                <button className="decrement-increment-button" onClick={incrementRowSize}><h3>{PLUS_EMOJI} Column</h3></button>
                </div>

                <div style={{display:'flex', flexDirection:'row'}}>
                <button className="decrement-increment-button" onClick={decrementNumberOfRows}><h3>{MINUS_EMOJI} Row</h3></button>
                <button className="decrement-increment-button" onClick={incrementNumberOfRows}><h3>{PLUS_EMOJI} Row</h3></button>
                </div>
            </div>

        </div>
    )
}
