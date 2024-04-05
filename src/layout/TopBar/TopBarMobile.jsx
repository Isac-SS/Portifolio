import Link from 'next/link'

function TopBar() {
  return (
    <div className="topbar">
      <h1>LOGO</h1>
      <nav className="nav-container">
        <div className="nav-item">
          <Link href="/" title="Home">
            Home
          </Link>
        </div>
        <div className="nav-item">
          <Link href="/experiencia" title="Experiência">
            Experiência
          </Link>
        </div>
        <div className="nav-item">
          <Link href="/projetos" title="Projetos">
            Projetos
          </Link>
        </div>
      </nav>
      <div>
        <p>Dark mode</p>
        <p>PT | EN</p>
      </div>
    </div>
  );
}

export default TopBar;
