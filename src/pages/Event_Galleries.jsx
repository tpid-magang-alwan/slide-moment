import Header from "../components/Header";
import Footer from "../components/Footer";
import Galleries_Container_1 from "../components/Galleries_Container_1";
import Sortir from "../components/Sortir";
import Galleries_Container_2 from "../components/Galleries_Container_2";


function Event_Galleries() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Konten utama */}
      <main className="flex-1">
        <Galleries_Container_1 />
        <Sortir />
        <Galleries_Container_2 />
      </main>

      <Footer />
    </div>
  );
}

export default Event_Galleries;
