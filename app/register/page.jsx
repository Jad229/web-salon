import InputComponent from "@components/FormElements/InputComponent";
import { registerFormControls } from "@utils";

export default function Register() {
  return (
    <div className="flex-center flex-col bg-white my-12 p-12 w-full max-w-screen-sm rounded-xl drop-shadow-xl">
      <h1 className="mb-12 font-bold text-4xl">Register New Account</h1>
      <div className="w-full flex-center flex-col gap-5">
        {registerFormControls.map((item) => (
          <InputComponent
            name={item.id}
            key={item.id}
            label={item.label}
            type={item.type}
            placeholder={item.placeholder}
          />
        ))}
      </div>
      <div className="w-full flex-center py-4">
        <button className="w-full bg-black py-5 text-white hover:bg-transparent hover:text-black border border-black rounded-lg">
          Register
        </button>
      </div>
    </div>
  );
}
