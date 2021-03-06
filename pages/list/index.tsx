import Divider from '@src/components/divider'
import Goods from '@src/components/goods'
import Header from '@src/components/header'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

const List: React.FC = () => {
  const [list, setList] = useState<number>(10)
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      setList(list + 10)
    }
  }, [inView])
  return (
    <>
      <Header title="MINT" />
      <TopGoodsWrapper>
        <TopGoods>
          <Goods />
          <Goods />
          <Goods />
          <Goods />
          <Goods />
          <Goods />
          <Goods />
        </TopGoods>
      </TopGoodsWrapper>
      <Divider />
      <BottomGoods>
        {new Array(list).fill(0).map((_, index) => (
          <Goods key={`goods_${index}`} type="column" />
        ))}
        <div ref={ref} />
      </BottomGoods>
    </>
  )
}

const TopGoodsWrapper = styled.article`
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 50px;
  padding: 0 0.5rem;
  padding-top: 0.5rem;
`

const TopGoods = styled.div`
  display: flex;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`

const BottomGoods = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  padding: 0 0.5rem;
  padding-top: 0.5rem;
`

export default List
