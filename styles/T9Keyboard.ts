import styled from 'styled-components'

export const Wrapper = styled.div`
  
`

export const NumButton = styled.div`
  color: #656565;
  border: 1px solid #656565;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  vertical-align: middle;
  margin: 10px 10px;
  cursor: pointer;
  opacity: .8;
  transition: all .3s ease;
  user-select: none;

  &:hover {
    opacity: 1;
    color: #e33535;
    border-color: #e33535;
  }
`

export const NumButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`