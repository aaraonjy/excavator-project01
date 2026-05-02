export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/60123456789?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20your%20excavation%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-black/25 transition hover:scale-105 hover:bg-green-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M16.04 3C8.86 3 3.02 8.82 3.02 15.98c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.73a13.03 13.03 0 0 0 6.36 1.62c7.18 0 13.02-5.82 13.02-12.98C29.06 8.82 23.22 3 16.04 3Zm0 23.66c-2.03 0-4.02-.55-5.76-1.58l-.41-.24-3.96 1.03 1.06-3.85-.27-.43a10.66 10.66 0 0 1-1.45-5.61c0-5.93 4.84-10.75 10.79-10.75s10.79 4.82 10.79 10.75-4.84 10.68-10.79 10.68Zm5.91-8.01c-.32-.16-1.9-.94-2.2-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.18.21-.37.24-.69.08-.32-.16-1.36-.5-2.6-1.6-.96-.86-1.61-1.92-1.8-2.24-.18-.32-.02-.5.14-.66.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.48 4.84.77.33 1.37.53 1.83.68.77.24 1.47.21 2.03.13.62-.09 1.9-.78 2.17-1.52.27-.75.27-1.39.19-1.52-.08-.14-.29-.22-.61-.38Z" />
      </svg>
    </a>
  );
}
