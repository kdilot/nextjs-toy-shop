import styled from 'styled-components'

const Divider = () => {
  return <Wrapper></Wrapper>
}

const Wrapper = styled.div`
  width: 100%;
  height: 10px;
  background: ${(props) => props.theme.color[200]};
`

export default Divider
