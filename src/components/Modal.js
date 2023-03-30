import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
margin-top: 20px ;
padding : 20px;
background: ${props => props.color} ;
text-align: left ;
`

function Modal({ color, title, changeTitle, page }) {
  return (
    <Container color={color} >
      <button onClick={
        changeTitle}>여자옷!</button>
      <h4>{title[page]}</h4>
      <p>날짜</p>
      <p>내용</p>
    </Container>
  )
}

export default Modal