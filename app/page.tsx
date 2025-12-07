import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <h1 className='text-7xl'>Home Page</h1>
      <Link href='/about' className='text-xl text-blue-500 mt-8 inline-block'>
        About Page
      </Link>
    </div>
  );
}

export default HomePage;
