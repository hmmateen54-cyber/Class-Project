import React from "react";
import { AlignHorizontalDistributeEnd } from "lucide-react";

function Footer() {
  return (
    <div className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-4">MyStore</h2>
          <p className="text-gray-400 text-sm">
            Your one-stop shop for the best products at the best prices. Quality
            and trust is our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Products</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <p className="text-gray-400 text-sm mb-2">
            Email: support@mystore.com
          </p>
          <p className="text-gray-400 text-sm mb-4">Phone: +92 300 1234567</p>

          <div className="flex gap-4">
            <AlignHorizontalDistributeEnd className="cursor-pointer hover:text-blue-500" />
            <AlignHorizontalDistributeEnd className="cursor-pointer hover:text-pink-500" />
            <AlignHorizontalDistributeEnd className="cursor-pointer hover:text-blue-400" />
            <AlignHorizontalDistributeEnd className="cursor-pointer hover:text-red-400" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
        © 2026 MyStore. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
