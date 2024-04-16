import Input from '@/components/Input';
import Button from '@/components/Button';
import Radio from '@/components/Radio';
import clsx from 'clsx';

export function App() {
  return (
    <main class="mx-auto p-8 max-w-xl text-sm lg:text-base">
      <h1 class="my-2 fw-black text-3xl md:text-4xl">User Registration</h1>
      <h2 class="my-4 color-gray-600">Enter your personal informations</h2>

      <form class="grid gap-6 md:gap-8">
        <section class="grid gap-2">
          <Input
            label="Full Name"
            name="full_name"
            type="text"
            defaultValue="test"
            required
          />
          <Input
            label="Birth Date"
            name="birth_date"
            type="date"
            required
          />
          <Radio
            label="Gender"
            name="gender"
            datalist={{
              male: 'Male',
              female: 'Female',
            }}
            required
          />
          <Input
            label="E-mail"
            name="email"
            type="email"
            placeholder="address@domain.tld"
            required
          />
          <Input
            label="GitHub"
            name="github"
            type="url"
            placeholder="https://github.com/..."
          />
          <Input
            label="LinkedIn"
            name="linkedin"
            type="url"
            placeholder="https://linkedin.com/in/..."
          />
          <Input
            label="Months of Experience"
            name="months_experience"
            type="number"
            min="0"
            defaultValue="0"
            required
          />
        </section>

        <section class="grid gap-2">
          <Button
            class={clsx(
              'bg-primary shadow-[.25rem_.25rem_0_0_#000]',
              'transition-box-shadow,transform',
              'hover:shadow-[.5rem_.5rem_0_0_#000]',
              'hover:-translate-x-.5 hover:-translate-y-.5'
            )}
            type="submit"
          >Create Account</Button>

          <div class="sm:mx-4 my-4 md:my-6 grid grid-cols-3 items-center">
            <hr class="b-1.5 b-black" />
            <span class="text-center">or</span>
            <hr class="b-1.5 b-black" />
          </div>

          <Button class="bg-transparent" type="button">
            See registered accounts
          </Button>
        </section>
      </form>
    </main>
  )
}
