import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

function Login() {
  const Inputs = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm your password",
    },
  ];

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  console.log(inputValue);

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">Login Page</h1>
      <div className="form p-4">
        <form action="">
          <div className="flex flex-col p-4">
            {Inputs &&
              Inputs.map((e) => (
                <div key={e.name} className="p-2">
                  <Label>{e.label}</Label>
                  <Input
                    type={e.type}
                    name={e.name}
                    className="w-96 mt-2 p-4"
                    placeholder={e.placeholder}
                    onChange={(e) =>
                      setInputValue({
                        ...inputValue,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </div>
              ))}
            <div className="px-4">
              <button
                className="bg-orange-900 w-16 px-2 py-2 text-white font-bold cursor-pointer mt-4 rounded"
                type="submit"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
