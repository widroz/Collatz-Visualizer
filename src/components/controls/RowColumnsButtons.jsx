import React from 'react'

export default function RowColumnsButtons({ rowSize, setRowSize, numberOfRows, setNumberOfRows }) {

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

            <div className="mx-5 my-5" style={{display:'flex', flexDirection:'row'}}>
                <button className="btn btn-secondary btn-lg" onClick={decrementNumberOfRows}>Remove Row</button>
                <button className="btn btn-secondary btn-lg" onClick={incrementNumberOfRows}>Add Row</button>
                <button className="btn btn-primary btn-lg" onClick={decrementRowSize}>Remove Column</button>
                <button className="btn btn-primary btn-lg" onClick={incrementRowSize}>Add Column</button>
            </div>

        </div>
    )
}
