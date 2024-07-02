"use client"
import React, { useState } from "react"

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
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LoginBody, LoginBodyType } from "@/schemaValidations/auth.schema"

import envConfig from "@/config"
import { useToast } from "@/components/ui/use-toast"
// import { useAppContext } from "@/app/AppProvider"
import authApiRequest from "@/app/apiRequests/auth"
import { useRouter } from "next/navigation"

import { handleErrorApi } from "@/lib/utils"
import { set } from "zod"
import { AccountResType, UpdateMeBody, UpdateMeBodyType } from "@/schemaValidations/account.schema"
import accountApiRequest from "@/app/apiRequests/account"

type Profile = AccountResType['data']
const ProfileForm = ({profile}: {
  profile:Profile
}) => {
  const { toast } = useToast()

  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const form = useForm<UpdateMeBodyType>({
    resolver: zodResolver(UpdateMeBody),
    defaultValues: {
      name: profile.name,
    },
  });
  // 2. Define a submit handler.
  async function onSubmit(values: UpdateMeBodyType) {
    if(loading) return
    setLoading(true)
    try {
      const result = await accountApiRequest.updateMe(values)
    
      
      toast({    
        description:result.payload.message
      })
      router.refresh()
 
    } catch (error: any) {
      //  console.log("error", error)
      handleErrorApi({
        error,
        setError: form.setError
      })

    } finally {
      setLoading(false)
    }
    
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, (error) => {
            console.log('page_login-form',error);
          })}
          className="space-y-2 max-w-[600px] flex-shrink-0 w-full"
          noValidate
        >
         
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" type="email" value={profile.email} readOnly />
                </FormControl>
                <FormMessage />
          
           
         
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="!mt-8 w-full">
           Cập nhật
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ProfileForm
