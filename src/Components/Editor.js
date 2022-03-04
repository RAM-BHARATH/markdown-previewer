const Editor = ({text, updateText}) =>{
    return(
        <div className="editor">
            <h3>Editor</h3>
            <textarea name="editor" id="editor" cols="30" rows="10" onChange={({target})=>updateText({target})} value={text}></textarea>
        </div>
    );
}

export default Editor;
