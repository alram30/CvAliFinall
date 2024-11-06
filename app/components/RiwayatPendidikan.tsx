function RowRiwayat(props: any) {
  return (
    <div className="border-b border-gray-300 py-4 mb-4"> {/* Menggunakan border bawah untuk memisahkan setiap entri */}
      <div className="grid grid-cols-12 text-left">
        <div className="col-span-12 md:col-span-4 text-gray-800 font-semibold">
          <h3 className="text-lg">{props.jenjang}</h3>
        </div>
        <div className="col-span-12 md:col-span-4 text-gray-800 font-semibold">
          <h3 className="text-lg">{props.sekolah}</h3>
        </div>
        <div className="col-span-12 md:col-span-4 text-gray-800 font-semibold">
          <h3 className="text-lg">{props.tahun}</h3>
        </div>
      </div>
    </div>
  );
}

export default function RiwayatPendidikan() {
  return (
    <div className="container mx-auto p-6 text-left pt-10 bg-white shadow-lg rounded-lg border border-gray-200 mb-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b border-gray-400 pb-2">Riwayat Pendidikan</h2>
      <RowRiwayat jenjang="JENJANG PENDIDIKAN" sekolah="SEKOLAH" tahun="TAHUN" />
      <RowRiwayat jenjang="SD" sekolah="SDN BAROS" tahun="2011" />
      <RowRiwayat jenjang="SMP" sekolah="SMPN 1 SODONGHILIR" tahun="2014" />
      <RowRiwayat jenjang="SMA" sekolah="SMA ALMASOEM" tahun="2021" />
      <RowRiwayat jenjang="Sarjana" sekolah="Masoem University" tahun="2025" />
    </div>
  );
}
