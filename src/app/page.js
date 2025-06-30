import Team from "../../Components/Team";
import Testimonals from "../../Components/Testimonals";
import Works from "../../Components/Works";

export default function Home() {
  return (
    <div className="bg-white">
      <Works />
      <div
        style={{
          background: " linear-gradient(90deg, #E1F4FF 0%, #4CBAFA 100%)",
        }}
      >
        {" "}
        <h1 className="text-white font-bold text-3xl text-center py-3">
          How to use the app perfectly
        </h1>
        <div className="flex justify-center px-4 mt-3 py-4">
          <p className="text-white font-normal text-base text-center max-w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
        </div>
      </div>

      <Team />

      <Testimonals />
    </div>
  );
}
