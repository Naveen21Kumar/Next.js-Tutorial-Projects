function ToursLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className='py-2 mb-4 bg-slate-500 w-1/2 rounded'>
        <h1 className='text-3xl text-center text-white'>Nested layout</h1>
      </header>

      {children}
    </div>
  );
}

export default ToursLayout;
