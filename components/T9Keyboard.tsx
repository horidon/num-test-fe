import React from 'react'
import {
  NumButtonRow,
  NumButton,
  Wrapper
} from 'styles/T9Keyboard'

interface IProps {
  onChange: (v: string) => void
}

const T9Keyboard: React.FC<IProps> = (props) => {
  return (
    <Wrapper>
      <NumButtonRow>
        <NumButton onClick={() => props.onChange('1')}>1</NumButton>
        <NumButton onClick={() => props.onChange('2')}>2</NumButton>
        <NumButton onClick={() => props.onChange('3')}>3</NumButton>
      </NumButtonRow>

      <NumButtonRow>
        <NumButton onClick={() => props.onChange('4')}>4</NumButton>
        <NumButton onClick={() => props.onChange('5')}>5</NumButton>
        <NumButton onClick={() => props.onChange('6')}>6</NumButton>
      </NumButtonRow>

      <NumButtonRow>
        <NumButton onClick={() => props.onChange('7')}>7</NumButton>
        <NumButton onClick={() => props.onChange('8')}>8</NumButton>
        <NumButton onClick={() => props.onChange('9')}>9</NumButton>
      </NumButtonRow>

      <NumButtonRow>
        <NumButton onClick={() => props.onChange('0')}>0</NumButton>
      </NumButtonRow>
    </Wrapper>
  )
}

export default T9Keyboard