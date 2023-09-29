import { NextResponse } from "next/server";
import { prisma } from "@/utlils/prisma";

export async function GET(){
    
    try {
        const todo = await prisma.todos.findMany();
        return NextResponse.json({data: todo ,message:"API berjalan sukses"},{status: 200})
    } catch (error) {
        return NextResponse.json({message:"Error"},{status:500})
    }
    
}

export async function POST(req){
    const {content} = await req.json()

    try {
        const createTodos = await prisma.todos.create({
            data: {
                content,
            },
        })
        return NextResponse.json({data: createTodos ,message:"Todos Created succesfully"},{status: 201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"Error"},{status:500})
    }
    
}