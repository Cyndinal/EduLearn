import React from 'react';
import Link from "next/link";
import {PrismaClient} from "@prisma/client";


async function Postlist() {
    const prisma = new PrismaClient();
    await new Promise((resolve, reject) => {setTimeout(resolve,3000)})
    // const response =await  fetch("https://dummyjson.com/posts?limit=10",{
    //     next:{revalidate:30}
    // })
    //     .then((res) => res.json())

    const posts = await prisma.post.findMany()

    return (
        <div>
            <div className={'text-green-500 flex items-center justify-center font-bold text-3xl mb-4'}>Post Topics</div>
            {posts.map((post:string | number | any )=>(
                <div key={post.id}
                     className={'flex item-center justify-center mt-2'}>
                    <Link href={"/posts/" + post.id}>{post.title}</Link>

                </div>
            ))}
        </div>
    );
}

export default Postlist;