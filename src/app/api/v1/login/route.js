import { NextResponse } from "next/server";
import { prisma } from "@/utlils/prisma";
import bcrypt from "bcrypt";

export async function POST(req){
    const { email, password } = await req.json();

    try {
        const findUser = await prisma.member.findUnique({
            where: {
                email
            }
        })

        //check if user exist
        if(!findUser){
            return NextResponse.json({message:"User not found"})
        }

        //compare password
        const hashedPass = findUser.password;
        const isPasswordValid = await bcrypt.compare(password, hashedPass);

        if(!isPasswordValid){
            return NextResponse.json({message:"Invalid Password"});
        }
       
        const payLoad = {
            name: findUser.name,
            email: findUser.email
        }

        return NextResponse.json({data : payLoad});
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"Error"},{status:500})
    }
}