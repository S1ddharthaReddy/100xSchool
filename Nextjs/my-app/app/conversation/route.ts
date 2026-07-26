import { NextRequest } from "next/server"
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest){

    const body = await req.json();

    const response = await prisma.conversation.create({
        data: {
            initialPrompt: body.initialPrompt
        }
    })

    await prisma.message.create({
        data: {
            conversationId: response.id,
            message: body.initialPrompt,
            role: "User"
        }
    })

    return Response.json({
        message: "Conversation Created",
        id: response.id
    })
}

// export async function GET(req: NextRequest){
//     const messageId = req.nextUrl.searchParams;
//     return Response.json({
//         message: "Get request is received"
//     })
// }