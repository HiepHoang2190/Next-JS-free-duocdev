import { decodeJWT } from "@/lib/utils"

// type PayloadJWT = {
//   iat: number
//   exp: number
//   tokenType: string
//   userId: number
// }

export async function POST(request: Request) {
  const body = await request.json()
  // console.log(res)
  const sessionToken = body.sessionToken as string
  const expiresAt = body.expiresAt as string
  if(!sessionToken) {
    return Response.json(
      {message: 'Không nhận được session token'},
      {
        status: 400
      }
    )
  }

  // const payload = decodeJWT<PayloadJWT>(sessionToken)
  // const expiredDate = new Date(payload.exp * 1000).toUTCString()
  // do xài theo cách lấy ngày hết hạn của session token nên ko cần dùng cách lấy ngày hết hạn trong jswebtoken ở trên
  const expiredDate = new Date(expiresAt).toUTCString()
  return Response.json(body, {
    status: 200,
    headers:{ 'Set-Cookie': `sessionToken=${sessionToken}; Path=/; HttpOnly; Expires=${expiredDate}; SameSite=Lax; Secure` }
  })

}