import { createUser } from "@/actions/user";
import EmailInput from "@/components/forms/email-input";
import PasswordInput from "@/components/forms/password-input";

export default function Register(){
    return (
        <div>
            <h1 className="text-4xl font-bold mb-4">Register</h1>
            <form className="flex flex-col gap-4 items-stretch" action={createUser}>
                <EmailInput label="Email" name="email"/>
                <PasswordInput label="Password" name="password"/>
                <input type="submit" className="bg-slate-100 p-2 w-fit rounded-md cursor-pointer hover:bg-slate-300 focus:outline-gray-500" value="Register"/>
            </form>
        </div>
    )
}