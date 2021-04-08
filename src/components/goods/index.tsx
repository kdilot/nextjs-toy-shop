import styled from 'styled-components'

interface Props {
  type?: 'row' | 'column'
}

const Goods: React.FC<Props> = ({ type = 'row' }) => {
  return type === 'row' ? (
    <RowWrapper>
      <RowImage data-font="eng">image</RowImage>
      <RowTitle>제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목</RowTitle>
      <RowPrice>
        <span data-font="num">5,000</span>
        <span data-font="num">4,600</span>
      </RowPrice>
    </RowWrapper>
  ) : (
    <ColumnWrapper>
      <ColumnImage data-font="eng">image</ColumnImage>
      <ColumnTextWrapper>
        <ColumnTitle>제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목</ColumnTitle>
        <ColumnPrice>
          <span data-font="num">5,000</span>
          <span data-font="num">4,600</span>
        </ColumnPrice>
      </ColumnTextWrapper>
    </ColumnWrapper>
  )
}

const RowWrapper = styled.article`
  min-width: 170px;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;

  & ~ & {
    margin-left: 0.5rem;
  }
`

const RowImage = styled.div`
  width: 100%;
  height: 100px;
  background: ${(props) => props.theme.color[100]};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: ${(props) => props.theme.color[300]};
  border-radius: 4px;
`

const RowTitle = styled.p`
  padding: 0;
  margin: 0;
  font-size: 0.8rem;
  width: 100%;
  max-height: 28px;
  overflow: hidden;
  margin: 0.2rem 0;
`

const RowPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 0.7rem;

  span {
    color: ${(props) => props.theme.color[900]};
  }
  span:first-child {
    text-decoration: line-through;
    font-size: 0.7rem;
    opacity: 0.5;
    margin-right: 0.1rem;
  }
`

const ColumnWrapper = styled.article`
  width: 100%;
  min-height: auto;
  display: flex;
  flex-direction: row;

  & ~ & {
    margin-top: 0.5rem;
  }
`

const ColumnImage = styled.div`
  min-width: 75px;
  min-height: 75px;
  background: ${(props) => props.theme.color[100]};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: ${(props) => props.theme.color[300]};
  border-radius: 4px;
`

const ColumnTextWrapper = styled.article`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 0.5rem;
`

const ColumnTitle = styled.p`
  padding: 0;
  margin: 0;
  font-size: 0.8rem;
  width: 100%;
  max-height: 28px;
  overflow: hidden;
`

const ColumnPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 0.7rem;
  width: 100%;

  span {
    color: ${(props) => props.theme.color[900]};
  }
  span:first-child {
    text-decoration: line-through;
    font-size: 0.7rem;
    opacity: 0.5;
    margin-right: 0.1rem;
  }
`

export default Goods
