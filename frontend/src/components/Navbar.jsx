import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Navbar({ darkMode, setDarkMode, onMenuClick }) {
  const [voiceEnabled, setVoiceEnabled] = useState(localStorage.getItem('voiceEnabled') !== 'false')

  const handleVoiceToggle = () => {
    const newValue = !voiceEnabled
    setVoiceEnabled(newValue)
    localStorage.setItem('voiceEnabled', newValue)
  }

  return (
    <nav className="navbar" style={{ 
      background: darkMode ? '#1e1e1e' : 'rgba(255, 255, 255, 0.8)', 
      backdropFilter: 'blur(10px)',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={onMenuClick}
            style={{
              background: 'none',
              border: 'none',
              color: darkMode ? '#fff' : '#333',
              fontSize: '1.5rem',
              cursor: 'pointer'
            }}
          >
            ☰
          </button>
          <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600, color: '#34a853', letterSpacing: '-0.5px' }}>
            Roshni
          </h1>
        </div>

        <ul className="nav-links" style={{ 
          margin: 0, 
          display: 'flex', 
          gap: '1.5rem', 
          listStyle: 'none',
          fontWeight: 500
        }}>
          <li><Link to="/seller" style={{ color: darkMode ? '#e0e0e0' : '#444', textDecoration: 'none' }}>Sell Energy</Link></li>
          <li><Link to="/buyer" style={{ color: darkMode ? '#e0e0e0' : '#444', textDecoration: 'none' }}>Buy Energy</Link></li>
          <li><Link to="/billing" style={{ color: darkMode ? '#e0e0e0' : '#444', textDecoration: 'none' }}>Bills</Link></li>
        </ul>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            title="Toggle dark mode"
            style={{ border: 'none', background: 'transparent', fontSize: '1.2rem', cursor: 'pointer' }}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button
            className="theme-toggle"
            onClick={handleVoiceToggle}
            title={voiceEnabled ? 'Voice enabled' : 'Voice disabled'}
            style={{ border: 'none', background: 'transparent', fontSize: '1.2rem', cursor: 'pointer', opacity: voiceEnabled ? 1 : 0.4 }}
          >
            {voiceEnabled ? '🔊' : '🔇'}
          </button>
        </div>
      </div>
    </nav>
  )
}