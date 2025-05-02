import { createUser, login } from "@/actions/user";
import EmailInput from "@/components/forms/email-input";
import PasswordInput from "@/components/forms/password-input";

export default function Login(){
    return (
        <div>
            <h1 className="text-4xl font-bold mb-4">Login</h1>
            <form className="flex flex-col gap-4 items-stretch" action={login}>
                <EmailInput label="Email" name="email"/>
                <PasswordInput label="Password" name="password"/>
                <input type="submit" className="bg-slate-100 p-2 w-fit rounded-md cursor-pointer hover:bg-slate-300 focus:outline-gray-500" value="Login"/>
            </form>
        </div>
    )
}