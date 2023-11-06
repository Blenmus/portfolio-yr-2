import "./style.css";

const Projects = () => {
  return (
    <div className="flex items-center justify-center h-auto pt-20">
      <div className="w-full text-center">
        <h1 className="font-Abang text-6xl text-white py-10">
          Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">
          {/* Card 1 */}
          <a href="https://github.com/Blenmus/Project_Zumba" className="">
          <div className="bg-gray-700 shadow-lg rounded-md hover:-translate-y-1 p-4 m-2 glow hover:glow duration-200 ease-in-out h-64">
            
            <h2 className="text-2xl font-semibold mb-2 text-white text-left">PROJECT ZUMBA</h2>
            <p className="text-gray-200 text-left">Description of Project 1</p>
            <div className="pt-8">
            <span className=" w-full h-[.10rem] bg-gray-400 block mt-2"></span>
            </div>
          </div></a>

          {/* Card 2 */}
          <a href="https://github.com/Blenmus/DoublyLinked-CSharp.git" className="">
          <div className="bg-gray-700 shadow-lg rounded-md hover:-translate-y-1 p-4 m-2 glow hover:glow duration-200 ease-in-out h-64">
            
            <h2 className="text-2xl font-semibold mb-2 text-white text-left">DOUBLY LINKED LIST</h2>
            <p className="text-gray-200 text-left">Description of Project 2</p>
            <div className="pt-8">
            <span className=" w-full h-[.10rem] bg-gray-400 block mt-2"></span>
            </div>
          </div></a>

          {/* Card 3 */}
          <a href="https://github.com/Blenmus/Drag-on-vic-website" className="">
          <div className="bg-gray-700 shadow-lg rounded-md hover:-translate-y-1 p-4 m-2 glow hover:glow duration-200 ease-in-out h-64">
            <h2 className="text-2xl font-semibold mb-2 text-white text-left">DRAG ON VIC WEBSITE</h2>
            <p className="text-gray-200 text-left">Description of Project 3</p>
            <div className="pt-8">
            <span className=" w-full h-[.10rem] bg-gray-400 block mt-2"></span>
            </div>
          </div></a>

          {/* Card 4 */}
          <a href="https://github.com/Blenmus/BST-AVL-List-App" className="">
          <div className="bg-gray-700 shadow-lg rounded-md hover:-translate-y-1 p-4 m-2 glow hover:glow duration-200 ease-in-out h-64">
            <h2 className="text-2xl font-semibold mb-2 text-white text-left">BST/AVL App C#</h2>
            <p className="text-gray-200 text-left">Description of Project 4</p>
            <div className="pt-8">
            <span className=" w-full h-[.10rem] bg-gray-400 block mt-2"></span>
           </div>
          </div></a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
