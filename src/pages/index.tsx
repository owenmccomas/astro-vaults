import Link from "next/link";
import { SiteHeader } from "~/components/header";
import { Layout } from "~/layouts/Layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <SiteHeader />
      <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-r from-astroOrange to-astroLightOrange">
        <img
          src="/favicon.ico"
          alt="AstroCrate Logo"
          className="mb-4 h-64 w-64 rounded-xl"
        />

        <h1 className="mb-4 text-4xl font-raj-light text-astroDark">
          Welcome to AstroCrate
        </h1>

        <p className="mb-8 text-lg text-astroDark">
          Your journey to the stars begins here!
        </p>

        <Link
          href={"/drops"}
          className="rounded-lg bg-astroDark font-bold px-4 py-2 text-white transition duration-300 hover:bg-white hover:text-astroDark"
        >
          Get Started
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
