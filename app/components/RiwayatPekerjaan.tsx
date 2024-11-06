function RowPekerjaan(props: any) {
  return (
    <div className="border-b border-gray-300 py-4 mb-4">
      <div className="grid grid-cols-12 text-left">
        <div className="col-span-12 md:col-span-4 text-gray-800 font-semibold">
          <h3 className="text-lg">{props.Sebagai}</h3>
        </div>
        <div className="col-span-12 md:col-span-4 text-gray-800 font-semibold">
          <h3 className="text-lg">{props.instansi}</h3>
        </div>
        <div className="col-span-12 md:col-span-4 text-gray-800 font-semibold">
          <h3 className="text-lg">{props.tahun}</h3>
        </div>
      </div>
    </div>
  );
}

export default function RiwayatPekerjaan() {
  return (
    <div className="container mx-auto p-6 text-left pt-10 bg-white shadow-lg rounded-lg border border-gray-200 mb-10"> {/* Menambahkan mb-10 di sini */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b border-gray-400 pb-2">Riwayat Pekerjaan</h2>
      <RowPekerjaan Sebagai="JABATAN" instansi="PERUSAHAAN" tahun="TAHUN" />
      <RowPekerjaan Sebagai="Direktur" instansi="Masoem Group" tahun="2015" />
      <RowPekerjaan Sebagai="Direktur" instansi="PT. Mitsuba" tahun="2019" />
      <RowPekerjaan Sebagai="Administrasi" instansi="PT. Epson" tahun="2021" />
      <RowPekerjaan Sebagai="Manajer Produksi" instansi="PT. Kahatek" tahun="2020" />
    </div>
  );
}
