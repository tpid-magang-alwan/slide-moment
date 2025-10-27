import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sesi_Container_1 from "../components/Sesi_Container_1";
import Boomerang from "../components/Boomerang";
import Foto from "../components/Foto";

function Sesi() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f6f6f6]">
      <Navbar />

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
