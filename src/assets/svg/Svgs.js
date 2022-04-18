const listSvg = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-6 w-6'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth={2}
  >
    <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 10h16M4 14h16M4 18h16' />
  </svg>
);

const aboutSvg = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-6 w-6'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth={2}
  >
    <path strokeLinecap='round' strokeLinejoin='round' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
  </svg>
);

const sunSvg = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='btn-svg-on-light-bg box-content h-6 w-6 rounded-lg p-1'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth={2}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
    />
  </svg>
);

const moonSvg = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='btn-svg-on-light-bg box-content h-6 w-6 rounded-lg p-1'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth={2}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
    />
  </svg>
);

const trashSvg = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='btn-svg-on-dark-bg box-content h-5 w-5 cursor-pointer rounded-lg p-1'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth={2}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
    />
  </svg>
);

const editSvg = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='btn-svg-on-dark-bg box-content h-5 w-5 cursor-pointer rounded-lg p-1'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth={2}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
    />
  </svg>
);

const addSvg = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='btn-svg-on-dark-bg box-content h-6 w-6 rounded-lg p-2'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth='2'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
    />
  </svg>
);

const sortAscendingSvg = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='btn-svg-on-dark-bg box-content h-6 w-6 rounded-lg p-2'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth={2}
  >
    <path strokeLinecap='round' strokeLinejoin='round' d='M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12' />
  </svg>
);

const sortDescendingSvg = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='btn-svg-on-dark-bg box-content h-6 w-6 rounded-lg p-2'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth={2}
  >
    <path strokeLinecap='round' strokeLinejoin='round' d='M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4' />
  </svg>
);

const loadingSpinner = (
  <svg
    role='status'
    className='mr-2 h-20 w-20 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600'
    viewBox='0 0 100 101'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
      fill='currentColor'
    />
    <path
      d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
      fill='currentFill'
    />
  </svg>
);

const checkSvg = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-6 w-6'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth={2}
  >
    <path strokeLinecap='round' strokeLinejoin='round' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
  </svg>
);

export {
  listSvg,
  aboutSvg,
  sunSvg,
  moonSvg,
  trashSvg,
  editSvg,
  addSvg,
  sortAscendingSvg,
  sortDescendingSvg,
  loadingSpinner,
  checkSvg,
};
