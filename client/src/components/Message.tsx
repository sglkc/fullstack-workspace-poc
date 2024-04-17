import clsx from "clsx"

export type MessageProps = {
  message: string
  title: string,
  color: 'success' | 'error'
}

export default function Message({ title, message, color }: MessageProps) {
  return (
    <div
      class={clsx(
        'p-4 grid gap-2 b-1 rounded-sm',
        color === 'success' && 'bg-blue-100 b-blue',
        color === 'error' && 'bg-red-100 b-red',
      )}
    >
      <h3 class="fw-bold">{ title }</h3>
      <p>{ message }</p>
    </div>
  )
}
