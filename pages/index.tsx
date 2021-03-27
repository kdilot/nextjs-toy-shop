import { useEffect, useState } from 'react'
import styled from 'styled-components'
import RoutÎer from 'next/router'

export default function Home() {
  const [range, setRange] = useState<any>('0%')
  useEffect(() => {
    setTimeout(() => {
      setRange('100%')
    }, 1000)
  }, [])

  return (
    <Wrapper>
      <Title data-text="MINT" range={range} data-font="eng">
        MINT
      </Title>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  user-select: none;
`

const Title = styled.div<any>`
  font-size: 7rem;
  font-weight: bold;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #000;

  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    color: red;
    width: ${(props) => props.range};
    height: 100%;
    overflow: hidden;
    transition: all 3s ease-in;
  }
`
