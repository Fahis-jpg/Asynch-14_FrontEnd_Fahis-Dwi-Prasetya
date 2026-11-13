import React, { useState, useEffect } from "react";

export default function App() {
  // 1. Implementasi useState untuk data mahasiswa
  // Data diambil sesuai dengan Screenshot 2026-11-13 at 14.37.14.png
  const [students] = useState([
    {
      nim: "2301001",
      nama: "Andi Saputra",
      noHp: "081234567801",
      email: "andi@mail.com",
      alamat: "Surabaya",
      prodi: "Informatika",
      tahun: "2023",
    },
    {
      nim: "2301002",
      nama: "Budi Santoso",
      noHp: "081234567802",
      email: "budi@mail.com",
      alamat: "Malang",
      prodi: "Sistem Informasi",
      tahun: "2023",
    },
    {
      nim: "2301003",
      nama: "Citra Amelia",
      noHp: "081234567803",
      email: "citra@mail.com",
      alamat: "Lumajang",
      prodi: "Informatika",
      tahun: "2023",
    },
    {
      nim: "2401001",
      nama: "Dinda Putri",
      noHp: "081234567804",
      email: "dinda@mail.com",
      alamat: "Jember",
      prodi: "Manajemen",
      tahun: "2024",
    },
    {
      nim: "2401002",
      nama: "Eko Pratama",
      noHp: "081234567805",
      email: "eko@mail.com",
      alamat: "Kediri",
      prodi: "Informatika",
      tahun: "2024",
    },
  ]);

  // 2. Implementasi useState untuk Live Clock
  const [currentTime, setCurrentTime] = useState(new Date());

  // 3. Implementasi useEffect untuk menjalankan interval waktu
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []); 

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        
        {/* Header & Subheader */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
            Student Management
          </h1>
          <h2 className="text-xl text-gray-500 font-medium">Daftar Data Mahasiswa</h2>
        </div>

        {/* Informasi Mahasiswa & Jam */}
        <div className="flex justify-between items-center mb-6 px-2">
          <div className="text-lg font-semibold text-gray-700 bg-blue-50 px-4 py-2 rounded-lg border border-blue-100">
            Jumlah Mahasiswa: <span className="text-blue-600 text-xl">{students.length}</span>
          </div>
          
          {/* --- JAM --- */}
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-5 py-2 rounded-lg font-mono text-lg tracking-wider shadow-md shadow-purple-200">
            🕒 {currentTime.toLocaleTimeString('id-ID')}
          </div>
        </div>

        {/* Tabel Data Mahasiswa */}
        <div className="overflow-hidden border border-indigo-100 rounded-xl shadow-sm">
          <table className="min-w-full bg-white text-left text-sm text-gray-700">
            
            {/* --- HEADER TABEL BERWARNA BIRU/INDIGO --- */}
            <thead className="bg-indigo-600 font-semibold text-white">
              <tr>
                <th className="px-6 py-4 border-b border-indigo-700 text-center rounded-tl-lg">NIM</th>
                <th className="px-6 py-4 border-b border-indigo-700">Nama</th>
                <th className="px-6 py-4 border-b border-indigo-700">No. HP</th>
                <th className="px-6 py-4 border-b border-indigo-700">Email</th>
                <th className="px-6 py-4 border-b border-indigo-700">Alamat</th>
                <th className="px-6 py-4 border-b border-indigo-700 text-center">Prodi</th>
                <th className="px-6 py-4 border-b border-indigo-700 text-center rounded-tr-lg">Tahun</th>
              </tr>
            </thead>
            
            <tbody>
              {students.map((student) => (
                // Efek hover berwarna ungu muda
                <tr key={student.nim} className="hover:bg-indigo-50 transition-all duration-200 border-b border-gray-100 last:border-0">
                  <td className="px-6 py-4 text-center font-medium text-gray-900">{student.nim}</td>
                  <td className="px-6 py-4 font-semibold text-indigo-900">{student.nama}</td>
                  <td className="px-6 py-4">{student.noHp}</td>
                  <td className="px-6 py-4 text-pink-600 hover:text-pink-800 cursor-pointer">{student.email}</td>
                  <td className="px-6 py-4">{student.alamat}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">
                      {student.prodi}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center font-medium">{student.tahun}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  );
}