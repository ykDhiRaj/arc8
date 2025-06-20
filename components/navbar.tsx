"use client";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50">
            <div className="max-w-6xl mx-auto py-4">
                <div className="bg-white backdrop-blur-sm rounded-full px-8 shadow-lg">
                    <div className="flex items-center justify-between h-14">
                        <Link href="/auth/signup" >
                            <InteractiveHoverButton text=" Signup" />
                        </Link>

                        <div className="flex items-center space-x-12">
                            <Link href="/" className="text-[#14213d] font-bold transition-colors">/Home/</Link>
                            <Link href="/about" className="text-[#14213d] font-bold transition-colors">/Book/</Link>
                            <Link href="/" className="text-[#14213d] text-2xl font-extrabold px-4">ARC8</Link>
                            <Link href="/venues" className="text-[#14213d] font-bold transition-colors">/Venues/</Link>
                            <Link href="/contact" className="text-[#14213d] font-bold transition-colors">/Contact/</Link>
                        </div>

                        <Link href="/auth/login" >
                            <InteractiveHoverButton text="Login" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
