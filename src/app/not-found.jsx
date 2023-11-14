import Link from "next/link";

export const metadata = {
    title: 'Error 404',
}

export default function Error() {
  return (
    <main className="error-page">
      <div>
        <h1>ERROR 404 - PÁGINA NÃO EXISTENTE!</h1>
        <h2>
          Clique <Link href="/">AQUI</Link> para voltar ao início.
        </h2>
      </div>
    </main>
  );
}