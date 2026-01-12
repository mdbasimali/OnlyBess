const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20">
      {/* TOP LINE */}
      <div className="border-t border-gray-700" />

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

          {/* LOGO (LEFT PUSHED) */}
          <div className="-ml-4">
            <h1 className="text-6xl font-extrabold tracking-wider">
              ONLYBEES<span className="text-white">.</span>
            </h1>
          </div>

          {/* EXPLORE */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer">About</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer">Contact us</li>
              <li className="hover:text-white cursor-pointer">Refund</li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="border-t border-gray-700" />

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">

        {/* LEFT */}
        <p>
          Copyright © Onlybees 2025, KL & Sons - ONLYBEES
        </p>

        {/* RIGHT */}
        <div className="flex items-center gap-6">

          <span className="hover:text-white cursor-pointer">
            Privacy Policy
          </span>

          <span className="hover:text-white cursor-pointer">
            Terms & Conditions
          </span>

          {/* SOCIAL ICONS (BIGGER + WHATSAPP ADDED) */}
          <div className="flex items-center gap-5 text-white">

            {/* Facebook */}
            <a href="#" className="hover:text-[#00FF38] transition">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.3V12h2.3V9.8c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.4l-.4 2.9h-2v7A10 10 0 0 0 22 12Z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" className="hover:text-[#00FF38] transition">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#" className="hover:text-[#00FF38] transition">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.6h.1a4.2 4.2 0 0 1 3.8-2.1c4 0 4.7 2.6 4.7 6V21h-4v-5.4c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21h-4V9Z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a href="#" className="hover:text-[#00FF38] transition">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.9-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20Zm4.3-5.8c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.8-3.3c-.1-.2 0-.4.1-.5l.6-.7c.1-.2.1-.4.1-.6l-.5-1.3c-.1-.3-.3-.3-.5-.3h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.1s.9 2.4 1 2.6a9.6 9.6 0 0 0 4.1 3.6c.5.2.9.3 1.2.4.5.2 1 .2 1.4.1.4-.1 1.2-.5 1.4-1 .2-.5.2-.9.1-1-.1-.1-.2-.2-.4-.3Z" />
              </svg>
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
