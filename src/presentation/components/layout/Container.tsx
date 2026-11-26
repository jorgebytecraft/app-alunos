//Grid container
export function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1 bg-slate-100 p-6">
      <div className="max-w-7xl mx-auto">{children}</div>
    </main>
  );
}
