// Topbar.tsx
import { Bell, ChevronDown } from "lucide-react";

export default function Topbar() {
    return (
        <div className="fixed top-0 left-0 ml-52 w-[calc(100%-13rem)] bg-gray-800 h-16 flex justify-between items-center px-4 shadow-md">
            <div className="text-white text-lg">
                Bienvenue, <span className="text-green-400">Anne Honyme</span> !
            </div>
            <div className="flex items-center">
                <Bell className="text-white mr-4" />
                <div className="flex items-center bg-gray-700 p-2 rounded-lg cursor-pointer">
                    <img
                        src="profile-image-url.jpg"
                        alt="Profile"
                        className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-white">Anne Honyme</span>
                    <ChevronDown className="text-white ml-2" />
                </div>
            </div>
        </div>
    );
}