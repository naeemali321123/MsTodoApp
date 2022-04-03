import React, { useState } from "react";
import { classes } from "./StudentDataStyle";
import "./StudentData.css";
import Student from "../student/Student";

export default function StudentData() {
  return (
    <div style={{ display: "flex", padding: "15px" }}>
      <table style={classes.border}>
        <tr>
          <th style={classes.border}>ID</th>
          <th style={classes.border}>UserName</th>
          <th style={classes.border}>Email</th>
          <th style={classes.border} colSpan="2">
            Actions
          </th>
        </tr>
        <Student />
        
      </table>
    </div>
  );
}
