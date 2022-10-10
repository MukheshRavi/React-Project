import React,{useState} from "react";

export default function Textform()
{
    const[text,setText]=useState("Enter text here");

    const[myStyle,setmyStyle]=useState({
        color:'white',
        backgroundColor:'black'
    });

    const[btnText,setbtnText]=useState("Enable light mode");

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const convertToUppercase=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const convertTolowercase=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    const changeStyle=()=>{
        if(myStyle.color==='white')
        {
        setmyStyle({
        color:'black',
        backgroundColor:'white'
        })
        setbtnText("Enable dark mode")
        document.body.style.backgroundColor="white"

    }
    else
    {
        setmyStyle({
        color:'white',
        backgroundColor:'black'
        })
        setbtnText("Enable light mode")
        document.body.style.backgroundColor="black"


    }

    }


    return(
    <div className="container" style={myStyle}>

    <div className="mb-3">
  <label for="Textarea" className="form-label">Enter your text below</label>
  <textarea className="form-control" style={myStyle}  id="Textarea" value={text}  onChange={handleOnChange} rows="3"></textarea>
  </div>
  <button class="btn btn-primary"  onClick={convertToUppercase}>ConvertToUppercase</button>
  <span className="mx-2">
  <button class="btn btn-primary"  onClick={convertTolowercase}>ConvertTolowercase</button>
    </span>
    <div>
    <button class="btn btn-primary"  onClick={changeStyle}>{btnText}</button>  
    </div>
    </div>
    );
}