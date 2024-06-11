import { useState } from "react";
import "./App.css";
import ashtangaStandingSequence from "./poses.js";
import Card from "./Card.jsx";
import Sidebar from "./Sidebar.jsx";
import Search from "./Search.jsx";

function App() {
  const [selectedPose, setSelectedPose] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPoses = ashtangaStandingSequence.filter((pose) => {
    return pose.sanskritName.toLowerCase().includes(searchTerm);
  });

  console.log({ selectedPose, setSelectedPose });

  return (
    <div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />{" "}
      <div className="grid grid-cols-3 gap-8">
        {filteredPoses.map((pose, i) => (
          <Card
            key={i}
            heading={pose.sanskritName}
            repetition={pose.repetitions}
            subheading={pose.englishName}
            description={pose.description}
            label={pose.tags}
            setSelectedPose={setSelectedPose}
            index={i}
          />
        ))}
      </div>
      {selectedPose === null ? (
        <></>
      ) : (
        <Sidebar
          heading={ashtangaStandingSequence[selectedPose].sanskritName}
          description={ashtangaStandingSequence[selectedPose].description}
          setSelectedPose={setSelectedPose}
          selectedPose={ashtangaStandingSequence[selectedPose]}
        />
      )}
    </div>
  );
}

export default App;
