import React from 'react';

async function Page({params}: {params: any}) {

    const response = await fetch(`https://dummyjson.com/posts/${params.id}`,{
        next:{
            revalidate:60
        }
    }).then((res) => res.json());
    return (
        <main className={'flex  flex-col items-center m-auto'}>
            <div className={"flex text-4xl text-center  text-blue-800 font-bold font-mono"}>{response.title}</div>

            <div className={'container mt-5 '}>{response.body}</div>


        </main>
    );
}

export default Page;