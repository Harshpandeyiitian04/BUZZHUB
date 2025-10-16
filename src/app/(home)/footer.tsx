import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t flex justify-between items-center font-medium px-6 bg-gray-50 text-gray-700 fixed bottom-0 left-0 w-full h-16 z-50">
            <div>
                © {new Date().getFullYear()} BuzzHub. All rights reserved.
            </div>
            <div className="flex gap-4">
                <Link href="/about" className="hover:underline">About</Link>
                <Link href="/contact" className="hover:underline">Contact</Link>
                <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            </div>
        </footer>
    );
}