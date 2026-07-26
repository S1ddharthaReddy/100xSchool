'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function ChatBox() {

    const [message, setMessage] = useState("");
    const router = useRouter();

    return (
        <div>
            <div className="flex justify-center">
                <span className="border rounded">
                    <input onChange={(e) => {
                        setMessage(e.target.value)
                    }} type="text" placeholder="Start typing..." className="w-lg p-8"  />
                    <button className="pr-4 pl-4 cursor-pointer" onClick={async ()=> {
                        const response = await axios.post('/conversation', {
                            initialPrompt: message
                        })
                        router.push(`/conversation/${response.data.id}`)
                        // alert("Your new conversation has been created" + response.data.id)
                    }}>Send</button>
                </span>
            </div>
            
        </div>  
    )
}