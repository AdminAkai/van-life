import styled from 'styled-components'

export const ProductCardContainer = styled.div<{ $first: boolean }>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  margin-right: 1.5rem;
  margin-left: ${({ $first }) => ($first ? '0px' : '1.5rem')};

  @media screen and (max-width: 700px) {
    font-size: 0.75rem;
    margin-left: 0;
  }
`

export const ProductImage = styled.img`
  border-radius: 4px;
  height: 15rem;
  width: 15rem;

  @media screen and (max-width: 700px) {
    height: 9rem;
    width: 9rem;
  }
`

export const ProductDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

export const ProductDetail = styled.h1`
  font-size: 1.25rem;

  @media screen and (max-width: 700px) {
    font-size: 0.75rem;
  }
`

export const ProductPrice = styled.h1`
  font-size: 1rem;
  font-weight: 500;

  @media screen and (max-width: 700px) {
    font-size: 0.7rem;
  }
`
