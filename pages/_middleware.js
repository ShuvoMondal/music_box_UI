import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req){
    const token = await getToken({req, secret: process.env.JWT_SECRET});
    const { pathname } = req.nextUrl;
    console.log(token);
    console.log(pathname);
    if(pathname.includes("/api/auth") || token){
        return NextResponse.next();
        
    }

    if(pathname.includes("/login")){
        return NextResponse.next();
    }

    if(!token){
        return NextResponse.redirect(`http://localhost:3000/login`);
    }

}