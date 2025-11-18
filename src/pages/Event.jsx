import Header from "../components/Header";
import Footer from "../components/Footer";
import Event_Container_1 from "../components/Event_Container_1";
import Searching from "../components/Searching";
import Event_Container_2 from "../components/Event_Container_2";


function Event() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Konten utama */}
      <main className="flex-1">
        <Event_Container_1 />
        <Searching />
        <Event_Container_2 />
      </main>

      <Footer />
    </div>
  );
}

export default Event;
