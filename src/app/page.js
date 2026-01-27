'use client';

import { useState } from 'react';
import FinPlateForm from '../components/FinPlateForm';
import Results from '../components/Results';

export default function HomePage() {
  const [inputs, setInputs] = useState({});
  const [results, setResults] = useState(null);

  return (
    <main>
      <h1>Fin Plate Connection Check</h1>

      <FinPlateForm
        inputs={inputs}
        setInputs={setInputs}
        setResults={setResults}
      />

      {results && <Results results={results} />}
    </main>
  );
}
