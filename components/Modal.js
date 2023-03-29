import React from 'react'
import styled from 'styled-components'



const Modal = styled.div`
margin-top: 20px ;
padding : 20px;
background: #eee ;
text-align: left ;
`

function Modal() {
  return (
    <>
      <h4>제목</h4>
      <p>날짜</p>
      <p>내용</p>
    </>
  )
}

export default Modal