import http from '@/lib/http'
import { CreateProductBodyType, ProductListResType, ProductResType } from "@/schemaValidations/product.schema"

export const productApiRequest = {
  getList:()=> http.get<ProductListResType>('/products'),
  getDetail:(id: number)=> http.get<ProductListResType>(`/products/${id}`),
  create: (body: CreateProductBodyType) => http.post<ProductResType>('/products',body),
  uploadImage: (body: FormData) => http.post<{
    message: string
    data: string
  }>('/media/upload',body)
}

export default productApiRequest