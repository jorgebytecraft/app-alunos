import { Link } from "react-router-dom";
export function Sidebar() {
  return (
    /* Flexbox Container */
    <aside className="area-container-sidebar">
      {/*  Flexbox Componente  Parte de cima - Logo */}
      <div className="component-container-profile">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold">
          J
        </div>
        <span className="font-bold text-lg">Meu Projeto</span>
      </div>

      {/* Flexbox Componente Parte do meio - Menu - cresce pra empurrar o resto pra baixo */}
      <nav className="component-container-nav">
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
