import { NextResponse } from "next/server";
import { prisma } from "@/utlils/prisma";

export async function GET(){
    const todo = await prisma.todos.findMany();
    try {
        return NextResponse.json({data: todo ,message:"API berjalan sukses"},{status: 201})
    } catch (error) {
        return NextResponse.json({message:"Error"},{status:500})
    }
    
}