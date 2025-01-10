
import Logo from './Logo';


export default function Header() {
  return (
    <header className="bg-background text-foreground p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <nav className="flex space-x-4">
          <span> Inicio </span>
          <span>ciudades</span>
          <span> Países </span>
          <span>Acerca de </span>
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


