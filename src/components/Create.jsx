import React, { useState } from 'react'
import styles from "./Create.module.css"
import Card from './UI/Card'
import Input from './UI/Input'
import Button from './UI/Button'

const Create = (props) => {

  const [name, setName] = useState()
  const [age, setAge] = useState()

  function ageValueHandler(e) {
    setName(e.target.value)
  }
  function nameValueHandler(e) {
    setAge(e.target.value)
  }

  function onSubmitHandler(e) {
    e.preventDefault()

    const inputValue = {
      name: name,
      age: age,
      id: Math.random()
    }
    props.save(inputValue)
    setAge("")
    setName("")
  }

  return (
    <Card className = {styles.parent}>
      <form onSubmit = {onSubmitHandler} className={styles.form}>
        <Input value = {age} onChange = {ageValueHandler} type = "text"/>
        <Input value = {name} onChange = {nameValueHandler} type = "number"/>
        <Button>ADD</Button>
      </form>
    </Card>
  )
}

export default Create;
