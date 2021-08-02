import React from 'react'
import {
  TextBlock, TextItem,
  Wrapper
} from 'styles/TextOutput'

interface IProps {
  data: string[]
}

const TextOutput: React.FC<IProps> = (props) => {
  return (
    <Wrapper>
      <TextBlock>
        {
          props.data.map((t, i) => (
            <TextItem key={t + i}>
              { t }
            </TextItem>
          ))
        }
      </TextBlock>
    </Wrapper>
  )
}

export default TextOutput