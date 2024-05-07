import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white p-6 mt-4">
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div>
            <h2 className="font-bold mb-2 text-xl">
            Solutions
              <li className="text-sm list-none">Marketing</li>
              <li className="text-sm list-none">Analytics</li>
              <li className="text-sm list-none">Commerce</li>
              <li className="text-sm list-none">Insights</li>
            </h2>
       
          </div>
          <div>
            <h2 className="font-bold mb-2 text-xl">
            Support
              <li className="text-sm list-none">Pricing</li>
              <li className="text-sm list-none">Documentation</li>
              <li className="text-sm list-none">Guides</li>
              <li className="text-sm list-none">API Status</li>
            </h2>
          </div>
          <div>
            <h2 className="font-bold mb-2 text-xl">
            Company
            <li className="text-sm list-none">About</li>
            <li className="text-sm list-none">Blog</li>
            <li className="text-sm list-none">Jobs</li>
            <li className="text-sm list-none">Press</li>
            </h2>
          </div>
          <div>
            <h2 className="font-bold mb-2 text-xl">
            Legal
            <li className="text-sm list-none">Claim</li>
            <li className="text-sm list-none">Privacy</li>
            <li className="text-sm list-none">Terms</li>
            </h2>
          </div>
        </div>
        <div className="bg-gray-700 p-4 rounded">
          <h2 className="font-bold mb-2">Subscribe to our newsletter</h2>
          <form>
            <input
              type="email"
              className="p-2 rounded bg-white text-black w-full mb-2"
              placeholder="Your email address"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
        <p className="text-center mt-6">© 2024 Rohit_46. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Footer;
