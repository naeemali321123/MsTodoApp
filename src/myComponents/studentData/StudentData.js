import { Hd } from "@material-ui/icons";
import React, { useState } from "react";
import { useStyle } from "./StudentDataStyle";

export default function StudentData() {
  const [id, setId] = useState();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  let classes = useStyle;
  return (
    <>
      <div style={{ display: "flex", padding: "15px" }}>
        <table style={classes.border}>
          <tr>
            <th style={classes.border}>ID</th>
            <th style={classes.border}>UserName</th>
            <th style={classes.border}>Email</th>
          </tr>
          <tr>
            <td style={classes.border}><input type="text" placeholder=" ID" onChange={(e)=>{setId(e.target.value)}} value={userName}/></td>
            <td style={classes.border}><input type="text" placeholder=" User Name" onChange={(e)=>{setUserName(e.target.value)}} value={userName}/></td>
            <td style={classes.border}><input type="text" placeholder=" Email" onChange={(e)=>{setEmail(e.target.value)}} value={userName}/></td>
          </tr>
        </table>
      </div>
    </>
  );
}
