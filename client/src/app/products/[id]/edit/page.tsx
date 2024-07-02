import productApiRequest from '@/app/apiRequests/product'
import ProductAddForm from '@/app/products/_components/product-add-form'
import React from 'react'

export default async function ProductEdit({params}: {params: {id:string}}) {
  // console.log(params);
  let product = null
  try {
    const {payload} = await productApiRequest.getDetail(Number(params.id))
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
