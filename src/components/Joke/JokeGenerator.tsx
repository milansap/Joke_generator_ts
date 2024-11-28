import { useState } from "react";

const JokeGenerator = () => {
  const [joke, setJoke] = useState<string | null>(String);

  const fetchApi = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((res) => res.json())
      .then((data) => setJoke(data.joke));
  };



  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
      <h1 className="text-4xl font-bold mb-4">Random Joke Generator</h1>
      <p className="text-lg text-center mb-4">{joke}</p>
      <button
        onClick={fetchApi}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Get a Joke
      </button>
    </div>
  );
};

export default JokeGenerator;
