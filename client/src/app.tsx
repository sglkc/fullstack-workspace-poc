import Input from '@/components/Input';
import Button from '@/components/Button';

export function App() {
  return (
    <main class="mx-auto p-8 max-w-xl text-sm lg:text-base">
      <form class="grid gap-4">
        <h1 class="fw-bold text-3xl md:text-4xl">User Registration</h1>
        <h2 class="color-gray-500">Enter your personal informations</h2>
        <Input label="Name" type="text" defaultValue="test" />
        <Input label="E-mail" type="email" placeholder="test" />
        <Input label="Password" type="password" />
        <Input label="Date" type="date" />

        <Button
          class="bg-primary shadow-[.25rem_.25rem_0_0_#000]"
          type="submit"
        >Create Account</Button>

        <hr class="my-4 md:my-8 b-1.5 b-black" />

        <Button class="bg-transparent" type="button">
          Login
        </Button>
      </form>
    </main>
  )
}
