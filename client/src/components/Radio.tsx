import React from "preact/compat"
import clsx from "clsx"

type RadioProps = React.HTMLProps<HTMLInputElement> & {
  datalist: Record<string, string>
}

export default function Radio(props: RadioProps) {
  return (
    <fieldset class="flex flex-col gap-4">
      <legend class="py-2 md:py-4 fw-bold">{ props.label }</legend>

      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
        { Object
          .entries(props.datalist)
          .map(([ value, label ]) =>
            <label class="flex gap-4 cursor-pointer fw-medium">
              <input
                {...props}
                class="accent-primary"
                type="radio"
                value={value}
              />
              <span>{ label }</span>
            </label>
          )
        }
      </div>
    </fieldset>
  )
}
