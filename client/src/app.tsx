import Input from '@/components/Input';

export function App() {
  return (
    <main class="">
      <h1 class="fw-bold">User Registration</h1>
      <h2>Enter your personal informations</h2>
      <Input label="Name" type="text" autoComplete="off" />
      <Input label="E-mail" type="email" autoComplete="off" />
      <Input label="Nama" type="password" autoComplete="off" />
      <Input label="Nama" type="date" autoComplete="off" />
    </main>
  )
}
