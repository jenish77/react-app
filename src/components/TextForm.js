import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
  }
  const handkeLowClick = () => {
    let newText = text.toLocaleLowerCase()
    setText(newText)
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const [text, setText] = useState('Enter Text Here')

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h2>{props.heading}</h2>
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === 'light' ? 'dark' : 'light',
            }}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handkeLowClick}>
          Convert To Lowercase
        </button>
      </div>
      <div className="container my-2">
        <h1>Your text summery</h1>
        <p>
          {text.split(' ').length} words and {text.length} characters
        </p>
      </div>
    </>
  )
}
