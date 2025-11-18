import Header from "../components/Header";
import Footer from "../components/Footer";
import Sesi_Container_1 from "../components/Sesi_Container_1";
import Boomerang from "../components/Boomerang";
import Foto from "../components/Foto";

function Sesi() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f6f6f6]">
      <Header />

      {/* Konten utama */}
      <main className="flex-1">
        <Sesi_Container_1 />
        <Boomerang />
        <Foto />
      </main>

      <Footer />
    </div>
  );
}

export default Sesi;
