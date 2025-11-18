import Header from "../components/Header";
import Footer from "../components/Footer";
import Photo_Move_Container_1 from "../components/Photo_Move_Container_1";
import Photo_Move_Container_2 from "../components/Photo_Move_Container_2";


function Photo_Move() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

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
