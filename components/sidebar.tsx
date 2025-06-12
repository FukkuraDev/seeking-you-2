import Link from "next/link";
import SidebarSpacer from "./sidebarspacer";

interface SideBarProps {
    avatarURL: string
    userName: string
}

export default function Sidebar({ avatarURL, userName }: SideBarProps) {


    return (
        <aside className="w-64 bg-white shadow-md p-4 space-y-6 justify-between text-gray-600">
            <div className="flex items-center space-x-3">
                <img
                    src={avatarURL || "/avatar.jpg"}
                    alt="avatar"
                    className=" w-11  h-11 rounded-full  shadow-md"
                />
                <div className="text-lg font-semibold">{userName}</div>
            </div>

            <SidebarSpacer />

            <nav className="space-y-1">
                <Link
                    href="/protected"
                    className="block px-4 py-2 rounded-md text-sm font-medium hover:bg-rose-100 hover:text-rose-600 transition-colors"
                >
                    🧵 Feed
                </Link>

                <Link
                    href="/protected/dashboard"
                    className="block px-4 py-2 rounded-md text-sm font-medium hover:bg-rose-100 hover:text-rose-600 transition-colors"
                >
                    📈 Dashboard
                </Link>

            </nav>

            <SidebarSpacer />

            <div>
                <h4 className="font-semibold text-sm text-gray-800">Wallets</h4>
                <div className="mt-2 space-y-2 text-sm">
                    <div className="bg-pink-500 text-white p-3 rounded-lg">
                        Gallant Coin
                        <br />
                        <small className="text-white/80">0.0000129</small>
                    </div>
                    <div className="bg-pink-400 text-white p-3 rounded-lg">
                        Bytecoin
                        <br />
                        <small className="text-white/80">12.00129</small>
                    </div>
                </div>
            </div>
        </aside>

    );
}
