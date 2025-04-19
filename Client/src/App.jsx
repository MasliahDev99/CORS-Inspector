import { useState } from "react"
import { corsAdapter } from "./adapters/corsAdapter"
import Form from "./components/Common/Form"
import Result from "./components/Common/Result"
import { isValidUrl } from "./libs/utils"

function App() {
  const [showResults, setShowResults] = useState(false)
  const [result, setResult] = useState(null)
  const [url, setUrl] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setShowResults(true)
    setResult({ message: "🔎 Analizando..." })

    try {
      if(!isValidUrl(url)){
        setResult({ message: "❌ URL inválida" })
        return;
      }
      const corsResult = await corsAdapter.corsInspector(url)
      if (!corsResult) throw new Error("Error de CORS")
      setResult(corsResult)
    } catch (error) {
      setResult({ message: "❌ Error al analizar CORS" })
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-start px-4">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl mt-20">
      <h1 className="text-8xl font-bold  text-white text-center mb-12">CORS <span className="text-blue-500 hover:text-blue-600 hover:gradient-to-r from-blue-500 to-blue-700 transition duration-300 ease-in-out ">INSPECTOR🕵</span></h1>
        <Form url={url} setUrl={setUrl} handleSubmit={handleSubmit} />
        {showResults && result && (
          <Result result={result} />
        )}
      </div>
    </div>
  )
}

export default App