import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

function Layout({ children, data }) {
 
  return (
    <div>
      <Header />
      <main className=" flex flex-col md:flex-row w-full h-auto ">
        <Menu contenido={data} />
        <section className=" w-full h-auto bg-black ">{children}</section>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
