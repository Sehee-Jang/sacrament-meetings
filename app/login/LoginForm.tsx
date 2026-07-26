"use client";

import { useActionState } from "react";
import { authenticate } from "@/lib/actions";

export function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction} className='space-y-6'>
      <div>
        <label htmlFor='email' className='mb-1 block text-sm font-medium'>
          Email
        </label>

        <input
          id='email'
          name='email'
          type='email'
          required
          autoComplete='email'
          placeholder='bishop@example.com'
          className='w-full rounded-md border px-3 py-2'
        />
      </div>

      <div>
        <label htmlFor='password' className='mb-1 block text-sm font-medium'>
          Password
        </label>

        <input
          id='password'
          name='password'
          type='password'
          required
          minLength={6}
          autoComplete='current-password'
          placeholder='••••••••'
          className='w-full rounded-md border px-3 py-2'
        />
      </div>

      {errorMessage && (
        <p className='text-sm text-red-600' role='alert'>
          {errorMessage}
        </p>
      )}

      <button
        type='submit'
        disabled={isPending}
        className='w-full rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-50'
      >
        {isPending ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );
}
