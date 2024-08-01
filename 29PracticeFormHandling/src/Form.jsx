import React from 'react'

function Form() {
  const getFormData = (e) => {
    e.preventDefault()
    // const FormData = e.target.value
    console.log(e.target)
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