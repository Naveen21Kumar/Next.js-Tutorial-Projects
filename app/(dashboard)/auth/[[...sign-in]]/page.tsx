const SignInpage = async ({
  params,
}: {
  params: Promise<{ 'sign-in': string[] }>;
}) => {
  const resolvedParams = await params;

  const segments = resolvedParams?.['sign-in'] ?? [];

  console.log(resolvedParams);
  console.log(segments);
  console.log(resolvedParams?.['sign-in']?.[1]);
  return (
    <h2 className='text-3xl'>
      Sign-In page:{' '}
      {segments.length > 0 ? segments.join('/') : 'No extra segements'}
    </h2>
  );
};

export default SignInpage;
