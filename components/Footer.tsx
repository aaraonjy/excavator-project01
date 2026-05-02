export default function Footer() {
  return (
    <footer className="bg-slate-100 px-5 py-12 text-slate-900">
      <div className="mx-auto max-w-7xl text-sm text-slate-600">
        <p className="font-black text-slate-950">EXCAVATOR<span className="text-yellow-500">CO</span></p>
        <p className="mt-3 max-w-xl">Professional excavation services for construction and on-site projects.</p>
        <p className="mt-8">© {new Date().getFullYear()} EXCAVATORCO. All rights reserved.</p>
      </div>
    </footer>
  );
}
