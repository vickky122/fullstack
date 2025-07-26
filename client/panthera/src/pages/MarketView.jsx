export default function MarketView() {
  const cardClass = "p-4 bg-white rounded-xl shadow text-center";

  return (
    <div className="space-y-6">
      {/* Gradient Banner Card */}
      <div className="bg-gradient-to-r from-black via-purple-900 to-blue-800 text-white rounded-2xl p-8 shadow-md">
        <h1 className="text-2xl font-bold mb-2">Revolutionising Real Estate with Data Science</h1>
        <p className="text-white text-sm max-w-xl">
          Harness actionable intelligence to simplify, optimise, and transform your real estate strategies.
        </p>
        <div className="mt-4 flex gap-4">
          <button className="bg-white text-black px-4 py-2 rounded-md font-medium">Download Now</button>
          <button className="text-white underline font-medium">Watch Video</button>
        </div>
      </div>

      {/* Two-Column Grid (2 Tables Side-by-Side) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={cardClass}>
          <h3 className="text-lg font-semibold mb-2">Top 10 MSA by Homes Closed</h3>
          <table className="table-auto w-full text-left text-sm">
            <thead className="text-gray-400 border-b">
              <tr><th>MSA</th><th>Closed</th></tr>
            </thead>
            <tbody>
              {Array(5).fill().map((_, idx) => (
                <tr key={idx} className="border-t">
                  <td>Orlando-Kissimmee</td>
                  <td>8000</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={cardClass}>
          <h3 className="text-lg font-semibold mb-2">Top 10 MSA by Price Increase</h3>
          <table className="table-auto w-full text-left text-sm">
            <thead className="text-gray-400 border-b">
              <tr><th>MSA</th><th>Increase</th></tr>
            </thead>
            <tbody>
              {Array(5).fill().map((_, idx) => (
                <tr key={idx} className="border-t">
                  <td>Austin-Round Rock</td>
                  <td>16%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
