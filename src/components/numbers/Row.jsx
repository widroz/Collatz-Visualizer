import { React,useState, useEffect  } from 'react'
import Number from './Number'
import { rowStyle } from './Styles'

export default function Row({first,rowSize, collatzList, currentColor}) {

  const [firstNumber, setFirstNumber] = useState(first)
  const [size, setSize] = useState(rowSize)
  const [numbers, setNumbers] = useState([])

  const [myCollatzList, setMyCollatzList] = useState(collatzList) //List containing whole collatz path

  useEffect(()=>{
    setMyCollatzList(collatzList)
  },[collatzList])

  useEffect(()=>{
    setSize(rowSize)
  },[rowSize])

  useEffect(()=>{
    if(first)setFirstNumber(first)
  },[first])
  
  useEffect(()=>{
    if(size && firstNumber){
    let listOfNumbers = []
    for(let i = firstNumber; i < firstNumber+size; i++){
      listOfNumbers.push(i)
    }
    setNumbers(listOfNumbers)
  }
  },[size,firstNumber])

  
  function isInList(n){
    for(let i = 0; i < myCollatzList.length; i++){
      if(myCollatzList[i] === n){
        return true
      }
    }
    return false
  }
  
  function positionInList(n){
    for(let i = 0; i < myCollatzList.length; i++){
      if(myCollatzList[i] === n){
        return i
      }
    }
    return -1
  }


  function renderRow(){
    return numbers.map((i)=>(
      <Number  key={i} number={i} inList={isInList(i)} currentColor={currentColor} positionInList={positionInList(i)}></Number>
    ))
  }



  return (
    <div  style={rowStyle}>
      {numbers

      ? renderRow()
      :<div>Loading...</div>}
      
      </div>
  )
}
