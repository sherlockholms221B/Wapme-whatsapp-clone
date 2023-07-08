import * as React from 'react';
// import { Route, Routes } from '';

function Introduction() {
  const [value, setValue] = React.useState('');
  // scroll into veiw on route change
  React.useEffect(() => {
    document.documentElement.scrollIntoView(0, 0);
  }, []);

  return (
    <section
      role='container'
      className='bg-dropdown-background text-white h-screen w-screen'
    >
      {/* navigation bar component */}

      <div className='border-4 border-red-500 h-fit w-full shadow-lg z-10 flex justify-start gap-6 items-center'>
        <div className='rounded-full w-12 h-12 bg-white' id='profile'></div>
        <div className='w-[50%] h-full'>
          <input
            name='search'
            type='text'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className='w-full outline-none rounded-md '
          />
        </div>
      </div>
    </section>
  );
}

export default Introduction;
