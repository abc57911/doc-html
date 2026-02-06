// 資料表格元件
import { TableRow } from '../data/types';

interface DataTableProps {
  title: string;
  data: TableRow[];
}

export function DataTable({ title, data }: DataTableProps) {
  return (
    <section className="section" data-filter="all">
      <div className="section-header">
        <h2>{title}</h2>
      </div>
      <div className="table-responsive">
        <table className="data-table">
          <thead>
            <tr>
              <th>名稱</th>
              <th>描述</th>
              <th>關聯 Skills</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td><code>{row.name}</code></td>
                <td>{row.description}</td>
                <td>{row.relatedSkills}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
