const Contact = () => {
  return (
    <div className="flex items-center w-screen h-auto gap-1 p-5 text-center"> {/* Add text-center here */}
      <div className="md:w-1/2 mx-auto"> {/* Add mx-auto here */}
        <h1 className="font-Abang text-8xl text-center pr-20 text-white py-20 z-20">
          GET IN TOUCH
        </h1>
        <p className="text-white text-2xl pl-6 pr-20 py-20 z-20">
          I'm currently looking for Full-time employment in Web Development, Software Engineering or Game Development. If you know any positions available or have any questions, please feel free to email me at
          <span className="text-fuchsia-500"> tristanfisher@outlook.co.nz</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
