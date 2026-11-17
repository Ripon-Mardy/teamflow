import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-950 text-white">
        <header className="border-b border-slate-800 px-8 py-5">
          <h1 className="text-2xl font-bold">TeamFlow</h1>
          <p className="mt-1 text-sm text-slate-400">
            Team and Project Management Platform
          </p>
        </header>

        <main className="mx-auto max-w-7xl px-8 py-12">
          <h2 className="text-3xl font-bold">Welcome to TeamFlow</h2>

          <p className="mt-3 text-slate-400">
            Manage your projects, teams and tasks in one place.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-sm text-slate-400">Total Projects</p>
              <h3 className="mt-3 text-3xl font-bold">12</h3>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-sm text-slate-400">Active Tasks</p>
              <h3 className="mt-3 text-3xl font-bold">48</h3>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-sm text-slate-400">Completed Tasks</p>
              <h3 className="mt-3 text-3xl font-bold">126</h3>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
