"use client";

import { useActionState } from "react";
import type { SacramentMeeting } from "@/lib/types";
import type { State } from "@/lib/actions";

type Props = {
  meeting?: SacramentMeeting;
  action: (state: State, formData: FormData) => Promise<State>;
  submitLabel: string;
};

const initialState: State = {
  message: "",
  errors: {},
};

export default function MeetingForm({ meeting, action, submitLabel }: Props) {
  const [state, formAction, isPending] = useActionState(action, initialState);

  return (
    <div className='w-full max-w-3xl rounded-lg border bg-white p-8 shadow-sm'>
      <form action={formAction} className='space-y-6'>
        {/* Date */}
        <div>
          <label htmlFor='date' className='mb-1 block font-medium'>
            Date
          </label>

          <input
            id='date'
            name='date'
            type='date'
            defaultValue={meeting?.date}
            className='w-full rounded border p-2'
            aria-describedby='date-error'
          />

          <div id='date-error' aria-live='polite'>
            {state.errors?.date?.map((error) => (
              <p key={error} className='text-sm text-red-600'>
                {error}
              </p>
            ))}
          </div>
        </div>

        {/* Meeting Type */}
        <div>
          <label htmlFor='meetingType' className='mb-1 block font-medium'>
            Meeting Type
          </label>

          <select
            id='meetingType'
            name='meetingType'
            defaultValue={meeting?.meetingType ?? "regular"}
            className='w-full rounded border p-2'
            aria-describedby='meetingType-error'
          >
            <option value='regular'>Regular</option>
            <option value='testimony'>Testimony</option>
            <option value='stake'>Stake</option>
            <option value='general'>General</option>
          </select>

          <div id='meetingType-error' aria-live='polite'>
            {state.errors?.meetingType?.map((error) => (
              <p key={error} className='text-sm text-red-600'>
                {error}
              </p>
            ))}
          </div>
        </div>

        {/* Presiding */}
        <div>
          <label htmlFor='presiding' className='mb-1 block font-medium'>
            Presiding
          </label>

          <input
            id='presiding'
            name='presiding'
            defaultValue={meeting?.presiding}
            placeholder='Example: Bishop Thompson'
            className='w-full rounded border p-2'
            aria-describedby='presiding-error'
          />

          <div id='presiding-error' aria-live='polite'>
            {state.errors?.presiding?.map((error) => (
              <p key={error} className='text-sm text-red-600'>
                {error}
              </p>
            ))}
          </div>
        </div>

        {/* Conducting */}
        <div>
          <label htmlFor='conducting' className='mb-1 block font-medium'>
            Conducting
          </label>

          <input
            id='conducting'
            name='conducting'
            defaultValue={meeting?.conducting}
            placeholder='Example: Brother Nakamura'
            className='w-full rounded border p-2'
            aria-describedby='conducting-error'
          />

          <div id='conducting-error' aria-live='polite'>
            {state.errors?.conducting?.map((error) => (
              <p key={error} className='text-sm text-red-600'>
                {error}
              </p>
            ))}
          </div>
        </div>

        {/* Opening Prayer */}
        <div>
          <label htmlFor='openingPrayer' className='mb-1 block font-medium'>
            Opening Prayer
          </label>

          <input
            id='openingPrayer'
            name='openingPrayer'
            defaultValue={meeting?.openingPrayer}
            placeholder='Example: Sister Ramirez'
            className='w-full rounded border p-2'
            aria-describedby='openingPrayer-error'
          />

          <div id='openingPrayer-error' aria-live='polite'>
            {state.errors?.openingPrayer?.map((error) => (
              <p key={error} className='text-sm text-red-600'>
                {error}
              </p>
            ))}
          </div>
        </div>

        {/* Closing Prayer */}
        <div>
          <label htmlFor='closingPrayer' className='mb-1 block font-medium'>
            Closing Prayer
          </label>

          <input
            id='closingPrayer'
            name='closingPrayer'
            defaultValue={meeting?.closingPrayer}
            placeholder='Example: Brother Lewis'
            className='w-full rounded border p-2'
            aria-describedby='closingPrayer-error'
          />

          <div id='closingPrayer-error' aria-live='polite'>
            {state.errors?.closingPrayer?.map((error) => (
              <p key={error} className='text-sm text-red-600'>
                {error}
              </p>
            ))}
          </div>
        </div>

        {/* General Error */}
        {state.message && (
          <p aria-live='polite' className='text-red-600'>
            {state.message}
          </p>
        )}

        <button
          type='submit'
          disabled={isPending}
          className='w-full rounded-md bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700 disabled:opacity-50'
        >
          {isPending ? "Saving..." : submitLabel}
        </button>
      </form>
    </div>
  );
}
