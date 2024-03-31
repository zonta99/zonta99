/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/NTLblnnaMmf
 */
import Link from "next/link"

export function MobileNavbar() {
  return (
    <footer className="fixed bottom-0 inset-x-0 flex items-center justify-center h-14 bg-white border-t border-gray-100/50 shadow-t dark:bg-gray-950 dark:border-gray-950">
      <Link
        className="flex flex-col items-center justify-center w-full text-xs font-medium transition-colors text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 dark:text-gray-400"
        href="/admin"
      >
        <HomeIcon className="w-5 h-5" />
        Home
      </Link>
      <Link
        className="flex flex-col items-center justify-center w-full text-xs font-medium transition-colors text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 dark:text-gray-400"
        href="/settings"
      >
        <PackageIcon className="w-5 h-5" />
        Projects
      </Link>
      <Link
        className="flex flex-col items-center justify-center w-full text-xs font-medium transition-colors text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 dark:text-gray-400"
        href="#"
      >
        <ActivityIcon className="w-5 h-5" />
        Activity
      </Link>
      <Link
        className="flex flex-col items-center justify-center w-full text-xs font-medium transition-colors text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 dark:text-gray-400"
        href="/match"
      >
        <UserIcon className="w-5 h-5" />
        Profile
      </Link>
    </footer>
  )
}


function HomeIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function PackageIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function ActivityIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}


function UserIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
