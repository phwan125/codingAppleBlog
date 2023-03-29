import './App.css';
import styled from 'styled-components';
import { useState } from 'react';


const Menu = styled.div`
background-color: black ;
display:flex ;
width: 100% ;
color: white;
padding-left: 20px;
`

const BlogPost = styled.div`
width: 100% ;
border-bottom: 1px solid rgba(0,0,0,0.2) ;
display:flex ;
flex-direction: column ;
align-items:flex-start ;
`

function App() {
  const [title, setTitle] = useState(["남자 코트 추천", "강남 우동맛집", "파이썬독학"])
  const [numlike, setNumlike] = useState(0)
  const [date, setDate] = useState(["2023-03-29"])
  return (
    <div className="App">
      <Menu>
        <h4>Menu</h4>
      </Menu>
      <BlogPost>
        <h4>{title[0]}
          <span onClick={() => {
            setNumlike(prev => prev + 1)
          }}>
            👍
          </span> {numlike}</h4>
        <p>{date[0]}</p>
      </BlogPost>
      <BlogPost>
        <h4>{title[1]}</h4>
        <p>{date[0]}</p>
      </BlogPost>
      <BlogPost>
        <h4>{title[2]}</h4>
        <p>{date[0]}</p>
      </BlogPost>
    </div>
  );
}

export default App;
