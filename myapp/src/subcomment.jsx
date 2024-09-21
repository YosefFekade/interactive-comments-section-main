import React, {useState} from 'react'
import './popupdeletcomment.css';
import User from './user';


function Sub(props) {
const[todelete,settodelete]=useState(false)
const[nowReplay, setReplay]=useState(false)
 function handelclick(){
  
    settodelete(true)
  }
  const handleCancelClick = () => {
    settodelete(false);
  };

  const handleConfirmDelete = () => {
    // delete logic here
    settodelete(false);
  };

  function handelReplay(){
    
    setReplay(!nowReplay)

  }

  return (
    <>
    <div className="sub">
      <div className='vote'>

        <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/></svg>
         <p>{props.Vote}</p>
        <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF"/></svg>

      </div> 
        <div className='user'>
        <div className='details'> 
            <img  width="40" height="40"src={props.image} alt="user" />
            <h3>{props.sname}</h3>
            <div style={{background:"hsl(238, 40%, 52%)", color:"hsl(0, 0%, 100%)", padding:"0px"}}>{props.you}</div>
            <p>{props.Month}</p>
          </div>
        <div className='svg' >
          {props.delete }<div onClick={handelclick}>{props.deleteName}</div>
          {props.replay}<div onClick={handelReplay}>{props.replayName}</div>
        </div>
           {todelete&&(
            <>
            <div className="overlay"></div>
            <div className="delete-popup">
                    <p>Delete Comment</p>
                    <p>Are you sure you want to delete this comment? This will reove the comment and cannot be undone.</p>
                    <button className="cancel-btn" onClick={handleCancelClick}>CANCEL</button>
                    <button className="delete-btn" onClick={handleConfirmDelete}>YES, DELETE</button>
            </div>
            </>
                )}
        </div>
        <div className="acomment">
            <p>{props.content}</p>
      </div>
    </div>  
     {nowReplay&& <User/>}
     </>   
 
  )
}

export default Sub