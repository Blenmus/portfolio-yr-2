
import useReadingProgress from "../hooks/useReadingProgress";

const NavBar = () => {
    const completion = useReadingProgress();
    console.log(completion);
    return (
        <nav id='home' className="bg-transparent text-white sticky top-0 flex items-center justify-between z-50">
            <ul className="flex items-center justify-center pl-5 py-5">
                <li className="opacity-0 animate-fadein4 mx-4 my-10 lg:my-0"><a className="font-extralight text-3xl hover:text-fuchsia-300 duration-300 east-in-out" href="">About</a></li>
                <li className="opacity-0 animate-fadein5 mx-4 my-10 lg:my-0"><a className="font-extralight text-3xl hover:text-fuchsia-300 duration-300 east-in-out" href="">Skills</a></li>
                <li className="opacity-0 animate-fadein6 mx-4 my-10 lg:my-0"><a className="font-extralight text-3xl hover:text-fuchsia-300 duration-300 east-in-out" href="">Projects</a></li>
                <li className="opacity-0 animate-fadein7 mx-4 my-10 lg:my-0"><a className="font-extralight text-3xl hover:text-fuchsia-300 duration-300 east-in-out" href="https://www.canva.com/design/DAFzX8wp8qI/EoF3DISnxbYt-gVazTaIIw/view?utm_content=DAFzX8wp8qI&utm_campaign=designshare&utm_medium=link&utm_source=editor">Resume</a></li>
                <li className="opacity-0 animate-fadein8 mx-4 my-10 lg:my-0"><a className="font-extralight text-3xl hover:text-fuchsia-300 duration-300 east-in-out" href="">Portfolio</a></li>
            </ul>
<  span
  style={{ transform: `translateX(${completion - 100}%)` }}
  className="absolute bg-pink-100 h-1 w-screen top-0"
/>

        </nav>
    )
}




export default NavBar