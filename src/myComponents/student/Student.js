import { Button } from "@material-ui/core";
import { useState } from "react";
import { classes } from "../studentData/StudentDataStyle";

export default function Student() {
  const [id, setId] = useState();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  return (
    <tr>
    <td style={classes.border}><input type="text" placeholder=" ID" onChange={(e)=>{setId(e.target.value)}} value={id}/></td>
    <td style={classes.border}><input type="text" placeholder=" User Name" onChange={(e)=>{setUserName(e.target.value)}} value={userName}/></td>
    <td style={classes.border}><input type="text" placeholder=" Email" onChange={(e)=>{setEmail(e.target.value)}} value={email}/></td>
    <td style={classes.border}><Button variant='contained' size="small" color="Primary">Update</Button></td>
    <td style={classes.border}><Button variant='contained' size="small" color="Primary">Delete</Button></td>
    </tr>
  )
}

