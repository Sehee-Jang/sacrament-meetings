export default function Loading() {
  return (
    <div className='flex flex-col justify-center items-center py-24 space-y-4'>
      {/* Spinner*/}
      <div className='w-8 h-8 border-2 border-gray-200 border-t-blue-600 rounded-full animate-spin'></div>

      {/* Text */}
      <div className='text-center space-y-1'>
        <p className='text-sm text-gray-500'>Loading...</p>
        <p className='text-xs text-gray-400'>
          Hang tight! We&apos;re putting everything together.
        </p>
      </div>
    </div>
  );
}
