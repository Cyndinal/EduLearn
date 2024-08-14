import React, {Suspense} from 'react';
import {PrismaClient} from "@prisma/client";
import {notFound} from "next/navigation";

async function Page({params}: {params: { id:string }}) {
    const prisma = new PrismaClient();

    const response = await prisma.post.findUnique(
        {where: {id:parseInt(params.id)}});
    if(!response){
        return notFound()
    }
    return (
        <Suspense fallback={"Loading feed..."}>
        <main className={'flex  flex-col items-center m-auto'}>
            <div className={"flex text-4xl text-center  text-blue-800 font-bold font-mono"}>
                {response?.title}
            </div>

            <div className={'container mt-5 '}>
                {response?.body}
            </div>


        </main>
        </Suspense>
    );
}

export default Page;