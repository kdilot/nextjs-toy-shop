import Header from '@src/components/header'
import Wrapper from '@src/components/layoutWrapper'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

export default function Home() {
  const [range, setRange] = useState<any>('0%')
  useEffect(() => {
    setTimeout(() => {
      setRange('100%')
    }, 1000)
  }, [])

  return (
    <Wrapper>
      <Header title="TEST" isBack />
      <Title data-text="MINT" range={range} data-font="eng">
        MINT
      </Title>
    </Wrapper>
  )
}

// const Wrapper = styled.section`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   height: 100%;
//   user-select: none;
// `

const Title = styled.div<any>`
  font-size: 7rem;
  font-weight: bold;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: ${(props) => props.theme.color[300]};

  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 1px;
    color: ${(props) => props.theme.color[500]};
    width: ${(props) => props.range};
    height: 100%;
    overflow: hidden;
    transition: all 3s ease-in;
  }
`
