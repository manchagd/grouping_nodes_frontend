import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const client = axios.create({
    baseURL: 'http://localhost:3000'
  })

  return (
    <div className="bg-blue-500 text-white p-4 rounded-lg">
      Tailwind is working!
    </div>
  );
}

export default App
