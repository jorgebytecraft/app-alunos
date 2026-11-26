import { ReactNode } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Container } from "./Container";

type LayoutProps = {
  children: ReactNode;
};
export function MainLayout({ children }: LayoutProps) {
  return (
    <div className="area-layout">
      <Header />
      {/* Flexbox Container */}
      <div className="area-container-layout">
        <Sidebar />

        <Container>{children}</Container>
      </div>
    </div>
  );
}
