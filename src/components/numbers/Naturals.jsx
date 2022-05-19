import {React, useState, useEffect }  from 'react'
import RowColumnsButtons from '../controls/RowColumnsButtons'
import Palette from '../controls/Palette'
import Row from './Row'
import NumberForm from '../controls/NumberForm'

export default function Naturals() {
    const [currentColor, setCurrentColor] = useState('#FF0000')
    const [numberOfRows, setNumberOfRows] = useState(10)
    const [rowSize, setRowSize] = useState(8)
    const [indexesOfRows, setIndexesOfRows] = useState([]) //A matrix which contains the indexes of the rows (example: for rows =   
    const matrixStyle={
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',  
    }

    const [firstNumberCollatz, setFirstNumberCollatz] = useState(16)
    const [collatzList, setCollatzList] = useState([])

    function getCollatzPath(n) {
        let list = [n]
        while (n > 1) {
            if (n % 2 === 0) {
                n = n / 2
            } else {
                n = 3 * n + 1
            }
            list.push(n)
        }
        return list
    }

    function getCollatzPathLength(n) {
        return getCollatzPath(n).length
    }

    const drawCollatzPath = () => {
        setCollatzList(getCollatzPath(firstNumberCollatz))
    }


    function getIndexesOfRows(n) {
        let indexes = []
        for (let i = 0; i < n; i++) {
            indexes.push(i)
        }
        return indexes
    }

    useEffect(() => {
        setIndexesOfRows(getIndexesOfRows(numberOfRows))
    }, [rowSize, numberOfRows])




    function getGreatestFromList(list) {
        let greatest = 0
        for (let i = 0; i < list.length; i++) {
            if (list[i] > greatest) {
                greatest = list[i]
            }
        }
        return greatest
    }


    function renderNumbers(){
        return indexesOfRows.map((i) => (
            <Row className="border border-5" key={i} first={i * rowSize + 1} rowSize={rowSize} index={i} collatzList={collatzList} currentColor={currentColor}></Row>
        ))
    }


    return (
        <>
            {indexesOfRows

            ? <div >
                <div style={matrixStyle}>
                    <div style={{display:'flex', flexDirection:'row'}}>
                <RowColumnsButtons numberOfRows={numberOfRows} setNumberOfRows={setNumberOfRows} rowSize={rowSize} setRowSize={setRowSize} ></RowColumnsButtons>
                <NumberForm getGreatestFromList={getGreatestFromList} getCollatzPath={getCollatzPath} setFirstNumberCollatz={setFirstNumberCollatz} firstNumberCollatz={firstNumberCollatz} drawCollatzPath={drawCollatzPath}></NumberForm>
                    </div>
                <Palette setCurrentColor={setCurrentColor} currentColor={currentColor} />
                </div>

                <div style={matrixStyle}>{renderNumbers()}</div>
                
            </div>
            


            : <div >Loading...</div>}
        </>
    )
}
