import React from 'react'
import styled from 'styled-components'

interface Props {
  title?: string
  isBack?: boolean
  right?: any
}

const Header: React.FC<Props> = ({ title, isBack }) => {
  return (
    <Wrapper isBack={isBack}>
      {isBack && <Left>back</Left>}
      <Title>{title}</Title>
    </Wrapper>
  )
}

const Wrapper = styled.header<any>`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
  display: flex;
  justify-content: ${(props) => (props.isBack ? 'space-between' : 'center')};
  align-items: center;
`
const Title = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Left = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
`

export default Header
