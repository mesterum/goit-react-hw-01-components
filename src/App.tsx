import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile'
import user from './assets/user.json'
import Statistics from './components/Statistics'
import data from './assets/data.json'

function App() {
  return <>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    <h1>Vite + React</h1>
    <Profile {...user} />
    <Statistics title="Upload stats" stats={data} />
  </>
}

export default App
