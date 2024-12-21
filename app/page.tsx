function FancyButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="border-[1px] rounded-full px-4 py-[2px] hover:border-white border-gray-400">
      {children}
    </button>
  );
}
export default function Home() {
  return (
    <div>
      <h1 className="text-center mt-32 text-8xl font-extrabold">
        pod<span className="text-gray-500">.ai</span>
      </h1>

      <p className="text-center text-gray-400 text-2xl mt-2 font-extralight">
        turn anything into a podcast
      </p>

      <div className="flex justify-center items-center space-x-4 my-8">
        <FancyButton>Examples</FancyButton>
        <FancyButton>Get Started</FancyButton>
      </div>
    </div>
  );
}
