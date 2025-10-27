import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Photo_Move_Container_1 from "../components/Photo_Move_Container_1";
import Photo_Move_Container_2 from "../components/Photo_Move_Container_2";


function Photo_Move() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Konten utama */}
      <main className="flex-1">
        <Photo_Move_Container_1 />
        <Photo_Move_Container_2 />
      </main>

      <Footer />
    </div>
  );
}

export default Photo_Move;
