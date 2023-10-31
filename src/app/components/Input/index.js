"use client";
import { memo } from "react";
import { useFormContext } from "react-hook-form";
const InputText = memo((props) => {
  const { register } = useFormContext();
  return (
    <div className="mb-4">
      <label
        className="block text-gray-400 text-sm font-bold mb-1"
        htmlFor={props.for}
      >
        {props.label}
      </label>
      <input
        {...register(props.id)}
        type="text"
        className="border-b-2 outline-none focus:border-primary focus:text-colorTextInputWithFocus text-colorTextInputWithoutFocus"
        id={props.id}
      ></input>
    </div>
  );
});

export default InputText;