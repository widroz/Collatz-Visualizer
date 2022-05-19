import React from 'react'


export default function NumberForm({ setFirstNumberCollatz, firstNumberCollatz, drawCollatzPath }) {
  return (
    <div style={{display:'flex', flexDirection:'row', maxWidth:'90rem', marginRight:'9rem'}}>
      <input value={firstNumberCollatz} placeholder="Type a number!"  onChange={(e) => setFirstNumberCollatz(e.target.value)} />
      <button className="btn btn-lg btn-success" onClick={drawCollatzPath}><h3>Draw Collatz Path</h3></button>
    </div>
  )
}
