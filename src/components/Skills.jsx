import React from 'react';

const App = () => {
  return (
    <div>
      <h1 className='text-center font-Abang text-white text-8xl pb-20'>SKILLs</h1>
    
    <div className="flex flex-wrap justify-center items-center px-20">
      
      {/* Card 1 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-8">
        <div className="bg-gray-700  rounded-lg shadow-lg p-4">
          <div className="flex items-center">
            <div className="w-12 h-12 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#01579B" d="M34.932,22.478C33.769,21.56,32.206,21.001,30.5,21c-1.706,0.001-3.27,0.56-4.433,1.478 c-1.184,0.935-1.969,2.252-2.059,3.747c-0.091,1.536,0.57,2.965,1.732,4.023C26.925,31.324,28.613,32,30.501,32 c1.887,0,3.574-0.676,4.757-1.753c1.162-1.057,1.824-2.486,1.734-4.023C36.902,24.731,36.116,23.413,34.932,22.478z"/><path fill="#FF6D00" d="M45.871,25.932c-0.259-1.823-0.891-3.535-1.861-5.095c-0.891-1.433-2.035-2.688-3.397-3.745l0.002-0.002 l-0.037-0.012c-0.028-0.025-0.05-0.054-0.079-0.078L26.249,6.438c-0.86-0.689-2.12-0.552-2.811,0.313 c-0.69,0.862-0.551,2.121,0.313,2.811L29.739,14H10.5C9.125,14,8,15.125,8,16.5S9.125,19,10.5,19h7.154L2.873,31.602 c-1.048,0.898-1.17,2.478-0.271,3.525C3.097,35.704,3.797,36,4.501,36c0.576,0,1.154-0.198,1.626-0.602l8.954-7.675 c-0.022,0.807-0.039,1.538-0.035,1.761C15.046,33,19,42,30.682,42c8.318,0,15.28-5,15.28-13.261 C46.034,27.805,46.003,26.867,45.871,25.932z M39.525,29.153c-0.401,1.087-1.05,2.104-1.935,2.992 c-1.81,1.82-4.343,2.85-7.088,2.854c-2.745,0.005-5.28-1.017-7.091-2.832c-0.885-0.885-1.535-1.901-1.937-2.986 c-0.392-1.065-0.545-2.195-0.444-3.335c0.098-1.116,0.432-2.179,0.971-3.141c0.529-0.946,1.257-1.8,2.154-2.524 c1.76-1.414,3.999-2.179,6.345-2.182c2.346-0.003,4.584,0.756,6.345,2.164c0.897,0.72,1.624,1.571,2.152,2.515 c0.539,0.961,0.874,2.023,0.973,3.138C40.07,26.958,39.918,28.087,39.525,29.153z"/></svg>
            </div>
            <h2 className="text-white text-xl font-thin">Blender</h2>
          </div>
          {/* Additional content for Card 1 */}
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-8">
        <div className="bg-gray-700  rounded-lg shadow-lg p-4">
          <div className="flex items-center">
            <div className="w-12 h-12  mr-4">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#03A9F4" d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4V10z"/><path fill="#020F16" d="M20.016,19.174h-2.002v4.434h1.973c0.547,0,0.97-0.179,1.27-0.537s0.449-0.879,0.449-1.563c0-0.71-0.153-1.274-0.459-1.694S20.53,19.181,20.016,19.174z"/><path fill="#020F16" d="M9,9v30h30V9H9z M23.365,24.789C22.539,25.597,21.393,26,19.928,26h-1.914v5h-2.871V16.781h4.844c1.406,0,2.528,0.437,3.364,1.309s1.255,2.005,1.255,3.398S24.192,23.981,23.365,24.789z M32.682,30.336c-0.709,0.573-1.641,0.859-2.793,0.859c-0.775,0-1.459-0.151-2.051-0.454s-1.057-0.725-1.392-1.265s-0.503-1.123-0.503-1.748h2.627c0.014,0.481,0.125,0.843,0.337,1.084s0.558,0.361,1.04,0.361c0.742,0,1.113-0.335,1.113-1.006c0-0.234-0.112-0.451-0.337-0.649S30,27.052,29.225,26.713c-1.139-0.462-1.922-0.94-2.349-1.436s-0.64-1.11-0.64-1.846c0-0.925,0.334-1.688,1.001-2.29s1.552-0.903,2.651-0.903c1.158,0,2.086,0.3,2.783,0.898s1.045,1.403,1.045,2.412h-2.764c0-0.859-0.357-1.289-1.074-1.289c-0.293,0-0.533,0.091-0.723,0.273s-0.283,0.437-0.283,0.762c0,0.234,0.104,0.441,0.313,0.62s0.699,0.435,1.475,0.767c1.127,0.417,1.922,0.881,2.388,1.392s0.698,1.174,0.698,1.987C33.746,29.005,33.391,29.763,32.682,30.336z"/></svg>
            </div>
            <h2 className="text-white text-xl font-thin">Photoshop</h2>
          </div>
          {/* Additional content for Card 2 */}
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-8">
        <div className="bg-gray-700  rounded-lg shadow-lg p-4">
          <div className="flex items-center">
            <div className="w-12 h-12  mr-4">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#e64a19" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"/><path fill="#7c4dff" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"/><path fill="#66bb6a" d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"/><path fill="#ff7043" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"/><circle cx="32" cy="24" r="7" fill="#29b6f6"/></svg>
            </div>
            <h2 className="text-white text-xl font-thin">Figma</h2>
          </div>
          {/* Additional content for Card 3 */}
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-8">
        <div className="bg-gray-700  rounded-lg shadow-lg p-4">
          <div className="flex items-center">
            <div className="w-12 h-12  mr-4">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px" baseProfile="basic"><rect width="4" height="22" x="19" y="13" fill="#00b3d7"/><rect width="4" height="22" x="13" y="13" fill="#00b3d7"/><rect width="4" height="22" x="7" y="13" fill="#00b3d7"/><rect width="4" height="22" x="1" y="13" fill="#00b3d7"/><rect width="22" height="4" x="25" y="31" fill="#2100c4"/><rect width="22" height="4" x="25" y="25" fill="#2100c4"/><rect width="22" height="4" x="25" y="19" fill="#2100c4"/><rect width="22" height="4" x="25" y="13" fill="#2100c4"/></svg>
            </div>
            <h2 className="text-white text-xl font-thin">Ableton</h2>
          </div>
          {/* Additional content for Card 3 */}
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-8">
        <div className="bg-gray-700  rounded-lg shadow-lg p-4">
          <div className="flex items-center">
            <div className="w-12 h-12  mr-4">
              <img className='p-4 scale-x-[3] scale-y-[3]' src="src/assets/images/icons8-react.svg" alt="" />
            </div>
            <h2 className="text-white text-xl font-thin">React</h2>
          </div>
          {/* Additional content for Card 3 */}
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-8">
        <div className="bg-gray-700  rounded-lg shadow-lg p-4">
          <div className="flex items-center">
            <div className="w-12 h-12 mr-4">
              <img src="src/assets/images/tailwind-css.png" alt="" />
            </div>
            <h2 className="text-white text-xl font-thin">TailwindCSS</h2>
          </div>
          {/* Additional content for Card 3 */}
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-8">
        <div className="bg-gray-700  rounded-lg shadow-lg p-4">
          <div className="flex items-center">
            <div className="w-12 h-12 mr-4">
              <img className='translate-y-2' src="src/assets/images/html-5.png" alt="" />
            </div>
            <h2 className="text-white text-xl font-thin">HTML</h2>
          </div>
          {/* Additional content for Card 3 */}
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-8">
        <div className="bg-gray-700  rounded-lg shadow-lg p-4">
          <div className="flex items-center">
            <div className="w-12 h-12  mr-4">
              <img className='translate-y-2' src="src/assets/images/css-icon.png" alt="" />
            </div>
            <h2 className="text-white text-xl font-thin">CSS</h2>
          </div>
          {/* Additional content for Card 3 */}
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-8">
        <div className="bg-gray-700  rounded-lg shadow-lg p-4">
          <div className="flex items-center">
            <div className="w-12 h-12  mr-4">
              <img className='translate-y-2' src="src/assets/images/js-icon.png" alt="" />
            </div>
            <h2 className="text-white text-xl font-thin">JavaScript</h2>
          </div>
          {/* Additional content for Card 3 */}
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-8">
        <div className="bg-gray-700  rounded-lg shadow-lg p-4">
          <div className="flex items-center">
            <div className="w-12 h-12  mr-4">
              <img src="src/assets/images/icons8-python.svg" alt="" />
            </div>
            <h2 className="text-white text-xl font-thin">Python</h2>
          </div>
          {/* Additional content for Card 3 */}
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-8">
        <div className="bg-gray-700  rounded-lg shadow-lg p-4">
          <div className="flex items-center">
            <div className="w-12 h-12 l mr-4">
              <img src="src/assets/images/c-sharp-icon.png" alt="" />
            </div>
            <h2 className="text-white text-xl font-thin">C#</h2>
          </div>
          {/* Additional content for Card 3 */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default App;
