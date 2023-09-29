import { NextResponse } from "next/server";
import { prisma } from "@/utlils/prisma";

export async function PATCH(req, {params}){
    const {content} = await req.json()
    const {id} = params

    try {
        const updateTodos = await prisma.todos.update({
            where:{
                id
            }, data: {
                content,
            },
        })
        return NextResponse.json({data: updateTodos ,message:"Todos Updated succesfully"},{status: 201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"Error"},{status:500})
    }
    
}

export async function DELETE(req, {params}){
    const {id} = params

    try {
        const deleteTodos = await prisma.todos.delete({
            where:{
                id
            }, 
        })
        return NextResponse.json({data: deleteTodos ,message:"Todos Deleted succesfully"},{status: 201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"Error"},{status:500})
    }
    
}