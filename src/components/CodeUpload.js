import React, { useState } from 'react';
import { analyzeCode } from '../services/apiService';
import '../App.css';


const CodeUpload = () => {
  const [code, setCode] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!code.trim()) {
      setError('Por favor, ingresa código antes de enviar.');
      return;
    }

    const data = { code }; // Aquí solo pasamos el objeto sin manipular las comillas

    try {
      console.log('Código a enviar:', data); // Verificar lo que estamos enviando
      const result = await analyzeCode(data); // Pasar directamente el objeto 'data'
      setAnalysisResult(result);
      setError('');
    } catch (err) {
      setError('Error al analizar el código. Inténtalo de nuevo.');
      console.error('Error:', err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          rows="10"
          cols="50"
          placeholder="Ingresa tu código aquí..."
        />
        <button type="submit">Analizar</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {analysisResult && (
        <div className="response-container">
          <h3>Resultado del análisis:</h3>
          <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CodeUpload;
