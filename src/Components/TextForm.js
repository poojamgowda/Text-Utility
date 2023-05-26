import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("Converting " +text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upper case","success");
    }
    const handleLoClick=()=>{
        //console.log("Converting " +text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lower case","success");
    }
    const clear=()=>{
        //console.log("Converting " +text);
        let newText='';
        setText(newText);
        props.showAlert("Text cleared","success");
    }
    const speak=()=>{
        let newText=new SpeechSynthesisUtterance();
        newText.text=text;
        window.speechSynthesis.speak(newText);
    }
    const handleOnChange=(event)=>{
        //console.log("on change");
        setText(event.target.value);
    }
    const extraSpace=()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    const [text, setText] = useState();
    //setText("New text");
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#41464b':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        {/* <button disabled={text.length===0} className={`btn btn-${props.mode} mx-1 my-1`} onClick={handleUpClick}>Convert to Upper Case</button> */}
        <button className={`btn btn-${props.mode} mx-1 my-1`} onClick={handleUpClick}>Convert to Upper Case</button>
        <button className={`btn btn-${props.mode} mx-1 my-1`} onClick={handleLoClick}>Convert to lower Case</button>
        <button className={`btn btn-${props.mode} mx-1 my-1`} onClick={clear}>Clear Text</button>
        <button className={`btn btn-${props.mode} mx-1 my-1`} onClick={extraSpace}>Extra Space</button>
        <button className={`btn btn-${props.mode} mx-1 my-1`} onClick={speak}>Speak</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Summary</h2>
        {/* <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters </p> */}
        <p>{text}</p>
    </div>
    </>
  )
}
