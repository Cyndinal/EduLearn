
import React from 'react';
import createPost from "@/actions/action";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
async function Page() {
    return (
        <main className={'text-center'}>
            <p>Create Post</p>
            <form

                action={createPost}
                className={'mt-8'}>
                <input className={'outline-none p-4 rounded-md text-black '}
                       type={'text'} name={'title'}
                       placeholder={'Title for new post'}

                       required />
                <div className={"mt-8 text-black  "}>
                    <textarea className={'w-[400px] outline-none rounded-md '}
                              name={"content"}
                              placeholder={'Enter post content'}>
                </textarea>
                </div>

                <button className={'space-x-5 p-2 m-4 bg-blue-800 rounded'}
                        type={'submit'}>
                    Submit
                </button>
            </form>

            <LogoutLink>LogOut</LogoutLink>
        </main>
    );
}

export default Page;