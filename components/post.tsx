interface PostProps {
    user: string;
    time: string;
    text: string;
    image?: string;
    isComment?: boolean;
}

export default function Post({ user, time, text, image, isComment = false }: PostProps) {
    return (
        <div className={`bg-white p-4 rounded-lg shadow text-gray-600 hover:shadow-lg transition-shadow ${isComment ? 'w-2/3' : ''}`}>
            <div className="flex items-center justify-between space-x-2 mb-2 text-gray-600">
                <div className="flex items-center space-x-2 mb-2">
                    <img src={image || '/avatar.jpg'} alt="avatar" className="w-8 h-8 rounded-full" />
                    <div>
                        <div className="font-semibold">{user}</div>
                        <div className="text-sm text-gray-500">Posted {time}</div>
                    </div>
                </div>
                <div >
                    ...
                </div>
            </div>
            <p>{text}</p>
            {!isComment && (
                <div className="flex justify-around mt-4 text-pink-600">
                    <button>❤️ Like</button>
                    <button>💬 Comment</button>
                    <button>🎁 Gift</button>
                </div>
            )}
        </div>
    );
}