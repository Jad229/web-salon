import InputComponent from "@components/FormElements/InputComponent";
import { loginFormControls } from "@utils";
import Link from "next/link";

export default function Login() {
  return (
    <div className="relative bg-white my-12 p-12 w-full max-w-screen-sm rounded-xl drop-shadow-xl">
      <h1 className="text-center mb-12 font-bold text-4xl">Sign In</h1>
      <div className="flex-center flex-col gap-5">
        {loginFormControls.map((item) => (
          <InputComponent
            name={item.id}
            key={item.id}
            label={item.label}
            type={item.type}
            placeholder={item.placeholder}
          />
        ))}
      </div>
      <div className="flex-center py-4">
        <button className="w-full bg-black py-5 text-white hover:bg-transparent hover:text-black border border-black rounded-lg">
          Login
        </button>
      </div>
      <Link href="/register">
        <p className="text-gray-500 mb-2">Don't have an account?</p>
        <button className="w-full bg-black py-5 text-white hover:bg-transparent hover:text-black border border-black rounded-lg">
          Register
        </button>
      </Link>
    </div>
  );
}
