'use client';

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className='flex flex-col items-center w-[300px]'>
      <p className='text-5xl font-bold'>Count: {count}</p>
      <button
        type='button'
        className='bg-blue-500 text-white rounded mt-4 py-2 px-4'
        onClick={() => setCount((prev) => prev + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
