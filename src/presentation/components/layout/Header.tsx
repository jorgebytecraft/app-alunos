//Flexbox Container
export function Header() {
  return (
    /* Flexbox Container */
    <header className="area-container-header">
      {/* Flexbox Componente Esquerda - Título da página */}
      <div className="component-container-title">
        <h1 className="font-bold text-lg">Dashboard</h1>
        <span className="text-xs text-zinc-500">Bem-vindo de volta, Jorge</span>
      </div>
      {/* Flexbox Componente Direita - Botão de Pesquisa da página */}
      <div className="component-container-search">
        <input
          placeholder="Buscar aluno..."
          className="
            w-64
            rounded-lg
            border
            border-zinc-300
            px-3
            py-2
            outline-none
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-200
          "
        />

        <button
          className="
            rounded-lg
            bg-blue-600
            px-4
            py-2
            font-medium
            text-white
            transition-colors
            hover:bg-blue-700
          "
        >
          Buscar
        </button>
      </div>
    </header>
  );
}
