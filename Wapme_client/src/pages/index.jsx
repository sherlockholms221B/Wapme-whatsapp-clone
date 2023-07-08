import * as React from 'react';
// import { Route, Routes } from '';

function Introduction() {
  const [value, setValue] = React.useState('');
  // scroll into veiw on route change
  React.useEffect(() => {
    document.documentElement.scrollIntoView(0, 0);
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <section
      role='container'
      className='bg-dropdown-background text-white h-screen w-screen'
    >
      {/* navigation bar component */}

      {/* <div className='border-4 border-red-500 h-fit w-full shadow-lg z-10 px-2 flex justify-start gap-6 items-center absolute top-0 right-0 left-0'>
        <div
          className='rounded-full w-10 h-10 bg-white'
          id='navigation-panel'
        ></div>
        <div className='w-[50%] h-full'>
          <input
            name='search'
            type='text'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className='w-full outline-none rounded-md '
          />
        </div>
      </div> */}

      {/* navigation bar component */}

      <div className='flex flex-row w-full h-full' id='container'>
        <div
          className='border-2 border-red-600 w-[3.33333%] h-full'
          id='profile-container'
        >
          <div className='flex flex-col justify-between items-center h-full w-full'>
            <div className='border-4 border-green-500 h-fit gap-y-3 w-full flex flex-col place-items-center py-2'>
              <div className=' h-6 w-6 rounded-full bg-green-500'></div>
              <div className=' h-6 w-6 rounded-full bg-green-500'></div>
              <div className=' h-6 w-6 rounded-full bg-green-500'></div>
            </div>
            <div className='border-4 border-green-500 h-fit gap-y-3 w-full flex flex-col place-items-center py-2'>
              <div className=' h-6 w-6 rounded-full bg-green-500'></div>
              <div className=' h-6 w-6 rounded-full bg-green-500'></div>
            </div>
          </div>
        </div>
        <div
          className='border-2 border-green-600 w-3/12 h-full'
          id='message-panel'
        >
          <div
            id='chat-container'
            className=' border-4 border-red-500 h-full p-2 place-items-center'
          >
            <div className='p-2 gap-y-1'>
              <div className='w-full h-fit'>
                <strong className=''>chats</strong>
                <div className=''></div>
              </div>
              <input
                type='text'
                value={value}
                name='search-contacts'
                onChange={(e) => handleChange(e)}
                className='w-full h-8 outline-none border-b-2 focus:border-blue-600 rounded-md transition-colors duration-300 bg-black'
              />
            </div>
            <div className='overflow-auto h-[90%]' id='chat-list'>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(
                (value, index) => {
                  return (
                    <div
                      id='chat-container'
                      className='flex flex-row hover:bg-gray-200 px-1 py-1.5 transition-colors duration-200 rounded-md cursor-pointer'
                      key={index}
                    >
                      <div className='h-12 w-12 bg-green-400 rounded-full'></div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
        <div
          className='border-2 border-blue-600 w-10/12 h-full'
          id='screen'
        ></div>
      </div>
    </section>
  );
}

export default Introduction;
