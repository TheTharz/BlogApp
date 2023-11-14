import { TypeAnimation } from 'react-type-animation';
import React from 'react';

const TypeWriterAnimation = () => {
  return (
    <div className='font-semibold text-[54px] m-3 p-1 font-default text-yellow'>
      <p className='text-darkbackground'>
        Redifine Your <br /> Typing Velocity :{' '}
      </p>
      <p>
        Where Words Meet <br />
      </p>
      <TypeAnimation
        sequence={[
          'Warp Speed',
          2000,
          'Swift Fingers',
          2000,
          'Quick Precision',
          2000,
        ]}
        wrapper='span'
        speed={20}
        repeat={Infinity}
      />
    </div>
  );
};
//export the required animation
export default TypeWriterAnimation;
