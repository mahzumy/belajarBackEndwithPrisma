import { NextResponse } from "next/server";
import { prisma } from "@/utlils/prisma";

export async function GET(req){
    const {searchParams} = new URL(req.url)
    const batch = searchParams.get("batch")

    try {
        if(batch){
            const users = await prisma.user.findMany({
                where:{
                    batch,
                }
            })
            return NextResponse.json({data: users ,message:"user fetched succesfully"},{status: 201})
        } else {
            const users = await prisma.user.findMany({
                select:{
                    id: true,
                    name: true,
                    //post : true,
                    post:{
                        select:{
                            title: true,
                            slug: true,
                            content: true
                        }
                    }
                }
                // include:{
                //     post:{
                //         select:{
                //             title: true,
                //             slug: true,
                //             content: true
                //         },
                //     },
                // }
            })
            return NextResponse.json({data: users ,message:"user fetched succesfully"},{status: 201})
        }
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"Error"},{status:500})
    }
}