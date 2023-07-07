import React from 'react';

function Introduction() {
  const name = 'Dear';
  const projectName = 'Wapme';

  return (
    <div className='bg-blue-500 p-8 text-white h-screen w-screen flex justify-center items-center flex-col'>
      <h1 className='text-4xl font-bold'>Hi {name},</h1>
      <p className='text-xl mt-4'>
        I'm thrilled to introduce you to{' '}
        <span className='underline font-bold tracking-wide text-lg'>
          {projectName}
        </span>
        , a WhatsApp clone project.
      </p>
      <p className='mt-8 text-black'>
        © {new Date().getFullYear()} @sanctus. All rights reserved.
      </p>
    </div>
  );
}

export default Introduction;
