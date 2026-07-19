"use client";

import { useActionState } from "react";
import { updateMeeting, type State } from "@/lib/actions";
import type { SacramentMeeting } from "@/lib/types";

const initialState: State = {
  message: "",
  errors: {},
};

export default function EditMeetingForm({
  meeting,
}: {
  meeting: SacramentMeeting;
}) {
  const updateMeetingWithId = updateMeeting.bind(null, meeting.id);

  const [state, formAction, isPending] = useActionState(
    updateMeetingWithId,
    initialState,
  );

  return (
    <form action={formAction} className='flex max-w-xl flex-col gap-4'>
      {/* Date */}
      <div>
        <label htmlFor='date'>Date</label>

        <input
          id='date'
          name='date'
          type='date'
          defaultValue={meeting.date}
          aria-describedby='date-error'
          className='w-full rounded border p-2'
        />

        <div id='date-error' aria-live='polite'>
          {state.errors?.date?.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      </div>

      {/* Meeting Type */}
      <div>
        <label htmlFor='meetingType'>Meeting Type</label>

        <select
          id='meetingType'
          name='meetingType'
          defaultValue={meeting.meetingType}
          aria-describedby='meetingType-error'
          className='w-full rounded border p-2'
        >
          <option value='regular'>Regular</option>

          <option value='testimony'>Testimony</option>

          <option value='stake'>Stake</option>

          <option value='general'>General</option>
        </select>

        <div id='meetingType-error' aria-live='polite'>
          {state.errors?.meetingType?.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      </div>

      {/* Presiding */}
      <div>
        <label htmlFor='presiding'>Presiding</label>

        <input
          id='presiding'
          name='presiding'
          defaultValue={meeting.presiding}
          placeholder='Example: Bishop Thompson'
          aria-describedby='presiding-error'
          className='w-full rounded border p-2'
        />

        <div id='presiding-error' aria-live='polite'>
          {state.errors?.presiding?.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      </div>

      {/* Conducting */}
      <div>
        <label htmlFor='conducting'>Conducting</label>

        <input
          id='conducting'
          name='conducting'
          defaultValue={meeting.conducting}
          placeholder='Example: Brother Nakamura'
          aria-describedby='conducting-error'
          className='w-full rounded border p-2'
        />

        <div id='conducting-error' aria-live='polite'>
          {state.errors?.conducting?.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      </div>

      {/* Opening Prayer */}
      <div>
        <label htmlFor='openingPrayer'>Opening Prayer</label>

        <input
          id='openingPrayer'
          name='openingPrayer'
          defaultValue={meeting.openingPrayer}
          placeholder='Example: Sister Ramirez'
          aria-describedby='openingPrayer-error'
          className='w-full rounded border p-2'
        />

        <div id='openingPrayer-error' aria-live='polite'>
          {state.errors?.openingPrayer?.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      </div>

      {/* Closing Prayer */}
      <div>
        <label htmlFor='closingPrayer'>Closing Prayer</label>

        <input
          id='closingPrayer'
          name='closingPrayer'
          defaultValue={meeting.closingPrayer}
          placeholder='Example: Brother Lewis'
          aria-describedby='closingPrayer-error'
          className='w-full rounded border p-2'
        />

        <div id='closingPrayer-error' aria-live='polite'>
          {state.errors?.closingPrayer?.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      </div>

      {state.message && <p aria-live='polite'>{state.message}</p>}

      <button
        type='submit'
        disabled={isPending}
        className='rounded bg-blue-600 px-4 py-2 text-white'
      >
        {isPending ? "Saving..." : "Update Meeting"}
      </button>
    </form>
  );
}
