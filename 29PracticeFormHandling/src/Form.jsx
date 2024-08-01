import React from 'react'

function Form() {
  const getFormData = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const formEntry = {}
    for(let [key, value] of data) {
      formEntry[key] = value
    }
    console.log(formEntry)
  }
  return (
    <>
        <form onSubmit={getFormData}>
            <label htmlFor="Name">Name </label>
            <input type="text" name="Name" id="" /><br /> <br />
            <label htmlFor="Age">Age </label>
            <input type="number" name="Age" id="" /><br /> <br />
            <label htmlFor="Name">Qualification </label>
            <input type="text" name="Qualification" id="" /><br /> <br />
            <button name='Submit'>Submit</button><br /> <br />
        </form>
    </>
  )
}

export default Form