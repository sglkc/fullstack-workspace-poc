import React from "preact/compat"
import clsx from "clsx"

type ButtonProps = React.HTMLProps<HTMLButtonElement>

export default function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      class={clsx(
        'p-3 fw-bold b-1 b-black rounded-sm shadow',
        'md:p-4',
        props.class
      )}
    >
      { props.children }
    </button>
  )
}

