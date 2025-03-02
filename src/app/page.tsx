import ProfileImage from "./components/ProfileImage";



const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <ProfileImage />
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4">
        AAKASH KUMAR SHAH
      </h1>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-600 mt-2">
        Human Rights Advocate
      </h2>
      <p className="text-gray-700 mt-2 text-sm md:text-base lg:text-lg text-center">
        I am a law student with a passion for legal research, advocacy, and justice. I analyze legal principles, draft insightful legal documents, and stay updated on evolving laws to provide effective solutions. My goal is to contribute to a fair and informed legal syste
      </p>
    </div>
  );
};

export default Home;
