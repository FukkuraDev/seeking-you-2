"use client"
import { useState, useRef, useEffect } from "react";

export default function CreatePost() {
    const [text, setText] = useState("");
    const textareaRef = useRef(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [text]);

    return (
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow ">
            <div className="flex space-x-3">
                <img src="https://placehold.jp/150x150.png" alt="avatar" className="w-10 h-10 rounded-full" />
                <textarea
                    ref={textareaRef}
                    placeholder="What's on your mind, Paul?"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="flex-1 p-2 border border-rose-600 text-white bg-rose-600 placeholder-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none overflow-hidden"
                    rows={1}
                />
            </div>
            <button className="mt-4 flex items-center text-sm text-gray-600">
                📹 Photo/video
            </button>
        </div>
    );
}