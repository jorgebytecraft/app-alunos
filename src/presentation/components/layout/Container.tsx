export function Container({ children }: { children: React.ReactNode }) {
  return (
    /* Flexbox Container */
    <main className="area-container-container">
      {/* Flexbox Componente */}
      <div className="component-container-fluid">{children}</div>
    </main>
  );
}
