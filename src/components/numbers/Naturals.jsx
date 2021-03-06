import {React, useState, useEffect }  from 'react'
import Row from './Row'
import Controls from '../controls/Controls'

export default function Naturals() {
    const [currentColor, setCurrentColor] = useState('#FF0000')
    const [numberOfRows, setNumberOfRows] = useState(10)
    const [rowSize, setRowSize] = useState(8)
    const [indexesOfRows, setIndexesOfRows] = useState([])  

    const [firstNumberCollatz, setFirstNumberCollatz] = useState()
    const [collatzList, setCollatzList] = useState([])

    const matrixStyle={
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft:'2rem',
}

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
        console.log(list)
        return list
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


    function renderMatrix(){
        return indexesOfRows.map((i) => (
            <Row key={i} first={i * rowSize + 1} rowSize={rowSize} index={i} collatzList={collatzList} currentColor={currentColor}></Row>
        ))
    }


    return (
        <>
            {indexesOfRows
            ? <div style={{display:'flex', flexDirection:'column'}}>
                <Controls currentColor={currentColor} setCurrentColor={setCurrentColor} numberOfRows={numberOfRows} setNumberOfRows={setNumberOfRows} rowSize={rowSize} setRowSize={setRowSize} firstNumberCollatz={firstNumberCollatz} setFirstNumberCollatz={setFirstNumberCollatz} drawCollatzPath={drawCollatzPath} getCollatzPath={getCollatzPath} getGreatestFromList={getGreatestFromList} ></Controls>
                <div style={matrixStyle}>{renderMatrix()}</div>
            </div>
            
            : <div >Loading...</div>}
        </>
    )
}
