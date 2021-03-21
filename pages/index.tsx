import { useEffect } from 'react'
import styled from 'styled-components'
import Router from 'next/router'

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      Router.push('/main')
    }, 3000)
  }, [])

  return (
    <Wrapper>
      <Title>INTRO</Title>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  user-select: none;
`

const Title = styled.h1`
  font-size: 10rem;
`
