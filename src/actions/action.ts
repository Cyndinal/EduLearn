'use server'

import { PrismaClient } from '@prisma/client'
import {revalidatePath} from "next/cache";
export default async function createPost(formData:FormData){
    const prisma = new PrismaClient()

    const title = formData.get('title') as string
    const body = formData.get("content") as string

   await prisma.post.create({
       data:{
           title: title,
           body: body,
       }
   })
    console.log(title,body)

    revalidatePath('/posts')

}