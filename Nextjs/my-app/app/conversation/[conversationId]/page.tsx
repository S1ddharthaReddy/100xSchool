

import { prisma } from "@/lib/db";
// import { useParams } from "next/navigation"

export default async function({
    params
}: {
    params: {
        conversationId: string
    }
}) {

    // const params = useParams<{conversationId: string}>()

    const resolvedParams = await params;
    const conversationId = resolvedParams.conversationId;

    const messages = await prisma.message.findMany({
        where: {
            conversationId
        }
    })

    return (
        <div className="h-screen w-screen flex justify-between flex-col">
            <div className="flex-1">
                {messages.map((message)=> (
                    <div key={message.id} className="border rounded">{message.message}</div>
                ))}
            </div>
            <div className="flex justify-center">
                <div className="border rounded">
                    <input type="text" placeholder="Start typing..." className="w-lg p-8"  />
                    
                </div>
                <button className="pr-4 pl-4 cursor-pointer">Send</button>
            </div>
        </div>
    )
} 