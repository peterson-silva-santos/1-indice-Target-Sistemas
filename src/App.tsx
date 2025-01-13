import React, { useState } from 'react';
import { Play } from 'lucide-react';

function App() {
  const [result, setResult] = useState<number | null>(null);

  const calculateSum = () => {
    let INDICE = 13;
    let SOMA = 0;
    let K = 0;

    while (K < INDICE) {
      K = K + 1;
      SOMA = SOMA + K;
    }

    setResult(SOMA);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Code Execution Demo
        </h1>
        
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            Código Original:
          </h2>
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm whitespace-pre-wrap">
{`int INDICE = 13, SOMA = 0, K = 0;
enquanto K < INDICE faça {
    K = K + 1;
    SOMA = SOMA + K;
}
imprimir(SOMA);`}
          </pre>
        </div>

        <div className="flex justify-center mb-8">
          <button
            onClick={calculateSum}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <Play size={20} />
            Executar Código
          </button>
        </div>

        {result !== null && (
          <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Resultado:
            </h2>
            <p className="text-2xl font-bold text-indigo-600">
              SOMA = {result}
            </p>
            <p className="mt-4 text-gray-600">
              O algoritmo soma todos os números de 1 até 13, resultando em 91.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;