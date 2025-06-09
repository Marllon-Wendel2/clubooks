interface SidebarProps {
  userData: string;
}

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Sidebar({ userData }: SidebarProps) {
  const user = JSON.parse(userData);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-4">
      <div className="flex items-center mb-6">
        <Image
          width={48}
          height={48}
          src={user.userImg || "/default-avatar.png"}
          alt="User Avatar"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold">{user.userName}</h2>
          <p className="text-sm">{user.email}</p>
        </div>
      </div>
      <nav>
        <ul>
          <li className="mb-4">
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
          </li>
          <li className="mb-4">
            <a href="/profile" className="text-gray-300 hover:text-white">
              Profile
            </a>
          </li>
          <li className="mb-4">
            <a href="/settings" className="text-gray-300 hover:text-white">
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
