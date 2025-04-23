import { Link, Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="min-h-screen min-w-screen flex justify-center bg-gray-50">
      <div className="w-full max-w-4xl flex flex-col">
        <header className="bg-blue-900 text-white p-4">
          <nav className="px-4 py-4 flex gap-4 max-w-4xl mx-auto">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>

        <main className="flex-1 px-4 py-8">
          <div className="max-w-4xl w-full">
            <Outlet />
          </div>
        </main>

        <footer className="bg-gray-100 text-center py-2 text-sm">© 2025</footer>
      </div>
    </div>
  );
}