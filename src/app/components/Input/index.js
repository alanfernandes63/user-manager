"use client";
import { memo } from "react";
import { useFormContext, Controller } from "react-hook-form";
import InputMask from "react-input-mask";

export const InputText = memo((props) => {
  const { register } = useFormContext();
  const messages = {
    minLength: `Campo deve conter ${props.vldt?.minLength} caracteres ou mais`,
    required: "O campo deve ser preenchido",
    pattern: `O campo deve ser um ${props.label} válido`,
  };
  return (
    <div className="mb-4 w-full">
      <label className="block text-gray-400 text-sm mb-1" htmlFor={props.for}>
        {`${props.label}`}
      </label>
      <input
        {...register(props.id, props.vldt)}
        type="text"
        className={`w-full border-b-2 outline-none ${
          props.errors
            ? "border-colorInvalidInput"
            : "focus:border-colorBorderFocus"
        }  focus:text-colorTextInputWithFocus`}
        id={props.id}
      ></input>
      <p className="text-sm text-colorInvalidInput">
        {messages[props.errors?.type]}
      </p>
    </div>
  );
});

export const InputEmail = memo((props) => {
  const { register } = useFormContext();
  const messages = {
    minLength: `Campo deve conter ${props.vldt?.minLength} caracteres ou mais`,
    required: "O campo deve ser preenchido",
    pattern: `O campo deve ser um ${props.label} válido`,
  };

  const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  return (
    <div className="mb-4 w-full">
      <label className="block text-gray-400 text-sm mb-1" htmlFor={props.for}>
        {`${props.label}`}
      </label>
      <input
        {...register(props.id, { ...props.vldt, pattern })}
        type="text"
        className={`w-full border-b-2 outline-none ${
          props.errors
            ? "border-colorInvalidInput"
            : "focus:border-colorBorderFocus"
        }  focus:text-colorTextInputWithFocus`}
        id={props.id}
      ></input>
      <p className="text-sm text-colorInvalidInput">
        {messages[props.errors?.type]}
      </p>
    </div>
  );
});

export const InputTelefone = memo((props) => {
  const { getValues } = useFormContext();
  const messages = {
    required: "O campo deve ser preenchido corretamente",
    pattern: "O campo deve seguir este padrão (99) 99999-9999",
  };

  return (
    <div className="mb-4 w-full">
      <label className="block text-gray-400 text-sm mb-1" htmlFor={props.for}>
        {`${props.label}`}
      </label>
      <Controller
        rules={{
          required: true,
          pattern:
            /^\((?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/,
        }}
        control={props.control}
        render={({ field: { onChange, onBlur, ref } }) => (
          <InputMask
            mask="(99) 99999-9999"
            onBlur={onBlur}
            onChange={onChange}
            inputRef={ref}
            className={`w-full border-b-2 outline-none ${
              props.errors
                ? "border-colorInvalidInput"
                : "focus:border-colorBorderFocus"
            }  focus:text-colorTextInputWithFocus`}
            id={props.id}
          ></InputMask>
        )}
        name="telefone"
      ></Controller>

      <p className="text-sm text-colorInvalidInput">
        {messages[props.errors?.type]}
      </p>
    </div>
  );
});
