import React, { useState } from 'react';

function App() {
  const [selectedTime, setSelectedTime] = useState('');
  const [showClock, setShowClock] = useState(false);

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
    setShowClock(true);
  };

  // Función para formatear la hora en formato de 12 horas con AM/PM
  const formatTime = (timeString) => {
    if (!timeString) return '';
    
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    
    return `${hour12}:${minutes} ${ampm}`;
  };

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      maxWidth: '400px', 
      margin: '50px auto',
      padding: '20px',
      boxShadow: '0 0 10px rgba(80, 0, 241, 0.1)',
      borderRadius: '8px'
    }}>
      <h2 style={{ color: '#333' }}>Selector de Hora con Reloj</h2>
      
      <label htmlFor="timeInput" style={{ display: 'block', marginBottom: '10px' }}>
        Selecciona una hora:
      </label>
      <input
        id="timeInput"
        type="time"
        value={selectedTime}
        onChange={handleTimeChange}
        style={{
          padding: '10px',
          fontSize: '16px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          width: '100%',
          marginBottom: '20px'
        }}
      />
      
      {showClock && selectedTime && (
        <div style={{
          marginTop: '20px',
          textAlign: 'center',
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          border: '1px solid #ddd'
        }}>
          <h3 style={{ marginTop: '0', color: '#555' }}>Hora seleccionada:</h3>
          <div style={{
            fontSize: '28px',
            fontWeight: 'bold',
            margin: '15px 0',
            color: '#2c3e50'
          }}>
            {formatTime(selectedTime)}
          </div>
          
          {/* Reloj analógico simple */}
          <div style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            border: '10px solid #2c3e50',
            margin: '0 auto',
            position: 'relative',
            background: '#fff'
          }}>
            {/* Manecilla de horas */}
            <div style={{
              position: 'absolute',
              top: '25%',
              left: '50%',
              width: '6px',
              height: '50px',
              backgroundColor: '#2c3e50',
              transformOrigin: 'bottom center',
              transform: `translateX(-50%) rotate(${(parseInt(selectedTime.split(':')[0]) % 12) * 30}deg)`,
              borderRadius: '4px'
            }}></div>
            
            {/* Manecilla de minutos */}
            <div style={{
              position: 'absolute',
              top: '10%',
              left: '50%',
              width: '4px',
              height: '65px',
              backgroundColor: '#7f8c8d',
              transformOrigin: 'bottom center',
              transform: `translateX(-50%) rotate(${parseInt(selectedTime.split(':')[1]) * 6}deg)`,
              borderRadius: '4px'
            }}></div>
            
            {/* Centro del reloj */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '12px',
              height: '12px',
              backgroundColor: '#2c3e50',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)'
            }}></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;