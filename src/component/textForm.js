import React, { useState } from "react";

export const TextForm = (props) => {
  const handUpClick = () => {
    // console.log(text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const HandUpClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handUpClicktoclear = () => {
    setText("");
    props.showAlert("Text cleared!", "success");
  };

  const handlecopy = () => {
    // var text = document.getElementById("myBox");
    // text.select();
    // navigator.clipboard.writeText(text.value);
    // document.getSelection().removeAllRanges(); // on slact copied text
    // props.showAlert("Copied to Clipboard!", "success");
    
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges(); // on slact copied text
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/); // its use regex

    setText(newText.join(" ")); // .join - kar do
    props.showAlert("Extra spaces removed!", "success");
  };

  //*remove all the symbols
  // const handletextExtract = () => {
  //   const regex = /[0-9/A-Z/a-z/ /]/g;

  //   const letters = text.match(regex);
  //   const res1 = letters.join("");
  // res1);
  // };res1);
  // };

  const handleOnChang = (event) => {
    // console.log("free to chang");
    setText(event.target.value); // it halp to change and rewright.
  };

  //Understanding State & Handling Events in React
  // const [state, setstate] = useState(initialState);
  const [text, setText] = useState("");

  // we can update the value of text by updating setstate.
  // text = "new text"; wrong way to change the state
  // setText("new text"); wright way

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChang}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>

        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary"
          onClick={handUpClick}
        >
          convert to Upercase
        </button>

        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary mx-2 my-1"
          onClick={HandUpClick}
        >
          convert to Lowercase
        </button>

        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary mx-2 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra space
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary mx-2 my-1"
          onClick={handlecopy}
        >
          Copy Text
        </button>

        {/* <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handletextExtract}
        >
          Remove Symbols
        </button> */}

        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary"
          onClick={handUpClicktoclear}
        >
          Clear
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary.</h2>
        {/* <p>3745 words and 1938394209230 characters</p> 
        text.split gives a arrey and his .length is gives a length of arrey which is his word 
        take 0.008 minutes time to read 1 word*/}

{/* <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p> */}
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>{/*split whight spaces and new line*/}
            <p>{0.008 *  text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        
      </div>
    </>
  );
};
