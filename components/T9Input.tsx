import React from 'react'
import {
  Wrapper,
  Input,
  DeleteButton, Row
} from 'styles/T9Input'

interface IProps {
  value: string
  onDelete: () => void
}

const T9Input: React.FC<IProps> = (props) => {
  return (
    <Wrapper>
      <Row>
        <Input>{ props.value }</Input>
        <DeleteButton onClick={props.onDelete}>Delete</DeleteButton>
      </Row>
    </Wrapper>
  )
}

export default T9Input