import React from 'react'
import {useStyle}  from './StudentDataStyle'


export default function StudentData() {
   let classes = useStyle
  return (
    <div style={{display: 'flex', padding: '15px'}}>
        <div style={classes.button}>Name</div>
        <div style={classes.button}>Email</div>
        <div style={classes.button}>Roll#</div>
    </div>
  )
}
