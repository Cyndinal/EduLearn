import React from 'react';
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

async function GetUser() {
    const {getUser} = getKindeServerSession()
    const user = await getUser()
    if(user?.username === null){
        return user.email?.split("@")[0]
    }
    return (
        <div className={'text-xs'}><span>{user?.email}</span></div>
    );
}

export default GetUser;