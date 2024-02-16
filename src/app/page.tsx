'use client'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import './page.module.css';

export default function Home() {
  return (

    <div className="d-flex h-100 vh-100 text-center text-white bg-dark">

      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-auto">
          <div>
            <h3 className="float-md-start mb-0">Noveler</h3>
            <Nav className="nav-masthead justify-content-center float-md-end">
              <Nav.Link className="active" aria-current="page" href="#">Home</Nav.Link>
              <Nav.Link href="#">Features</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </div>
        </header>

        <main className="px-3">
          <h1>Noveler</h1>
          <p className="lead">A place to write.</p>
          <p className="lead">
            <Button href="#" className="btn-lg btn-secondary fw-bold border-white bg-white text-black">Learn more</Button>
          </p>
        </main>

        <footer className="mt-auto text-white-50">
          <p>&copy; Copyright 2024 Noveler</p>
        </footer>
      </div>
    </div>
  );
}
