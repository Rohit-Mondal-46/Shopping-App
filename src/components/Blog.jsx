import React from 'react';

function Blog() {
  return (
    <div className="w-full h-full flex flex-col items-center bg-gradient-to-r from-blue-400 to-purple-500 p-4">
      <h1 className="text-3xl font-bold text-white mb-4">About Our Shopping App</h1>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-2">About Us</h2>
          <p className="text-gray-600">
            Welcome to our shopping app! We are dedicated to providing you with the best online shopping experience. Our app offers a wide range of products, from electronics to fashion, all at competitive prices.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to make online shopping easy, convenient, and enjoyable. We strive to offer high-quality products, excellent customer service, and a seamless shopping experience.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">How to Shop</h2>
          <p className="text-gray-600">
            Shopping with us is simple:
          </p>
          <ol className="list-decimal list-inside text-gray-600">
            <li>Browse our product categories or use the search bar to find specific items.</li>
            <li>Add your desired products to the cart.</li>
            <li>Proceed to checkout and enter your shipping and payment information.</li>
            <li>Confirm your order and wait for your products to be delivered to your doorstep.</li>
          </ol>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions or need assistance, feel free to contact our customer support team at support@shoppingapp.com or call us at (123) 456-7890. We are here to help!
          </p>
        </section>
      </div>
    </div>
  );
}

export default Blog;