import Navbar from "../components/Navbar";
import Home_Container_1 from "../components/Home_Container_1";
import Home_Container_2 from "../components/Home_Container_2";
import Home_Container_3 from "../components/Home_Container_3";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-[#f6f6f6] min-h-screen flex flex-col">
      <Navbar />

      {/* Konten utama */}
      <main className="flex-1">
        <Home_Container_1 />
        <Home_Container_2 />
        <Home_Container_3 />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
