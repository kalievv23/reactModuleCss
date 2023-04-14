import React from 'react'
import styles from "./Input.module.css"
const Input = (props) => {

  return (
    <div>
        <input type= {props.type} className = {styles.input} onChange={props.onChange}/>
    </div>
  )
}

export default Input

// value={props.value}