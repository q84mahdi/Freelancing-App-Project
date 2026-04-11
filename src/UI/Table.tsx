import type { ReactNode } from "react";

function Table({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-auto bg-secondary-0">
      <table>{children}</table>
    </div>
  );
}
export default Table;

function TableHeader({ children }: { children: ReactNode }) {
  return (
    <thead>
      <tr className="title-row">{children}</tr>
    </thead>
  );
}

function TableBody({ children }: { children: ReactNode }) {
  return <tbody>{children}</tbody>;
}

function TableRow({ children }: { children: ReactNode }) {
  return <tr>{children}</tr>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
