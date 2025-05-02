import { logout } from "@/actions/user";
import ActionButton from "@/components/ui/action-button";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function Navbar(){
    const loggedUser = (await cookies()).get('logged-user')

    return (
        <div className="flex p-8 items-center gap-12">
            <h1 className="text-2xl font-bold">Modfy</h1>
            <div className="flex gap-3">
                <Link href='/' className="flex items-center gap-2 text-base font-medium hover:bg-slate-100 rounded-sm p-2">
                    <img src="/icons/home.svg" className="h-5 w-5" />
                    <span>Home</span>
                </Link>
                <Link href='/games' className="flex items-center gap-2 text-base font-medium hover:bg-slate-100 rounded-sm p-2">
                    <img src="/icons/games.svg" className="h-5 w-5" />
                    <span>Games</span>
                </Link>
                <Link href='/mod/new' className="flex items-center gap-2 text-base font-medium hover:bg-slate-100 rounded-sm p-2">
                    <img src="/icons/plus.svg" className="h-5 w-5" />
                    <span>Add mod</span>
                </Link>
                {!loggedUser &&
                    <Link href='/login' className="flex items-center gap-2 text-base font-medium hover:bg-slate-100 rounded-sm p-2">
                        <img src="/icons/login.svg" className="h-5 w-5" />
                        <span>Login</span>
                    </Link>
                }
                {loggedUser && <ActionButton action={logout} text="Logout" hideBorder/>}
            </div>
        </div>
    )
}