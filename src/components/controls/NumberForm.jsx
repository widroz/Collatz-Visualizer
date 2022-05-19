import React from 'react'
import { rowStyle } from '../Styles'

export default function NumberForm({ getGreatestFromList, getCollatzPath, setFirstNumberCollatz, firstNumberCollatz, drawCollatzPath }) {
  return (
    <div style={{display:'flex', flexDirection:'column', maxWidth:'90rem', marginLeft:'9rem'}}>
      <input value={firstNumberCollatz} placeholder="Type a number!"  onChange={(e) => setFirstNumberCollatz(e.target.value)} />
      <button className="btn btn-lg btn-success" onClick={drawCollatzPath}><h3>Draw Collatz Path</h3></button>
    </div>
  )
}
