import React, {useState} from 'react'                                                       /* app.js me jo container use hua h vo bootstrap ki class hoti h ise 
                                                                                   jo text field h vo full screen se thoda chota ho gya*/
                                                                                /*my-3 margin k liye use hota h ye thoda gap de deta h contanierko*/
export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value)
    }
    const handleClearClick = (event)=>{
        let newText= '';
        setText(newText)
    }
    /*const handleCopy = () => {
        var text = document.getElementById("mybox");
        text.Select();
        navigator.clipboard.writeText(text.value);
    }*/
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const[text, setText] = useState(' ');
    //text = "new text"; //wrong way to change the state
    //setText = "new text"; //correct way to change the state
    return (
        <>
           <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
             <h2>{props.heading}</h2>
            <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'lightgrey':'white', color: props.mode === 'dark'?'white':'black' }} id="mybox" rows="5"></textarea>
            </div> 
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary  my-2 mx-2" onClick={handleClearClick}>Clear Text</button>
            {/*<button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy Text</button>*/}
            <button className="btn btn-primary my-2 mx-2" onClick={handleExtraSpace}>Remove extra space</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h3>Your text summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
        </div>
        </>
    )
}
