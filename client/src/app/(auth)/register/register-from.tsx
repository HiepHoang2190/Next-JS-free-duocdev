"use client"
import React from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RegisterBody, RegisterBodyType } from "@/schemaValidations/auth.schema";
import { error } from "console"
import envConfig from "@/config"
import authApiRequest from "@/app/apiRequests/auth"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
// import { useAppContext } from "@/app/AppProvider"
import { clientSessionToken } from "@/lib/http"

const RegisterForm = () => {
  const { toast } = useToast()
  const router = useRouter()
  // const  { setSessionToken } = useAppContext()
  
  const form = useForm<RegisterBodyType>({
    resolver: zodResolver(RegisterBody),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
  });
// 2. Define a submit handler.
  async function onSubmit(values: RegisterBodyType) {
  
    
 
    try {
      const result = await authApiRequest.register(values)
      // console.log('page_register_form result',result)
      toast({    
        description:result.payload.message
      })
      const resultFromNextServer = await authApiRequest.auth({sessionToken: result.payload.data.token})
  
      // console.log("resultFromNextServer", resultFromNextServer)
      // setSessionToken(result.payload.data.token)
   
      router.push('/me')
    } catch (error: any) {
      //  console.log("error", error)
       const errors = (error as any).payload.errors as {field: string,
        message: string }[]
        const status = error.status as number
        if (status === 422) {
          errors.forEach((error)=> {
            form.setError(error.field as 'email' | 'password', {
              type: 'server',
              message: error.message
            })
          })
        } else {
          toast({
            title: 'Lỗi',
            description:error.payload.message,
            variant: 'destructive'
          })
        }

    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit,
          (error) => {
            console.log('page register form',error)
          }

        )} 
        className="space-y-2 max-w-[600px] flex-shrink-0 w-full"
        noValidate
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
             <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" type="email" {...field}  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
             <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mật khẩu</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
             <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nhập lại mật khẩu</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className='!mt-8 w-full'>Đăng ký</Button>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm
