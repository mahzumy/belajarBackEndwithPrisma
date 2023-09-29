import { NextResponse } from "next/server";
import { prisma } from "@/utlils/prisma";
import bcrypt from "bcrypt"

export async function POST(req){
    const { name, email, password } = await req.json();

    try {
        const hashedPassword = await bcrypt.hash(password,10)
        await prisma.member.create({
            data: { 
                name,
                email,
                password: hashedPassword
            }
        })
        return NextResponse.json({message:"Member Created Succesfully"},{status:201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"Error"},{status:500})
    }
}