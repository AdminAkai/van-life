import { FC } from 'react'

import FilterButton from 'src/components/FilterButton'

import { IVanType } from 'src/server'

import {
  ProductCardContainer,
  ProductDetail,
  ProductDetails,
  ProductImage,
} from './styledComponent'

interface IProductCardProps extends IVanType {}

const ProductCard: FC<IProductCardProps> = ({
  name,
  price,
  imageUrl,
  type,
}) => {
  return (
    <ProductCardContainer>
      <ProductImage src={imageUrl} />
      <ProductDetails>
        <ProductDetail>{name}</ProductDetail>
        <ProductDetail>
          ${price}
          <span style={{ fontSize: '0.8rem', fontWeight: 500 }}>/day</span>
        </ProductDetail>
      </ProductDetails>
      <FilterButton type={type} />
    </ProductCardContainer>
  )
}

export default ProductCard
