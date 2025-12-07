import Image from 'next/image';
import mapsImg from '@/images/maps.jpg';
const url = 'https://www.course-api.com/images/tours/tour-1.jpeg';

// ========== Params Return Promises in Next.js 15+ ===========
async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div>
      <h1 className='text-4xl'>Id: {id}</h1>
      <section className='flex gap-x-4 mt-4'>
        <div>
          <Image
            alt='maps'
            src={mapsImg}
            priority
            className='w-48 h-48 object-cover rounded'
            width={192}
            height={192}
          />
          <h2>local image</h2>
        </div>
        <div>
          <Image
            src={url}
            alt='tours'
            width={192}
            height={192}
            className='w-48 h-48 object-cover rounded'
            priority
          />
          <h2>Remote image</h2>
        </div>
      </section>
    </div>
  );
}

export default Page;

// ========== Alternative Using React use Hook ===========

// import { use } from 'react';

// function Page({ params }: { params: Promise<{ id: string }> }) {
//   const { id } = use(params);

//   return (
//     <div>
//       <h1 className='text-4xl'>Id: {id}</h1>
//     </div>
//   );
// }

// export default Page;
