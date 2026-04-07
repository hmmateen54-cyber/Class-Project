import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

function Register() {
  const Inputs = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Enter your name",
    },
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
  ];

  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">Register Page</h1>
      <div className="form p-4">
        <form action="">
          <div className="flex flex-col p-4">
            {Inputs &&
              Inputs.map((e) => (
                <div className="p-2">
                  <Label>{e.label}</Label>
                  <Input
                    text={e.type}
                    name={e.name}
                    className="p-4 w-96 mt-2"
                    placeholder={e.placeholder}
                    onChange={() =>
                      setInputValue({
                        ...inputValue,
                        [e.target.name]: e.target.value,
                      })
                    }
                  ></Input>
                </div>
              ))}
            <div className="p-4">
              <button className="bg-orange-900 text-white font-bold px-2 py-2 cursor-pointer rounded">
                Signup
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
