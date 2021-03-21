import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@src/reducers'
import { test } from '@reducers/test'
import styled from 'styled-components'

const Main = () => {
  const dispatch = useDispatch()
  const { text, loading } = useSelector((state: RootState) => state.test)

  useEffect(() => {
    dispatch(test())
  }, [])

  return (
    <Wrapper>
      <Title>Next.js</Title>
      <Contents>{loading ? 'Loading...' : text}</Contents>
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
  font-size: 50px;
`

const Contents = styled.div`
  font-size: 20px;
  font-weight: 500;
`
export default Main
