import { ReactNode } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Container } from "./Container";

type LayoutProps = {
  children: ReactNode;
};
// Flexbox container Central
export function MainLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <div className="flex">
        <Sidebar />

        <Container>{children}</Container>
      </div>
    </div>
  );
}
