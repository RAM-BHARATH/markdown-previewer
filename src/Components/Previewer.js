const Previewer = ({ markedText}) =>{
    return (
        <div className="previewer">
            <h3>Previewer</h3>
            <div id="preview" className="preview" dangerouslySetInnerHTML={{__html:`${markedText}`}}>
                {/* {markedText} */}
            </div>
        </div>
    )
}

export default Previewer;