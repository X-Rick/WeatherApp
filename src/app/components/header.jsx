import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-background text-foreground p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">WeatherApp</Link>
        </div>
        <nav className="flex space-x-4">
          <Link href="/">Inicio</Link>
          <Link href="/ciudades">Ciudades</Link>
          <Link href="/paises">Países</Link>
          <Link href="/acerca">Acerca de</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Buscar ciudad o país"
            className="p-2 border rounded"
          />
          <button className="p-2">🌙</button>
        </div>
      </div>
    </header>
  );
}


