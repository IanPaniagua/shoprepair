import { HomeIcon, File, UsersRound, UserRound } from 'lucide-react';
import { NavButton } from '@/app/components/NavButton';
import Link from 'next/link';


export function Header() {
    return (
        <header className='animate-slide bg-background h-12 p-2 border-b stricky top-0 z-20'>
            <div className='flex h-8 items-center justify-between w-full'>
                <div className="flex items-center gap-2">
                    <NavButton icon={HomeIcon} label="Home" href="/" />
                    <Link href="/home" className='flex justify-center items-center gap-2 ml-0'
                    title='Home'>
                        <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">
                            Computer Repair Shop
                        </h1>
                    </Link>
                </div>
                <div className="flex items-center">
                <NavButton icon={File} label="tikets" href="/tickets" />
                <NavButton icon={UserRound} label="Customers" href="/customers" />
                </div>
            </div>
        </header>
    )
}
