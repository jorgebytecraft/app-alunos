//Flexbox Container Horizontal
export function Header() {
  return (
    <header className="flex h-16 bg-white border-b border-zinc-200 items-center justify-between px-6 shadow-sm">
      {/* Esquerda - Título da página */}
      <div className="flex flex-col">
        <h1 className="font-bold text-lg">Dashboard</h1>
        <span className="text-xs text-zinc-500">Bem-vindo de volta, Jorge</span>
      </div>
      <div className="flex items-center gap-4">
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
          + Novo Aluno
        </button>
      </div>
    </header>
  );
}
