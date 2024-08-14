import React, {Suspense} from 'react';
import Link from "next/link";
import Postlist from "@/app/libs/Postlist";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";



async function Page() {

    const {isAuthenticated} = getKindeServerSession()
    const isUserAuthenticated = await isAuthenticated();
    if(!isUserAuthenticated){
        redirect("/api/auth/login?post_login_redirect_url=/");
    }

    return (
            <div className={'flex flex-col m-auto'}>
                <Suspense fallback={"Loading..."}>
                <Postlist/>
                </Suspense>
            </div>

    );
}

export default Page;