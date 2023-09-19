import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 1.5rem;
`

export const ProductImage = styled.img`
  border-radius: 4px;
  height: 15rem;
  width: 15rem;
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
  font-size: 1rem;
`
