import React from "react";
import { Trophy, TableIcon, BarChart4, Info } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card";
import {
  BarChart,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Line,
  ResponsiveContainer,
} from "recharts";

const formatNumber = (num : any) => {
  if (num === null || num === undefined) return "";
  return typeof num === "number" ? num.toLocaleString("id-ID") : num;
};

const PolresDashboard = () => {
  // Data polres berdasarkan gambar tabel
  const polresData = [
    {
      no: 1,
      polres: "PEKANBARU",
      jmlDesa: 83,
      jmlKec: 15,
      jmlPolisi: 83,
      jmlPenggerak: 20,
      desaPercont: 63,
      desaNonPercont: 105,
      pekaranganIII: 171,
      pekaranganIV: 66,
      pertamBahan: 13,
      perikan: 3,
      peternak: 155,
      holikultura: "11,88 HA",
      luasLahanIII: "12,71",
      luasLahanIV: "0,83",
      pertamBahanLuas: "-",
    },
    {
      no: 2,
      polres: "DUMAI",
      jmlDesa: 36,
      jmlKec: 7,
      jmlPolisi: 36,
      jmlPenggerak: 12,
      desaPercont: 24,
      desaNonPercont: 135,
      pekaranganIII: 135,
      pekaranganIV: 0,
      pertamBahan: 5,
      perikan: 5,
      peternak: 125,
      holikultura: "9,06 HA",
      luasLahanIII: "9,06",
      luasLahanIV: "-",
      pertamBahanLuas: "-",
    },
    {
      no: 3,
      polres: "INHIL",
      jmlDesa: 236,
      jmlKec: 20,
      jmlPolisi: 236,
      jmlPenggerak: 40,
      desaPercont: 196,
      desaNonPercont: 483,
      pekaranganIII: 483,
      pekaranganIV: 0,
      pertamBahan: 29,
      perikan: 5,
      peternak: 449,
      holikultura: "21,33 HA",
      luasLahanIII: "21,33",
      luasLahanIV: "-",
      pertamBahanLuas: "-",
    },
    {
      no: 4,
      polres: "INHU",
      jmlDesa: 194,
      jmlKec: 14,
      jmlPolisi: 194,
      jmlPenggerak: 20,
      desaPercont: 174,
      desaNonPercont: 194,
      pekaranganIII: 194,
      pekaranganIV: 0,
      pertamBahan: 15,
      perikan: 9,
      peternak: 170,
      holikultura: "49,21 HA",
      luasLahanIII: "49,21",
      luasLahanIV: "-",
      pertamBahanLuas: "-",
    },
    {
      no: 5,
      polres: "ROHUL",
      jmlDesa: 145,
      jmlKec: 16,
      jmlPolisi: 145,
      jmlPenggerak: 24,
      desaPercont: 121,
      desaNonPercont: 145,
      pekaranganIII: 152,
      pekaranganIV: 7,
      pertamBahan: 18,
      perikan: 11,
      peternak: 123,
      holikultura: "24,24 HA",
      luasLahanIII: "24,9",
      luasLahanIV: "0,6",
      pertamBahanLuas: "-",
    },
    {
      no: 6,
      polres: "ROHIL",
      jmlDesa: 184,
      jmlKec: 18,
      jmlPolisi: 184,
      jmlPenggerak: 26,
      desaPercont: 158,
      desaNonPercont: 291,
      pekaranganIII: 293,
      pekaranganIV: 2,
      pertamBahan: 24,
      perikan: 41,
      peternak: 228,
      holikultura: "18,18 HA",
      luasLahanIII: "18,19",
      luasLahanIV: "0,01",
      pertamBahanLuas: "-",
    },
    {
      no: 7,
      polres: "KAMPAR",
      jmlDesa: 250,
      jmlKec: 21,
      jmlPolisi: 250,
      jmlPenggerak: 24,
      desaPercont: 226,
      desaNonPercont: 445,
      pekaranganIII: 445,
      pekaranganIV: 0,
      pertamBahan: 40,
      perikan: 5,
      peternak: 400,
      holikultura: "40,24 HA",
      luasLahanIII: "40,24",
      luasLahanIV: "-",
      pertamBahanLuas: "-",
    },
    {
      no: 8,
      polres: "BENGKALIS",
      jmlDesa: 155,
      jmlKec: 11,
      jmlPolisi: 155,
      jmlPenggerak: 16,
      desaPercont: 139,
      desaNonPercont: 185,
      pekaranganIII: 185,
      pekaranganIV: 0,
      pertamBahan: 8,
      perikan: 22,
      peternak: 155,
      holikultura: "84,4 HA",
      luasLahanIII: "84,4",
      luasLahanIV: "-",
      pertamBahanLuas: "-",
    },
    {
      no: 9,
      polres: "SIAK",
      jmlDesa: 131,
      jmlKec: 14,
      jmlPolisi: 131,
      jmlPenggerak: 22,
      desaPercont: 109,
      desaNonPercont: 122,
      pekaranganIII: 148,
      pekaranganIV: 25,
      pertamBahan: 9,
      perikan: 13,
      peternak: 126,
      holikultura: "49,73 HA",
      luasLahanIII: "59,01",
      luasLahanIV: "9,28",
      pertamBahanLuas: "-",
    },
    {
      no: 10,
      polres: "KUANSING",
      jmlDesa: 229,
      jmlKec: 15,
      jmlPolisi: 229,
      jmlPenggerak: 20,
      desaPercont: 209,
      desaNonPercont: 243,
      pekaranganIII: 243,
      pekaranganIV: 0,
      pertamBahan: 7,
      perikan: 2,
      peternak: 234,
      holikultura: "93,40 HA",
      luasLahanIII: "93,4",
      luasLahanIV: "-",
      pertamBahanLuas: "-",
    },
    {
      no: 11,
      polres: "PELALAWAN",
      jmlDesa: 118,
      jmlKec: 12,
      jmlPolisi: 118,
      jmlPenggerak: 22,
      desaPercont: 96,
      desaNonPercont: 167,
      pekaranganIII: 184,
      pekaranganIV: 17,
      pertamBahan: 8,
      perikan: 7,
      peternak: 169,
      holikultura: "57,74 HA",
      luasLahanIII: "61,6",
      luasLahanIV: "3,86",
      pertamBahanLuas: "-",
    },
    {
      no: 12,
      polres: "KEP. MERANTI",
      jmlDesa: 101,
      jmlKec: 9,
      jmlPolisi: 101,
      jmlPenggerak: 10,
      desaPercont: 91,
      desaNonPercont: 114,
      pekaranganIII: 148,
      pekaranganIV: 34,
      pertamBahan: 15,
      perikan: 15,
      peternak: 118,
      holikultura: "17,06 HA",
      luasLahanIII: "18,75",
      luasLahanIV: "1,69",
      pertamBahanLuas: "-",
    },
  ];

  // Kalkulasi total
  const totalRow = {
    polres: "JUMLAH",
    jmlDesa: 1862,
    jmlKec: 172,
    jmlPolisi: 1862,
    jmlPenggerak: 256,
    desaPercont: 1606,
    desaNonPercont: 2629,
    pekaranganIII: 2781,
    pekaranganIV: 151,
    pertamBahan: 191,
    perikan: 138,
    peternak: 2452,
    holikultura: "476,47",
    luasLahanIII: "492,8",
    luasLahanIV: "16,27",
    pertamBahanLuas: "-",
  };

  // Data untuk visualisasi grafik
  const chartData = polresData.map((item) => ({
    name: item.polres,
    pekaranganIII: item.pekaranganIII,
    pekaranganIV: item.pekaranganIV,
    peternak: item.peternak,
    luasLahan: parseFloat(item.luasLahanIII.replace(",", ".")),
  }));

  return (
    <Card className="rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden border-none">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardTitle className="flex items-center md:gap-3 gap-0 text-blue-600 text-2xl font-bold">
          <Trophy className="w-8 h-8 hidden md:block" />
          Perankingan POLRES/TA
        </CardTitle>
        <CardDescription>
          Tabel dan Grafik Pencapaian Program Ketahanan Pangan
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <Tabs defaultValue="table" className="w-full">
          <TabsList className="grid w-full lg:max-w-5xl mx-auto grid-cols-2 md:grid-cols-4 mb-6 mt-2 bg-blue-100 h-auto">
            <TabsTrigger value="table" className="gap-2">
              <TableIcon className="h-4 w-4" />
              Tabel Data POLRES
            </TabsTrigger>
            <TabsTrigger value="chart" className="gap-2">
              <BarChart4 className="h-4 w-4" />
              Grafik POLRES
            </TabsTrigger>
            <TabsTrigger value="tableDetail" className="gap-2">
              <TableIcon className="h-4 w-4" />
              Detail Pekarangan
            </TabsTrigger>
            <TabsTrigger value="chartDetail" className="gap-2">
              <BarChart4 className="h-4 w-4" />
              Grafik Pekarangan
            </TabsTrigger>
          </TabsList>

          <TabsContent value="table">
            <div className="rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-center border border-gray-200 font-bold text-gray-800 bg-gray-300">
                        NO
                      </TableHead>
                      <TableHead className="text-center border border-gray-200 font-bold text-gray-800 bg-gray-300">
                        POLRES/TA
                      </TableHead>
                      <TableHead className="text-center border border-purple-200 font-bold text-gray-800 bg-purple-300">
                        Jumlah Desa
                      </TableHead>
                      <TableHead className="text-center border border-purple-200 font-bold text-gray-800 bg-purple-300">
                        Jumlah KEC
                      </TableHead>
                      <TableHead className="text-center border border-blue-200 font-bold text-gray-800 bg-blue-300">
                        Jumlah Polisi
                      </TableHead>
                      <TableHead className="text-center border border-blue-200 font-bold text-gray-800 bg-blue-300">
                        Jumlah Penggerak
                      </TableHead>
                      <TableHead className="text-center border border-green-200 font-bold text-gray-800 bg-green-300">
                        Desa Percontohan 
                      </TableHead>
                      <TableHead className="text-center border border-green-200 font-bold text-gray-800 bg-green-300">
                        Desa Non Percontohan
                      </TableHead>
                      <TableHead className="text-center border border-red-200 font-bold text-gray-800 bg-red-300">
                        JMLH TITIK PEKARANGAN PANGAN MINGGU KE III
                      </TableHead>
                      <TableHead className="text-center border border-red-200 font-bold text-gray-800 bg-red-300">
                        JMLH TITIK PEKARANGAN PANGAN MINGGU KE IV
                      </TableHead>
                      <TableHead className="text-center border border-amber-200 font-bold text-gray-800 bg-amber-300">
                        PERTAMBAHAN TITIK
                      </TableHead>
                      <TableHead className="text-center border border-amber-200 font-bold text-gray-800 bg-amber-300">
                        PERIKANAN
                      </TableHead>
                      <TableHead className="text-center border border-amber-200 font-bold text-gray-800 bg-amber-300">
                        PETERNAKAN
                      </TableHead>
                      <TableHead className="text-center border border-indigo-200 font-bold text-gray-800 bg-indigo-300">
                        HOLIKULTURA
                      </TableHead>
                      <TableHead className="text-center border border-indigo-200 font-bold text-gray-800 bg-indigo-300">
                        LUAS LAHAN MINGGU III FEB 2025
                      </TableHead>
                      <TableHead className="text-center border border-indigo-200 font-bold text-gray-800 bg-indigo-300">
                        LUAS LAHAN MINGGU IV FEB 2025
                      </TableHead>
                      <TableHead className="text-center border border-indigo-200 font-bold text-gray-800 bg-indigo-300">
                        PERTAM BAHAN LUAS (HA)
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {polresData.map((row) => (
                      <TableRow key={row.no}>
                        <TableCell className="text-center border">
                          {row.no}
                        </TableCell>
                        <TableCell className="text-center border font-medium">
                          {row.polres}
                        </TableCell>
                        <TableCell className="text-center border bg-purple-50">
                          {row.jmlDesa}
                        </TableCell>
                        <TableCell className="text-center border bg-purple-50">
                          {row.jmlKec}
                        </TableCell>
                        <TableCell className="text-center border bg-blue-50">
                          {row.jmlPolisi}
                        </TableCell>
                        <TableCell className="text-center border bg-blue-50">
                          {row.jmlPenggerak}
                        </TableCell>
                        <TableCell className="text-center border bg-green-50">
                          {row.desaPercont}
                        </TableCell>
                        <TableCell className="text-center border bg-green-50">
                          {row.desaNonPercont}
                        </TableCell>
                        <TableCell className="text-center border bg-red-50">
                          {row.pekaranganIII}
                        </TableCell>
                        <TableCell className="text-center border bg-red-50">
                          {row.pekaranganIV}
                        </TableCell>
                        <TableCell className="text-center border bg-amber-50">
                          {row.pertamBahan}
                        </TableCell>
                        <TableCell className="text-center border bg-amber-50">
                          {row.perikan}
                        </TableCell>
                        <TableCell className="text-center border bg-amber-50">
                          {row.peternak}
                        </TableCell>
                        <TableCell className="text-center border bg-indigo-50">
                          {row.holikultura}
                        </TableCell>
                        <TableCell className="text-center border bg-indigo-50">
                          {row.luasLahanIII}
                        </TableCell>
                        <TableCell className="text-center border bg-indigo-50">
                          {row.luasLahanIV}
                        </TableCell>
                        <TableCell className="text-center border bg-indigo-50">
                          {row.pertamBahanLuas}
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell className="text-center border"></TableCell>
                      <TableCell className="text-center border font-bold">
                        {totalRow.polres}
                      </TableCell>
                      <TableCell className="text-center border font-bold bg-purple-50">
                        {totalRow.jmlDesa}
                      </TableCell>
                      <TableCell className="text-center border font-bold bg-purple-50">
                        {totalRow.jmlKec}
                      </TableCell>
                      <TableCell className="text-center border font-bold bg-blue-50">
                        {totalRow.jmlPolisi}
                      </TableCell>
                      <TableCell className="text-center border font-bold bg-blue-50">
                        {totalRow.jmlPenggerak}
                      </TableCell>
                      <TableCell className="text-center border font-bold bg-green-50">
                        {totalRow.desaPercont}
                      </TableCell>
                      <TableCell className="text-center border font-bold bg-green-50">
                        {totalRow.desaNonPercont}
                      </TableCell>
                      <TableCell className="text-center border font-bold bg-red-50">
                        {totalRow.pekaranganIII}
                      </TableCell>
                      <TableCell className="text-center border font-bold bg-red-50">
                        {totalRow.pekaranganIV}
                      </TableCell>
                      <TableCell className="text-center border font-bold bg-amber-50">
                        {totalRow.pertamBahan}
                      </TableCell>
                      <TableCell className="text-center border font-bold bg-amber-50">
                        {totalRow.perikan}
                      </TableCell>
                      <TableCell className="text-center border font-bold bg-amber-50">
                        {totalRow.peternak}
                      </TableCell>
                      <TableCell className="text-center border font-bold bg-indigo-50">
                        {totalRow.holikultura}
                      </TableCell>
                      <TableCell className="text-center border font-bold bg-indigo-50">
                        {totalRow.luasLahanIII}
                      </TableCell>
                      <TableCell className="text-center border font-bold bg-indigo-50">
                        {totalRow.luasLahanIV}
                      </TableCell>
                      <TableCell className="text-center border font-bold bg-indigo-50">
                        {totalRow.pertamBahanLuas}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                  <TableCaption className="mt-4 text-sm text-gray-600 bg-blue-50 p-2 rounded">
                    Tabel Capaian & Perangkingan POLRES/TA
                  </TableCaption>
                </Table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="chart">
            <Card className="border-blue-200">
              <CardHeader className="bg-blue-50 rounded-t-xl">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-semibold text-blue-800">
                    Visualisasi Capaian POLRES/TA
                  </CardTitle>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8">
                        <Info className="h-4 w-4" />
                        <span className="sr-only">Info</span>
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">
                          Tentang Grafik
                        </h4>
                        <p className="text-sm">
                          Grafik ini menampilkan perbandingan jumlah titik
                          pekarangan pangan di tiap POLRES/TA.
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </CardHeader>
              <CardContent className="pt-8">
                <div className="h-[30rem] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={chartData}
                      margin={{ top: 10, right: 20, left: 20, bottom: 90 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="name"
                        angle={-45}
                        textAnchor="end"
                        height={100}
                        interval={0}
                        tick={{ fill: "#78350f", fontSize: 11 }}
                      />
                      <YAxis tick={{ fill: "#78350f" }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#fffbeb",
                          borderColor: "#fbbf24",
                          borderRadius: "6px",
                        }}
                      />
                      <Legend wrapperStyle={{ paddingTop: "8px" }} />
                      <Bar
                        dataKey="pekaranganIII"
                        fill="#4ade80"
                        name="Titik Pekarangan Minggu III"
                        radius={[4, 4, 0, 0]}
                      />
                      <Bar
                        dataKey="pekaranganIV"
                        fill="#60a5fa"
                        name="Titik Pekarangan Minggu IV"
                        radius={[4, 4, 0, 0]}
                      />
                      <Bar
                        dataKey="peternak"
                        fill="#a78bfa"
                        name="Peternakan"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tableDetail">
            <div className="rounded-md overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-center border border-gray-200 font-bold text-gray-800 bg-gray-300">
                        NO
                      </TableHead>
                      <TableHead className="text-center border border-gray-200 font-bold text-gray-800 bg-gray-300">
                        NAMA POLRES
                      </TableHead>
                      <TableHead className="text-center border border-green-200 font-bold text-gray-800 bg-green-300">
                        TITIK PEKARANGAN III
                      </TableHead>
                      <TableHead className="text-center border border-green-200 font-bold text-gray-800 bg-green-300">
                        TITIK PEKARANGAN IV
                      </TableHead>
                      <TableHead className="text-center border border-red-200 font-bold text-gray-800 bg-red-300">
                        LUAS LAHAN MINGGU III
                      </TableHead>
                      <TableHead className="text-center border border-red-200 font-bold text-gray-800 bg-red-300">
                        LUAS LAHAN MINGGU IV
                      </TableHead>
                      <TableHead className="text-center border border-purple-200 font-bold text-gray-800 bg-purple-300">
                        PERTUMBUHAN
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {polresData.map((row, index) => {
                      const growth =
                        row.pekaranganIV > 0
                          ? (
                              (row.pekaranganIV / row.pekaranganIII) *
                              100
                            ).toFixed(2) + "%"
                          : "-";
                      return (
                        <TableRow key={index}>
                          <TableCell className="text-center border uppercase">
                            {index + 1}
                          </TableCell>
                          <TableCell className="text-center border font-medium uppercase">
                            {row.polres}
                          </TableCell>
                          <TableCell className="text-center border bg-green-50">
                            {row.pekaranganIII}
                          </TableCell>
                          <TableCell className="text-center border bg-green-50">
                            {row.pekaranganIV}
                          </TableCell>
                          <TableCell className="text-center border bg-red-50">
                            {row.luasLahanIII}
                          </TableCell>
                          <TableCell className="text-center border bg-red-50">
                            {row.luasLahanIV}
                          </TableCell>
                          <TableCell className="text-center border font-bold bg-purple-50">
                            {growth}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                    <TableRow>
                      <TableCell className="text-center border uppercase"></TableCell>
                      <TableCell className="text-center border font-bold uppercase">
                        {totalRow.polres}
                      </TableCell>
                      <TableCell className="text-center border font-bold bg-green-50">
                        {totalRow.pekaranganIII}
                      </TableCell>
                      <TableCell className="text-center border font-bold bg-green-50">
                        {totalRow.pekaranganIV}
                      </TableCell>
                      <TableCell className="text-center border font-bold bg-red-50">
                        {totalRow.luasLahanIII}
                      </TableCell>
                      <TableCell className="text-center border font-bold bg-red-50">
                        {totalRow.luasLahanIV}
                      </TableCell>
                      <TableCell className="text-center border font-bold bg-purple-50">
                        {(
                          (totalRow.pekaranganIV / totalRow.pekaranganIII) *
                          100
                        ).toFixed(2) + "%"}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                  <TableCaption className="mt-4 text-sm text-gray-600 bg-blue-50 p-2 rounded">
                    Tabel Detail Pekarangan & Luas Lahan
                  </TableCaption>
                </Table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="chartDetail">
            <Card className="border-blue-200">
              <CardHeader className="bg-blue-50 rounded-t-xl">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-semibold text-blue-800">
                    Visualisasi Luas Lahan
                  </CardTitle>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8">
                        <Info className="h-4 w-4" />
                        <span className="sr-only">Info</span>
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">
                          Tentang Grafik
                        </h4>
                        <p className="text-sm">
                          Grafik ini menampilkan perbandingan luas lahan tiap
                          POLRES/TA.
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </CardHeader>
              <CardContent className="pt-8 h-[44rem] overflow-x-auto">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart
                    data={polresData}
                    margin={{ top: 10, right: 20, left: 20, bottom: 90 }}
                  >
                    <CartesianGrid strokeDasharray="2 2" />
                    <XAxis
                      dataKey="polres"
                      angle={-60}
                      textAnchor="end"
                      className="uppercase"
                      height={100}
                      interval={0}
                      tick={{ fill: "#78350f", fontSize: 11 }}
                    />
                    <YAxis tick={{ fill: "#78350f" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#fffbeb",
                        borderColor: "#fbbf24",
                        borderRadius: "6px",
                      }}
                    />
                    <Legend wrapperStyle={{ paddingTop: "8px" }} />
                    <Bar
                      dataKey="luasLahanIII"
                      fill="#4ade80"
                      name="Luas Lahan Minggu III"
                      radius={[4, 4, 0, 0]}
                      barSize={35}
                    />
                    <Line
                      type="monotone"
                      dataKey="luasLahanIV"
                      name="Luas Lahan Minggu IV"
                      stroke="#FCA5A5"
                      strokeWidth={2}
                      dot={true}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PolresDashboard;
