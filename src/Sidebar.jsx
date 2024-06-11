import ashtangaStandingSequence from "./poses";

const exampleTag = ["standing", "twist", "balance"];

export default function Sidebar({
  heading,
  description,
  selectedPose,
  setSelectedPose,
}) {
  const tagsFilter = ashtangaStandingSequence.filter((pose) => {
    return selectedPose.tags.some((tag) => pose.tags.includes(tag));
  });

  console.log("tagsFilter", tagsFilter);

  return (
    <div className="fixed top-0 bottom-0 w-96 right-0 bg-white shadow-xl p-8 space-y-4 text-start">
      <button
        onClick={() => setSelectedPose(null)}
        className="text-zinc-400 text-2xl"
      >
        »
      </button>
      <p className="text-lg">{heading}</p>
      <p className="text-sm">{description}</p>
      <img
        src="vite.svg"
        alt="test"
        style={{ width: "200px", height: "auto" }}
      />
      <p className="text-sm text-zinc-500">
        Similar poses: {tagsFilter.map((pose) => pose.sanskritName)}
      </p>
    </div>
  );
}
