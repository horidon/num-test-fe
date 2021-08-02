import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const TextBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  color: #656565;
  border: 1px solid #656565;
  border-radius: 7px;
  overflow-y: auto;
  overflow-x: hidden;
  
  width: 360px;
  height: 200px;
  padding: 5px;
`

export const TextItem= styled.div`
  width: min-content;
  height: min-content;
  padding: 4px;
  opacity: .8;
  transition: all .3s ease;
  
  &:hover {
    color: #ffffff;
    background-color: #e33535;
    border-radius: 4px;
  }
`