import { TypeAnimation } from 'react-type-animation';
import React from 'react';

const TypeWriterAnimation = () => {
  return (
    <div className='font-semibold text-[54px] m-3 p-1 font-default text-yellow'>
      <p className='text-darkbackground'>
        Unlock Your <br /> Fingers :{' '}
      </p>
      <p>
        Ascend To <br /> Supersonic <br />
      </p>
      <TypeAnimation
        sequence={['Typing', 2000, 'Efficiency', 2000, 'Agility', 2000]}
        wrapper='span'
        speed={20}
        repeat={Infinity}
      />
    </div>
  );
};

export default TypeWriterAnimation;
