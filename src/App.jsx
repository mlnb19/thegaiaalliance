
import './App.css'

function App() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Gradient blob */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-pink-600 via-red-500 to-purple-700 blur-3xl opacity-50 rounded-full"></div>
      
      <div className="container mx-auto px-4 py-8 relative">
        {/* Profile images */}
        <div className="flex -space-x-2 mb-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-12 h-12 rounded-full border-2 border-black overflow-hidden bg-gray-300">
              <div className="w-full h-full bg-gray-400"></div>
            </div>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-white text-5xl font-bold mb-8">
          VÄLKOMMEN,<br />ALICE
        </h1>

        {/* Navigation */}
        <nav className="flex justify-end gap-8 text-white">
          <a href="#profil" className="hover:text-gray-300">Profil</a>
          <a href="#faq" className="hover:text-gray-300">FAQ</a>
          <a href="#kontakt" className="hover:text-gray-300">KONTAKT</a>
        </nav>
      </div>
    </main>
  )
}

export default App
