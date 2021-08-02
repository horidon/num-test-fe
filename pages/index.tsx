import { useEffect, useState } from 'react'
import { useApolloClient } from '@apollo/client'
import * as Queries from 'gql/queries'
import {
  Wrapper
} from 'styles/components'
import T9Keyboard from 'components/T9Keyboard'
import T9Input from 'components/T9Input'
import TextOutput from 'components/TextOutput'

interface IWord {
  word: string
}

export default function Home() {
  const client = useApolloClient()

  const [inputValue, updateInputValue] = useState<string>('')
  const [match, updateMatch] = useState<string[]>([])
  const [words, updateWords] = useState<IWord[]>([])

  useEffect(() => {
    if(!inputValue) return

    client.query({ query: Queries.GET_MATCH, variables: { num: inputValue } })
      .then(({ data }) => {
        const nextMatch = Array.isArray(data?.matches?.match) ? data.matches.match : []
        updateMatch(nextMatch)
      })
      .catch((err) => console.error('GQL::Failed to get match', inputValue, err))

    client.query({ query: Queries.GET_WORDS, variables: { num: inputValue } })
      .then(({ data }) => {
        const nextWords: IWord[] = Array.isArray(data?.words) ? data.words : []
        updateWords(nextWords)
      })
      .catch((err) => console.error('GQL::Failed to get words', inputValue, err))
  }, [inputValue])

  const onT9Change = (v: string) => {
    const nextValue = inputValue + v
    updateInputValue(nextValue)
  }

  const onDelete = () => {
    const nextValue = inputValue.slice(0, inputValue.length - 1)
    updateInputValue(nextValue)

    if(nextValue === '') {
      updateMatch([])
      updateWords([])
    }
  }


  return (
    <Wrapper>
      <T9Input onDelete={onDelete} value={inputValue} />
      <T9Keyboard onChange={onT9Change} />

      <TextOutput data={match} />
      <TextOutput data={words.map(i => i.word)} />
    </Wrapper>
  )
}
