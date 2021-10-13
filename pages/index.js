import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";
import ProductCard from "../components/ProductCrad";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Hotel Reservation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />
      <br />
      <Header>Qui sommes nous</Header>
      <p className="w-full max-w-xl px-4 text-center mx-auto mt-4">
        De brillantes synthèses un grain de poussière suspendu dans un rayon de
        soleil à travers les siècles un grain de poussière suspendu dans un
        réseau de rayons de soleil de trous de ver que le ciel nous appelle et
        des milliards sur des milliards sur des milliards sur des milliards sur
        des milliards sur des milliards sur des milliards. Le courage de nos
        questions cœurs des étoiles au bord du royaume éternel des galaxies, pas
        un lever de soleil mais une galaxie s'élèvent, la seule maison que nous
        ayons jamais connue.
      </p>
      <br />
      <Header>Nos gammes</Header>

      <div className="mt-4 flex justify-center flex-wrap gap-4">
        <ProductCard imgUrl="/images/image2.jpg" title="Chambre Confort" />
        <ProductCard imgUrl="/images/image3.jpg" title="Chambre de luxe" />
        <ProductCard imgUrl="/images/image4.jpg" title="Chambre supérieure" />
      </div>

      <div className="flex flex-wrap mt-40 justify-center gap-10 px-4">
        <div className="">
          <h2 className="text-lg font-semibold ">Nom Chambre</h2>
          <p className="w-full max-w-xl mt-2">
            Avec une grande variété de chambres et suites luxueuses, il y en a
            pour tous les goûts. Une toute petite scène dans une vaste arène
            cosmique des morceaux de peluches en mouvement prennent racine et
            fleurissent un grain de poussière suspendu dans des anneaux de
            rayons de soleil.
          </p>
          <div className="flex justify-between items-center mt-4">
            <h1 className="font-semibold text-2xl text-primary-color">
              $50.00
            </h1>
            <PrimaryButton>Voir</PrimaryButton>
          </div>
        </div>

        <img
          src="/images/image3.jpg"
          className="w-full max-w-sm h-80 object-cover"
        />
      </div>

      <br />
      <br />
      <div className="w-full max-w-lg mx-auto px-4">
        <Header>Découvrer notre spa</Header>
        <p className="w-full max-w-xl px-4 text-center mx-auto mt-4">
          De brillantes synthèses un grain de poussière suspendu dans un rayon
          de soleil à travers les siècles un grain de poussière suspendu dans un
          réseau de rayons de soleil de trous de ver que le ciel nous appelle et
          des milliards sur des milliards sur des milliards sur des milliards
          sur des milliards sur des milliards sur des milliards.
        </p>

        <div className="flex items-center justify-end mt-4">
          <PrimaryButton>Voir</PrimaryButton>
        </div>
      </div>
      <br />
    </div>
  );
}
