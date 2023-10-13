import { SiteHeader } from "~/components/header";
import { Layout } from "~/layouts/Layout";


const Home: React.FC = () => {
  return (
    <Layout>
      <SiteHeader />
    <div className="bg-gradient-to-r from-astroOrange to-astroLightOrange h-screen flex flex-col items-center justify-center">
      <img src="/favicon.ico" alt="AstroCrate Logo" className="w-64 h-64 mb-4 rounded-xl" />

      <h1 className="text-4xl text-astroDark font-raj-light mb-4">Welcome to AstroCrate</h1>

      <p className="text-lg text-astroDark mb-8">Your journey to the stars begins here!</p>

      <button className="bg-astroDark text-white py-2 px-4 rounded-lg hover:bg-white hover:text-astroDark transition duration-300">
        Get Started
      </button>
    </div>
    </Layout>
  );
};

export default Home;