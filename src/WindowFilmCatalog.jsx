import React from 'react';

const catalogData = [
  { model: 'AG40', cat: 'Daily', vlt: '40%', irr940: '93%', irr1400: '95%' },
  { model: 'AG60', cat: 'Daily', vlt: '15%', irr940: '93%', irr1400: '95%' },
  { model: 'AG80', cat: 'Daily', vlt: '5%', irr940: '93%', irr1400: '95%' },
  { model: 'TG40', cat: 'Premium', vlt: '40%', irr940: '96%', irr1400: '99%' },
  { model: 'TG60', cat: 'Premium', vlt: '15%', irr940: '96%', irr1400: '99%' },
  { model: 'TG80', cat: 'Premium', vlt: '5%', irr940: '96%', irr1400: '99%' },
];

export default function WindowFilmCatalog() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Katalog Window Film</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Model</th>
            <th className="p-2 border">Kategori</th>
            <th className="p-2 border">VLT</th>
            <th className="p-2 border">IRR (940)</th>
            <th className="p-2 border">IRR (1400)</th>
          </tr>
        </thead>
        <tbody>
          {catalogData.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-2 border font-semibold">{item.model}</td>
              <td className="p-2 border">{item.cat}</td>
              <td className="p-2 border">{item.vlt}</td>
              <td className="p-2 border">{item.irr940}</td>
              <td className="p-2 border">{item.irr1400}</td> {/* TAMBAHKAN BARIS INI */}
            </tr>
          ))}
        </tbody>
      </table>
      <a 
        href="https://wa.me/6287886876139" // Ganti dengan nomor admin Anda
        className="mt-4 block text-center bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
      >
        Tanya Admin Tentang Kaca Film
      </a>
    </div>
  );
}