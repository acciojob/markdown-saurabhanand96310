import React, { useState }  from "react";
import ReactMarkdown from "react-markdown";

const App=()=>{
    const [text, setText]=useState()
    return(
        <>
        <div className="app">
            <textarea className="textarea"
                value={text}
                onChange={(e)=>setText(e.target.value)}
                >
            </textarea>
            <ReactMarkdown  children={text}className="preview" / >
                
            {/* </div> */}
            {/* <ReactMarkdown children={text} className="preview"/> */}
        </div>
        </>
    )
}

export default App;