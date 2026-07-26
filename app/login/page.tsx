import { LoginForm } from "./LoginForm";

export default function LoginPage() {
  return (
    <main className='mx-auto flex min-h-[70vh] max-w-md items-center justify-center px-6'>
      <div className='w-full rounded-lg border bg-white p-8 shadow-sm'>
        <h1 className='mb-2 text-3xl font-bold'>Sign In</h1>

        <p className='mb-8 text-sm text-gray-600'>
          Sign in to manage sacrament meetings.
        </p>

        <LoginForm />
      </div>
    </main>
  );
}
