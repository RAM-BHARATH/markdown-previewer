import logo from './logo.svg';
import './styles/App.css';
import Editor from './Components/Editor';
import Previewer from './Components/Previewer';
import Header from './Components/Header';
import { useEffect, useState } from 'react';
import { marked } from 'marked';

const initialText = 
`# Hello
## This is a markdown previewer
This is a [link](www.github.com) to github

Inline code should be within two backticks \`Hello\`

This is a code block 
\`\`\`
function add(a, b){
  return a+b;
}
\`\`\`

- You have lists too
  - Item 1
  - Item 2
    - Item 2.1

> You like this, right?

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

**Ofcourse, you can bold text**
`;

function App() {
  const [text, setText] = useState(initialText)
  const [markedText, setMarkedText] = useState('')

  const updateText = ({ target }) => {
    setText(target.value)
  }
  const parseText = (text) =>{
    const html = marked.parse(text);
    setMarkedText(html);
  }
  useEffect(()=>{
    // document.title="Markdown Previewer"
    parseText(text);
  },[text])
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Editor text={text} updateText={updateText}/>
        <Previewer markedText={markedText}/>
      </div>
    </div>
  );
}

export default App;
