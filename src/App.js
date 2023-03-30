import './App.css';
import styled from 'styled-components';
import { useState } from 'react';
import Modal from './components/Modal';


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
  const [numlike, setNumlike] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0,])
  const [date, setDate] = useState(["2023-03-29"])
  const [textInput, setTextInput] = useState("")

  const [open, setOpen] = useState(false)
  const [page, setPage] = useState(0)
  const changeTitle = () => {
    let copyList = [...title]
    copyList[0] = "여자코트추천"
    setTitle(copyList)
  }

  return (
    <div className="App">
      <Menu>
        <h4>Menu</h4>
      </Menu>
      <button onClick={changeTitle}>
        ⭐️
      </button>
      <button onClick={() => {
        let copyListSort = [...title]

        setTitle(copyListSort.sort())
      }}>
        👉
      </button>
      {title.map((titleText, i) => {
        return (<BlogPost key={i}>

          <h4 onClick={() => {
            if (!open) {
              setOpen(true)
            }
            setPage(i)
          }}
          >{i + 1}.{titleText}

          </h4>
          <span onClick={() => {
            let copyLike = [...numlike]
            copyLike[i] += 1
            setNumlike(copyLike)
          }}>
            👍   {numlike[i]}
          </span>
          <button onClick={() => {
            let copyList = [...title]
            copyList.splice(i, 1);
            setTitle(copyList)
          }} >삭제~~ {textInput}</button>
          <p>{date[0]}</p>

        </BlogPost>)
      })}
      <input onChange={(e) => {
        setTextInput(e.target.value);
        console.log(textInput)
      }} />
      <button onClick={() => {
        if (textInput == "") {

        } else {
          let copyList = [...title];
          copyList.unshift(textInput)
          setTitle(copyList)
        }

      }}>입력</button>
      {open ? <Modal color={"orange"} title={title} changeTitle={changeTitle} page={page} /> : null}



    </div >
  );
}

export default App;
