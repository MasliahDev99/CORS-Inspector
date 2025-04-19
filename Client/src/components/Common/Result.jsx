import React from "react"


function Result({ result }){
    return (
        <div className="w-full bg-neutral-800 rounded-md p-6 border border-neutral-700 transition-all duration-300">
            <h2 className="text-xl font-semibold text-white mb-3">Resultados:</h2>
            <div className="space-y-2 text-white text-sm">
              {result.url && (
                <div>
                  <span className="text-neutral-400">🔗 URL:</span>
                  <span className="ml-2">{result.url}</span>
                </div>
              )}

              {result.status && (
                <div>
                  <span className="text-neutral-400">📡 Status:</span>
                  <span
                    className={`ml-2 font-semibold ${
                      result.status === 200 ? "text-green-400" : "text-yellow-400"
                    }`}
                  >
                    {result.status}
                  </span>
                </div>
              )}

              {result.cors !== undefined && (
                <div>
                  <span className="text-neutral-400">🛡️ ¿CORS habilitado?</span>
                  <span
                    className={`ml-2 font-semibold ${
                      result.cors ? "text-green-400" : "text-red-500"
                    }`}
                  >
                    {result.cors ? "Sí" : "No"}
                  </span>
                </div>
              )}

              {result.message && (
                <div>
                  <span className="text-neutral-400">📦 Mensaje:</span>
                  <span className="ml-2">{result.message}</span>
                </div>
              )}

              {/* Si existen los headers se muestran  */}
              {result.cors_headers && Object.keys(result.cors_headers).length > 0 && (
                <div>
                  <span className="text-neutral-400">📋 Encabezados CORS encontrados:</span>
                  <div className="bg-neutral-900 mt-2 p-4 rounded border border-neutral-700 text-sm overflow-x-auto">
                    <ul className="list-disc list-inside space-y-1">
                      {Object.entries(result.cors_headers).map(([key, value]) => (
                        <li key={key}>
                          <span className="text-blue-400">{key}</span>:{" "}
                          <span className="text-white">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
    );
}

export default Result;