import React from 'react';
import TypeWriterAnimationSignUp from '../components/typingAnimation/SignUpTypeWriter.jsx';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  //
  const navigate = useNavigate();

  const handleValidation = () => {};
  const handleInput = () => {};
  const errors = {};
  return (
    <div className='w-full h-screen flex flex-row items-center justify-center gap-8 bg-lightgray font-default'>
      {/* container of left side */}
      <div className='m-4 p-4 bg-white rounded-lg w-[400px] text-yellow'>
        <div className='p-2'>
          <h3 className='text-2xl font-light'>Welcome!</h3>
          <p className='text-3xl font-medium pt-6 pb-2'>Sign in to</p>
          <p className='text-[16px] font-regular'>Speed, Type, Excel</p>
        </div>
        <div className='py-4 px-2 text-[16px]'>
          <form onSubmit={handleValidation}>
            <div className='flex flex-col gap-1 py-2'>
              <label htmlFor='email'>E-mail</label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter your email'
                onChange={handleInput}
                className='border rounded px-4 py-2 border-border text-white focus:outline-none focus:border-lightgray bg-darkbackground'
              />
              {errors.email && (
                <p className='text-red-500 text-xs'>{errors.email}</p>
              )}
            </div>
            <div className='flex flex-col gap-1 py-2'>
              <label htmlFor='username'>User name</label>
              <input
                type='text'
                name='username'
                id='username'
                placeholder='Enter your username'
                onChange={handleInput}
                className='border rounded px-4 py-2 border-border text-white focus:outline-none focus:border-lightgray bg-darkbackground'
              />
              {errors.username && (
                <p className='text-red-500 text-xs'>{errors.username}</p>
              )}
            </div>
            <div className='flex flex-col gap-1 py-2'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Enter your password'
                onChange={handleInput}
                className='border rounded px-4 py-2 border-border text-white focus:outline-none focus:border-lightgray bg-darkbackground'
              />
              {errors.password && (
                <p className='text-red-500 text-xs'>{errors.password}</p>
              )}
            </div>
            <div className='flex flex-col gap-1 py-2'>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <input
                type='password'
                name='confirm_password'
                id='confirmpassword'
                placeholder='Confirm your password'
                onChange={handleInput}
                className='border rounded px-4 py-2 border-border text-white focus:outline-none focus:border-lightgray bg-darkbackground'
              />
              {errors.confirm_password && (
                <p className='text-red-500 text-xs'>
                  {errors.confirm_password}
                </p>
              )}
            </div>

            <div className='flex w-full justify-center items-center'>
              <button
                type='submit'
                className='w-[300px] bg-yellow text-darkbackground rounded-lg cursor-pointer m-4 p-2 text-16 font-medium'
              >
                Register
              </button>
            </div>
          </form>
        </div>
        <div className='flex flex-row justify-center gap-1 text-xs'>
          <p className='text-lightgray font-light'>Already have an account? </p>
          <p
            className='text-yellow font-semibold cursor-pointer'
            onClick={() => {
              navigate('/login');
            }}
          >
            Login Now
          </p>
        </div>
      </div>

      {/* container of right side */}
      <div className='w-[500px]'>
        <TypeWriterAnimationSignUp />
      </div>
    </div>
  );
};

export default SignupPage;
