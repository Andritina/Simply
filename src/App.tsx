
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import Login from './pages/LoginPage'
import CreateursPage from './pages/CreateursPage'
import MessagePage from './pages/MessagePage'
import ChatPage from './pages/ChatPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashboardPage />} /> 
        <Route path="/createurs" element={<CreateursPage />} />
        <Route path="/MessagePage" element={<MessagePage />} /> 
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App