import React from "preact/compat"
import clsx from "clsx"

export default function Input(props: React.HTMLProps<HTMLInputElement>) {
  return (
    <div class="flex flex-col">
      <label
        class={clsx('my-2 md:my-4 fw-bold')}
      >
        { props.label }
      </label>
      <input
        {...props}
        class={clsx(
          'p-3 appearance-none b-1 b-black fw-bold rounded-sm',
          'md:p-4',
          props.class
        )}
      />
    </div>
  )
}
