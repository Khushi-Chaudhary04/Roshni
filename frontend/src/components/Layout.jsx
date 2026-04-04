import { useState } from 'react'
import Navbar from './Navbar'
import SideNav from './SideNav'
import FeederSelector from './FeederSelector'

export default function Layout({
  children,
  darkMode,
  setDarkMode,
  selectedHouseId,
  setSelectedHouseId,
  selectedFeeder,
  setSelectedFeeder,
}) {
  const [sidenavOpen, setSidenavOpen] = useState(false)

  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onMenuClick={() => setSidenavOpen(!sidenavOpen)}
      />
      
      <SideNav
        isOpen={sidenavOpen}
        onClose={() => setSidenavOpen(false)}
      />

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', marginTop: '1rem', padding: '0 1.5rem' }} className="container">
        <div style={{ flex: 1 }}>
          <FeederSelector
            selectedFeeder={selectedFeeder}
            setSelectedFeeder={setSelectedFeeder}
            selectedHouseId={selectedHouseId}
            setSelectedHouseId={setSelectedHouseId}
          />
        </div>
      </div>

      <main className="container" style={{ paddingBottom: '4rem', minHeight: '60vh' }}>
        {children}
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '3rem 1rem',
        borderTop: darkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
        marginTop: 'auto',
        color: darkMode ? '#888' : '#aaa',
        fontSize: '0.9rem'
      }}>
        <p>Roshni — Renewable Energy for Everyone</p>
        <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.7 }}>
          Feeder: {selectedFeeder}
        </p>
      </footer>
    </div>
  )
}