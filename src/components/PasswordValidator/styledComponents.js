// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #24263c;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const SubContainer = styled.div`
  background-color: #475569;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 0px 2px 0px #434451;
  padding: 20px;
  border: 0;
  border-radius: 12px;
`
export const HeadingElement = styled.h1`
  color: #ffffff;
  font-size: 32px;
  font-family: 'Roboto';
  font-weight: bold;
  text-align: center;
`
export const ParagraphElement = styled.p`
  color: #f8fafc;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  text-align: center;
`

export const InputElement = styled.input`
  width:240px;
  padding: 10px;
`

export const ErrorElement = styled.p`
  color: #ef4444;
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 400;
  text-align: center;
`
