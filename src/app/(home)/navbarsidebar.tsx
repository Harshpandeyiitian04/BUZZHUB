import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils"
import { EqualIcon } from "lucide-react";
import Link from "next/link";

type navbaritemprops = {
    href: string,
    children: React.ReactNode,
}

interface props{
    items:navbaritemprops[];
    open:boolean;
    onOpenChange:(open:boolean)=>void;
}

export default function Navsidebar({ items,open,onOpenChange}:props) {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side="right" className="p-0 transition-none">
                <SheetHeader className="p-4 border-b-2 border-r-full border-black ">
                    <div className="flex items-center">
                        <SheetTitle>
                            Menu
                        </SheetTitle>
                    </div>
                </SheetHeader>
                <div className="flex flex-col overflow-y-auto h-full pb-2 ">
                    {items.map((item)=>(
                       <Link key={item.href} href={item.href} className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium">
                         {item.children}
                       </Link> 
                    ))}
                </div>
                <div className="border-t p-3 flex flex-col items-center ">
                    <Link href={'/signin'} className="border-l-0 border-t-0 border-b-0 border-r-0 rounded-none p-2 m-1 bg-white hover:bg-pink-400 transition-colors text-lg hover:rounded-full">
                    Login/Signin</Link>
                    <Link href={'/signup'} className="border-l-0 border-t-0 border-b-0 border-r-0 rounded-none p-2 m-1 bg-black text-white hover:bg-gray-500 transition-colors text-lg hover:rounded-full">
                    Start Selling</Link>
                </div>
            </SheetContent>
        </Sheet>
    )
}