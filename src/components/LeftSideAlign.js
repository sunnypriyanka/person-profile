import { lightGreen } from "@material-ui/core/colors";
import React from "react";
import "../App.css";
import { LeftSideData } from "./LeftSideData";
import IconButton from '@material-ui/core/IconButton';

function LeftSideAlign() {
  return (
    <div className="LeftSideAlign" style={{marginTop: "70px"}} >
      <ul className="Leftbarlist">
        {LeftSideData.map((val, key) => {
          return (
            <li key={key} 
             className="list"
             
             id = {window.location.pathname == val.link ? "active" : ""}


             onClick={() => { 
              
               window.location.pathname = val.link; }}
               >
             
              <div id="icon" >{val.icon}</div>
             
              <div id="title" >{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LeftSideAlign;




// style={{ color: "#cbcbcb", marginTop: "60px",fontSize: "40px" }}
// style={{ color: "#cbcbcb", marginBottom: "5px",marginTop: "10px",fontSize: "14px",}}