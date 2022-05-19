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
       
                <div style={{display:'flex', flexDirection:'column', marginRight:'4rem'}}>
                <button style={{ marginBottom:'1rem'}} className="btn btn-primary btn-lg" onClick={decrementRowSize}><h3>{MINUS_EMOJI} Column</h3></button>
                <button className="btn btn-primary btn-lg" onClick={incrementRowSize}><h3>{PLUS_EMOJI} Column</h3></button>
                </div>

                <div style={{display:'flex', flexDirection:'column'}}>
                <button style={{ marginBottom:'1rem'}} className="btn btn-secondary btn-lg" onClick={decrementNumberOfRows}><h3>{MINUS_EMOJI} Row</h3></button>
                <button className="btn btn-secondary btn-lg" onClick={incrementNumberOfRows}><h3>{PLUS_EMOJI} Row</h3></button>
                </div>
            </div>

        </div>
    )
}
