import { MainLayout } from "../../components/layout/MainLayout";

export function Students() {
  return (
    /*Grid */
    <MainLayout>
      <div className="grid grid-cols-1 gap-3">
        {/* Formulário */}
        <div className="bg-white rounded-lg shadow p-4">...</div>

        {/* Tabela */}
        <div className="bg-white rounded-lg shadow p-4">
          <table className="border-2 w-full p-4">
            <thead className="border-2">
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Curso</th>
                <th>Data de Nascimento</th>
                <th>CNPJ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Jose</td>
                <td>ADS</td>
                <td>jose@gmail.com</td>
                <td>20-10-2001</td>
                <td>12345678901234</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
}
