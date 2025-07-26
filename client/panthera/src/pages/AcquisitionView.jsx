import React from "react";

export default function AcquisitionView() {
  return (
    <div className="p-8 space-y-6">
      <div className="rounded-2xl overflow-hidden relative h-52 bg-gradient-to-r from-purple-700 to-black text-white p-6">
        <h1 className="text-2xl font-bold">Revolutionising Real Estate with Data Insights</h1>
        <p className="mt-2 max-w-md">Harness actionable intelligence to simplify, optimise, and transform your real estate strategies.</p>
        <button className="mt-4 bg-white text-black px-4 py-2 rounded-md">Discover now</button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded-xl shadow">
          <p className="text-sm text-gray-500">Community</p>
          <p className="text-xl font-semibold">1,781</p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow">
          <p className="text-sm text-gray-500">Total Homes</p>
          <p className="text-xl font-semibold">1,781</p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow">
          <p className="text-sm text-gray-500">Average Price Per Sq Ft</p>
          <p className="text-xl font-semibold">$207</p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow">
          <p className="text-sm text-gray-500">Total No. of Homes Sold</p>
          <p className="text-xl font-semibold">169,580</p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow">
          <p className="text-sm text-gray-500">Sales Price</p>
          <p className="text-xl font-semibold">$9999</p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow">
          <p className="text-sm text-gray-500">Price Increase</p>
          <p className="text-xl font-semibold">$9999</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24176.636026827418!2d-73.99108329322593!3d40.73061035632244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af180af52d%3A0x77f1a3cf36b593d1!2sNew%20York%20City!5e0!3m2!1sen!2sin!4v1617184324034!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {Array(6).fill("All").map((label, idx) => (
          <select key={idx} className="bg-white rounded-xl px-4 py-2 w-full text-gray-700 border border-gray-200">
            <option>{label}</option>
          </select>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <table className="table-auto w-full text-sm text-left">
          <thead className="text-gray-500 border-b">
            <tr>
              {['Builder', 'Lots', 'Price', 'Sq. ft', 'Average Price / Sq.ft'].map((col) => (
                <th key={col} className="pb-2 pr-4">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {['Blue Velvet Group', 'Mulholland Drive', 'Eraser Head', 'Lost Highway', 'Twin Peaks'].map((name, idx) => (
              <tr key={idx} className="border-t">
                <td className="py-2 pr-4">{name}</td>
                <td className="py-2 pr-4">3 Roots</td>
                <td className="py-2 pr-4">$999,988</td>
                <td className="py-2 pr-4">4322</td>
                <td className="py-2 pr-4">699</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}