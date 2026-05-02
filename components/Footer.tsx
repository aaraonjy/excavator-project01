export default function Footer() {
  return (
    <footer className="bg-construction-dark px-5 py-12 text-white">
      <div className="mx-auto max-w-7xl text-sm text-white/65">
        <p className="font-black text-white">EXCAVATOR<span className="text-construction-yellow">CO</span></p>
        <p className="mt-3 max-w-xl">Professional excavation services for construction and on-site projects.</p>
        <p className="mt-8">© {new Date().getFullYear()} EXCAVATORCO. All rights reserved.</p>
      </div>
    </footer>
  );
}
