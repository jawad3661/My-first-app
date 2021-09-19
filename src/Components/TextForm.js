import React, { useState } from 'react';


export default function TextForm(props) {
    

    function HandleOnChange(e) {
        settext(e.target.value);
    }
    function UpperCasecnvrt() {
        var Text = text.toUpperCase();
        settext(Text);
    }
    function LowerCasecnvrt() {
        var Text = text.toLowerCase()
        settext(Text);
    }
    function Clearcnvrt() {
        var Text = "";
        settext(Text);
    }
    function handlecopy() {
        var Text = document.getElementById('myBox');
        Text.select();
        navigator.clipboard.writeText(Text.value);
        
    }

    function Removespaces() {
        var Text = text.split(/[ ]+/);
        settext(Text.join(" "));
    }

    function Capitalize_each_word() {
        const str = text
        const arr = str.split(" ");

        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        
        settext(arr.join(" "));
    }

    const [text, settext] = useState("");

    return (

        <>
            <div className="container" >
                <div className="mb-3">
                    <h2 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h2>
                    <textarea value={text} style={{backgroundColor:props.mode==='light'?'white':'#273d50',color:props.mode==='light'?'black':'white'}} onChange={HandleOnChange} className="form-control" id="myBox" rows="8" placeholder="Enter Text Here..."></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={UpperCasecnvrt}>Convert Into Uppercase</button>
                <button className="btn btn-success mx-1" onClick={LowerCasecnvrt}>Convert Into Lowercase</button>
                <button className="btn btn-info mx-1" onClick={handlecopy}>Copy Text</button>
                <button type="button" class="btn btn-dark mx-1" onClick={Removespaces}>Remove Extra Spaces</button>
                <button type="button" class="btn btn-primary mx-1" onClick={Capitalize_each_word}>Capitalize Each Word</button>
                <button className="btn btn-warning" onClick={Clearcnvrt}>Clear</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
                <h2>Text Summary</h2>
                <p>{text.length>0 ? text.trim().split(" ").length : 0} Words || {text.length} Characters || {text.split("\n").length - 1} Line</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something in TextArea to Preview"}</p>

            </div>

        </>
    )
}
