"use client";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { useSession } from "@/lib/auth-client";
import { signOut } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const { data: session } = useSession();

    async function handleSignOut() {
        await signOut({
            fetchOptions: {
                onError: (ctx) => {
                    toast.error(ctx.error.message);
                },
                onSuccess: () => {
                    toast.success("Successfully signed out");
                    router.push("/auth/login");
                }
            }
        });
    }

    return (
        <nav className="top-0 left-0 right-0 z-50 fixed ">
            <div className="max-w-6xl mx-auto py-4">
                <div className="bg-white backdrop-blur-sm rounded-full px-8 shadow-lg">
                    <div className="flex items-center justify-between h-14 relative">
                        {/* Left: Signup button (only if not logged in and not on /auth/signup) */}
                        <div className="w-32 flex items-center">
                            {!session && pathname !== "/auth/signup" && (
                                <Link href="/auth/signup" >
                                    <InteractiveHoverButton text="Signup"
                                    />
                                </Link>
                            )}
                        </div>
                        {/* Center: Nav links */}
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center space-x-12">
                            <Link href="/" className="text-[#14213d] font-bold transition-colors">/H/</Link>
                            <Link href="/about" className="text-[#14213d] font-bold transition-colors">/Book/</Link>
                            <Link href="/" className="text-[#14213d] text-3xl font-extrabold px-4">ARC8</Link>
                            <Link href="/venues" className="text-[#14213d] font-bold transition-colors">/Venues/</Link>
                            {/* Profile or Contact */}
                            {session ? (
                                <Link href="/profile" className="text-[#14213d] font-bold transition-colors">/Profile/</Link>
                            ) : (
                                <Link href="/contact" className="text-[#14213d] font-bold transition-colors">/Contact/</Link>
                            )}
                        </div>
                        {/* Right: Login or Logout (Login hidden on /auth/login) */}
                        <div className="w-32 flex items-center justify-end">
                            {session ? (
                                <InteractiveHoverButton text="Logout"
                                    onClick={handleSignOut}
                                />
                            ) : (
                                pathname !== "/auth/login" && (
                                    <Link href="/auth/login" >
                                        <InteractiveHoverButton text="Login" />
                                    </Link>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
