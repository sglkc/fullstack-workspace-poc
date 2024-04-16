import React from "preact/compat"

export default function Input(props: React.HTMLProps<HTMLInputElement>) {
  return (
    <div>
      <label>{ props.label }</label>
      <input class={props.class} {...props} />
    </div>
  )
}
