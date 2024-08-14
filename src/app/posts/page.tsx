import React from 'react';

function Page() {
    const response = fetch("'https://dummyjson.com/posts?limit=10'").then((res)=>res.json())
    return (
        <div>
            All Posts
            <div>
                {response.map((post:any)=>(
                    <div key={post.id}>{post.title}</div>
                ))}

            </div>

        </div>
    );
}

export default Page;