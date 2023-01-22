import { useState } from 'react'
import { useSession } from './use-session'
import reactLogo from './assets/react.svg'
import './App.css'

function App () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const session = useSession()

  if (session.active) {
    return (
      <div className="App">
        <h1>Dashboard</h1>
        <span className="col-white">hello</span>
        <button
          className="rounded-md shadow-xl bg-black col-black m-4"
          onClick={() => {
            session.setActive(false)
          }}
        >
          Sign Out
        </button>
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Login</h1>
      <div className="card">
        <form
          className="w-15  flex flex-col justify-center items-center"
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            session.setActive(true)
            session.setAccessToken('1234567890')
          }}
        >
          <input
            type="text"
            placeholder="Username"
            className="p-2 rounded-md m-2 shadow-md outline-none border-none focus:outline-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="p-2 rounded-md m-2 shadow-md outline-none border-none focus:outline-blue-500"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* button that triggers submission */}
          <button
            className="rounded-md shadow-xl bg-black col-black m-4"
            type="submit"
          >
            Sign In
          </button>
        </form>
      <div className='flex justify-center items-center mt-5'>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
          <img src="/typescript.svg" className="logo react" alt="TypeScript logo" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          <img src="/tailwindcss.svg" className="logo react" alt="TailwindCSS logo" />
        </a>
        <a href="https://eslint.org/" target="_blank" rel="noreferrer">
          <img src="/eslint.svg" className="logo" alt="ESLint logo" />
        </a>
      </div>
      </div>
      <p className="read-the-docs">
        Click on the logos to learn more
      </p>
    </div>
  )
}

export default App
