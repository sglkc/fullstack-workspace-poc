import React from "preact/compat"
import clsx from "clsx"

export default function Input(props: React.HTMLProps<HTMLInputElement>) {
  return (
    <fieldset class="flex flex-col">
      <label class="py-2 md:py-4 fw-bold" for={props.name}>
        { props.label } { props.required && <span class="text-red">*</span> }
      </label>
      <input
        {...props}
        class={clsx(
          'p-3 appearance-none b-1 b-black fw-medium rounded-sm',
          'md:p-4 invalid:b-red',
          props.class
        )}
      />
    </fieldset>
  )
}
