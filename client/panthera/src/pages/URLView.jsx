import React from "react";

const logos = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/8/8f/KB_Home_logo.svg", alt: "KB Home" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/3/34/NVR_Logo.svg", alt: "NVR" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Lennar_Logo.svg", alt: "Lennar" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/3/34/Richmond_American_Homes_logo.svg", alt: "Richmond" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Tri_Pointe_Homes_logo.svg", alt: "Tri Pointe" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/2/24/Smith_Douglas_Homes_logo.svg", alt: "Smith Douglas" },
];

export default function URLsView() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Builder Logos</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {logos.map((logo, idx) => (
          <div key={idx} className="bg-white shadow rounded-xl p-4 flex items-center justify-center">
            <img src={logo.src} alt={logo.alt} className="h-12 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}
