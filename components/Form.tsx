import { createUser } from '@/utils/actions';

function Form() {
  return (
    <form className={formStyle} action={createUser}>
      <h2 className='capitalize text-2xl mb-4'>create user</h2>
      <input
        type='text'
        name='firstName'
        defaultValue='peter'
        className={inputStyle}
        required
      />
      <input
        type='text'
        name='lastName'
        defaultValue='smith'
        className={inputStyle}
        required
      />
      <button type='submit' className={btnStyle}>
        Submit
      </button>
    </form>
  );
}

const formStyle =
  'max-w-lg flex flex-col p-8 gap-y-4 shadow bg-slate-800 rounded';

const inputStyle = 'border shadow rounded py-2 px-3 text-gray-300';

const btnStyle =
  'bg-blue-500 py-2 px-4 rounded font-bold capitalize hover:bg-blue-700 text-white';

export default Form;
