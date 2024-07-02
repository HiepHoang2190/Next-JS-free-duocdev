import productApiRequest from '@/app/apiRequests/product'
import ProductAddForm from '@/app/products/_components/product-add-form'
import React from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import { cache } from 'react'
import envConfig from '@/config'

const getDetail = cache(productApiRequest.getDetail)
type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { payload } = await getDetail(Number(params.id))
  const product = payload.data
  const url = envConfig.NEXT_PUBLIC_URL + '/products/' + product.id
  return {
    title: 'Edit sản phẩm: ' + product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      url,
      images: [
        {
          url: product.image
        }
      ]
    },
    alternates: {
      canonical: url
    }
  }
}

export default async function ProductEdit({params}: {params: {id:string}}) {
  // console.log(params);
  let product = null
  try {
    const {payload} = await getDetail(Number(params.id))
    product = payload.data
    
  } catch (error) {
    // console.log(error)

  }

  return (
    <div>
      {!product && <div>Không tìm thấy sản phẩm</div>}
      {product && <ProductAddForm product={product}/>}
    </div>
  )
}
