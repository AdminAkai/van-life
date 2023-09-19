import { FC } from 'react'

import FilterButton from 'src/components/FilterButton'

import { IVanType } from 'src/server'

import {
  ProductCardContainer,
  ProductDetail,
  ProductDetails,
  ProductImage,
  ProductPrice,
} from './styledComponent'

interface IProductCardProps extends IVanType {
  index: number
}

const ProductCard: FC<IProductCardProps> = ({
  name,
  price,
  imageUrl,
  type,
  index,
}) => {
  return (
    <ProductCardContainer $first={index === 0}>
      <ProductImage src={imageUrl} />
      <ProductDetails>
        <ProductDetail>{name}</ProductDetail>
        <ProductDetail>
          ${price}
          <ProductPrice>/day</ProductPrice>
        </ProductDetail>
      </ProductDetails>
      <FilterButton type={type} />
    </ProductCardContainer>
  )
}

export default ProductCard
