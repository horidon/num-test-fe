import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`

export const Input = styled.div`
  height: 50px;
  line-height: 50px;
  width: 300px;
  border: 1px solid #656565;
  vertical-align: middle;
  text-align: center;
  overflow-x: auto;
  overflow-y: hidden;
`

export const DeleteButton = styled.div`
  height: 50px;
  padding: 0 20px;
  line-height: 50px;
  vertical-align: middle;
  text-align: center;
  
  background-color: #e33535;
  border-radius: 7px;
  margin-left: 5px;
  color: #ffffff;
  cursor: pointer;
  opacity: .7;
  transition: all .3s ease;
  user-select: none;

  &:hover {
    opacity: 1;
  };
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`