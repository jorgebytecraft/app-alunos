import { Link } from "react-router-dom";
//Flexbox Container Vertical
export function Sidebar() {
  return (
    <aside className="flex flex-col w-64 min-h-screen bg-zinc-950 text-white p-4 shadow-xl">
      {/* Parte de cima - Logo */}
      <div className="flex items-center gap-3 pb-6 border-b border-white/10">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold">
          J
        </div>
        <span className="font-bold text-lg">Meu Projeto</span>
      </div>

      {/* Parte do meio - Menu - cresce pra empurrar o resto pra baixo */}
      <nav className="flex flex-col gap-2 py-6 flex-1">
        <Link
          to="/#"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10"
        >
          🏠 Home
        </Link>
        <Link
          to="/students"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          🎓 Alunos
        </Link>
      </nav>
    </aside>
  );
}
