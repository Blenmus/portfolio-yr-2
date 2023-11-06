const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center w-screen h-auto gap-1 p-5">
      <div className="md:w-1/2 relative">
        <img
          src="src/assets/images/fit.png"
          className="w-full h-auto z-0"
          alt=""
        />
      </div>
      <div className="md:w-1/2">
        <h1 className="font-Abang text-8xl text-right pr-20 text-white py-20 z-20">
          ABOUT ME
        </h1>
        <p className="text-white text-2xl pl-6 pr-20 py-20 text-right z-20">
          My name is Tristan,
          and I'm on the cusp of my third year in a Bachelor of IT.
          I'm a versatile professional shifting from the education industry to the dynamic world of IT,
          drawing lessons from a range of eclectic workplaces.
          While I have many interests, one of my most important ones is Drag. Drag Conveniently utilizes almost every other interest and skill that I have all at once, all in the same place.
        </p>
      </div>
    </div>
  );
};

export default About;
