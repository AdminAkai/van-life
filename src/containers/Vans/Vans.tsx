import { FC, useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'

import { IVanType } from 'src/server'

import { VansContainer, VansHeader, VansList } from './styledComponents'
import ProductCard from 'src/components/ProductCard'

const Vans: FC = () => {
  const [data, setData] = useState<IVanType[]>([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data }: AxiosResponse = await axios.get('/api/vans')
        setData(data.vans)
      } catch (error) {
        console.error(error)
      }
    }

    getData()
  }, [])

  return (
    <VansContainer>
      <VansHeader>Explore our van options</VansHeader>
      <VansList>
        {data.map((van, i) => (
          <ProductCard key={`${van.name} - ${van.id}`} {...van} index={i} />
        ))}
      </VansList>
    </VansContainer>
  )
}

export default Vans
