'use client'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { Children, useState } from "react"
import Navsidebar from "./navbarsidebar"
import { MenuIcon } from "lucide-react"

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"],

})

type navbaritemprops = {
    href: string,
    children: React.ReactNode,
    isactive?: boolean,
    key: string
}

const navbaritems = [
    { href: '/', children: 'Home' },
    { href: '/about', children: 'About' },
    { href: '/features', children: 'Features' },
    { href: '/pricing', children: 'Pricing' },
    { href: '/contact', children: 'Contact' },
]

function NavbarItem({ href, children, isactive }: navbaritemprops) {
    return (
        <Button suppressHydrationWarning variant={'outline'} className={cn("bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg", isactive && "bg-black text-white hover:bg-black hover:text-white")}>
            {children}
        </Button>
    )
}

export default function Navbar() {
    const Pathname = usePathname();
    const [isopen,setIsopen] = useState(false);
    return (
        <>
            <nav className="h-20 flex border-b justify-between font-medium flex-row ">
                <Link href={"/"} className="pl-6 pr-6  flex items-center">
                    <span className={cn(`text-5xl font-semibold `, poppins.className)}>
                        BUZZHUB
                    </span>
                </Link>
                <Navsidebar items={navbaritems} open={isopen} onOpenChange={setIsopen}/>
                    <div className="items-center gap-4 hidden lg:flex ">
                    {navbaritems.map((item) => (
                        <Link href={item.href} key={item.href} >
                            <NavbarItem key={item.href} href={item.href} children={item.children} isactive={Pathname === item.href} ></NavbarItem>
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex p-3 ">
                    <Button asChild variant={'secondary'} className={cn("border-l border-t-0 border-b-0 border-r-0 rounded-none bg-white hover:bg-pink-400 transition-colors text-lg")}><Link href={'/signin'} className="hover:rounded-full">
                        Login/signin</Link></Button>
                    <Button asChild className={cn("border-l border-t-0 border-b-0 border-r-0 rounded-none bg-black text-white hover:bg-gray-500 transition-colors text-lg")}><Link href={'.signup'} className=" hover:rounded-full">Start Selling</Link></Button>
                </div>
                <div className="flex lg:hidden">
                    <Button variant={'elevated'} className="size-10 items-center text-center  border-transparent bg-gray-300 p-3 m-3 rounded-full" onClick={()=>setIsopen(true)}>
                        <MenuIcon/>
                    </Button>
                </div>
            </nav></>
    )
}