function App() {
  return (
    <>
      <div className='h-screen bg-gradient-to-br from-blue-950 via-purple-950 to-black flex items-center justify-center'>
        <div className='bg-gradient-to-tl from-blue-750 via-purple-900 to-gray-950 p-8 rounded-3xl grid grid-cols-1 items-center justify-center shadow-lg'>
          <img src='https://avatars.githubusercontent.com/u/93060975?v=4' className="align-center w-52 h-52 rounded-full shadow-lg"></img>
          <h1 className='text-white object-cover text-center font-semibold p-3 text-2xl drop-shadow-md'>Carlos Felgueiras</h1>
          <div className="grid grid-cols-1 items-center justify-center">
            <a href='https://github.com/carlosfelgueiras' className='bg-github-full-dark hover:bg-github-dark text-github-light font-bold text-center p-2 m-1 rounded-full shadow-md'>GitHub</a>
            <a href='https://www.linkedin.com/in/carlos-felgueiras/' className='bg-linkedin-blue hover:bg-linkedin-dark-blue text-github-light font-bold text-center p-2 m-1 rounded-full shadow-md'>LinkedIn</a>
            <a href='https://www.instagram.com/cfelgueiras115' className='bg-gradient-to-r from-instagram-fade-top via-instagram-fade-middle via-30% hover:via-70% to-instagram-fade-bottom text-github-light font-bold text-center p-2 m-1 rounded-full shadow-md'>Instagram</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
