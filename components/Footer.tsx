export default function Footer() {
  return (
    <footer className="bg-black px-5 py-10 text-white">
      <div className="mx-auto max-w-7xl text-sm text-white/70">
        <p className="font-bold text-white">EXCAVATORCO</p>
        <p className="mt-2">Professional excavation services for construction and on-site projects.</p>
        <p className="mt-6">© {new Date().getFullYear()} EXCAVATORCO. All rights reserved.</p>
      </div>
    </footer>
  );
}
