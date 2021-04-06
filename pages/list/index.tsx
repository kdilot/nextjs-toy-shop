import Divider from '@src/components/divider'
import Header from '@src/components/header'
import styled from 'styled-components'

const List: React.FC = () => {
  return (
    <>
      <Header title="MINT" />
      <TopGoods>top</TopGoods>
      <Divider />
      <BottomGoods>bottom</BottomGoods>
    </>
  )
}

const TopGoods = styled.article`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`

const BottomGoods = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default List
