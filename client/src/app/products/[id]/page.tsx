import productApiRequest from '@/app/apiRequests/product'
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
      {product && <div>{product.name}</div>}
    </div>
  )
}
