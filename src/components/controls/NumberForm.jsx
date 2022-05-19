import React from 'react'
import { rowStyle } from '../numbers/Styles'

export default function NumberForm({getGreatestFromList, getCollatzPath, setFirstNumberCollatz,firstNumberCollatz, drawCollatzPath}) {
  return (
    <div className=" input-group mx-5" >
                    <input  value={firstNumberCollatz} onChange={(e) => setFirstNumberCollatz(e.target.value)} />
                    <button className="btn btn-lg btn-success" onClick={drawCollatzPath}>Draw Collatz Path</button>
                </div>
  )
}
