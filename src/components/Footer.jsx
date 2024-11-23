import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-8">
      <div className="flex justify-around">
        <div>
          <h2 className="font-bold mb-2 text-xl">Company</h2>
          <ul>
            <li className="text-sm list-none">About Us</li>
            <li className="text-sm list-none">Careers</li>
            <li className="text-sm list-none">Contact</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-2 text-xl">Legal</h2>
          <ul>
            <li className="text-sm list-none">Claim</li>
            <li className="text-sm list-none">Privacy</li>
            <li className="text-sm list-none">Terms</li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-700 p-4 rounded mt-4 text-center">
        <span className="text-sm">© 2023 Your Company. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
