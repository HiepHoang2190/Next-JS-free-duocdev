import productApiRequest from "@/app/apiRequests/product";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

export default async function ProductListPage() {
  const { payload } = await productApiRequest.getList();
  const productList = payload.data;
  // console.log('productlist',productList)
  return (
    <div className="space-y-3">
      <h1>Product List</h1>
      <Link href={'/products/add'}>
      <Button variant={'secondary'}>
      Thêm sản phẩm
      </Button>
       
      </Link>
      <div className="space-y-5">
        {productList.map((product) => (
          <div key={product.id} className="flex space-x-4">
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.image}
                alt={product.name}
                width={180}
                height={180}
                className="w-32 h-32 object-cover"
              />
            </Link>

            <h3>{product.name}</h3>
            <div>{product.price}</div>
            <div className="flex space-x-2">
              <Link href={`/products/${product.id}`}>
                <Button variant={"outline"}>Edit</Button>
              </Link>

              <Button variant={"destructive"}>Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
