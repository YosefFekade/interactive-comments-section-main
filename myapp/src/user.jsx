import React from 'react'
import data from '../data.json'

function User() {


  return (
    <div className="auser">
      <div><img  width="40" height="40" src={data.currentUser.image.png} alt="" /></div>
      <div>
        <input type="text" placeholder='Add a comment...' style={{width:"450px", height:"50px"}} />
      </div>
      <div>
        <button style={{background:"hsl(238, 40%, 52%)", color:"hsl(0, 0%, 100%)", padding:"10px", border:"0px", borderRadius: "5px"}}>Send</button>
      </div>
    </div>
  )
}

export default User