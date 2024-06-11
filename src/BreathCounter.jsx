import { useStore } from "./store";

export default function BreathCounter() {
  const { breaths, addABreath } = useStore();
  return (
    <div className="flex gap-2">
      <button
        onClick={addABreath}
        className="px-2 py-1 text-white bg-blue-500 rounded"
      >
        Add a breath
      </button>
      <p>breaths: {breaths}</p>
    </div>
  );
}
