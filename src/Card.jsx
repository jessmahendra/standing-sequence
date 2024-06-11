const Card = ({
  heading,
  repetition,
  subheading,
  description,
  label,
  setSelectedPose,
  index,
}) => {
  return (
    <>
      <div
        onClick={() => setSelectedPose(index)}
        className="flex flex-col align-start bg-white w-96 p-4 space-y-2 rounded-lg border border-zinc-2
"
      >
        <div className="flex flex-col space-y-0">
          <div className="flex flex-row align-self text-lg">
            <p className="flex-1 text-left">{heading}</p>
            {repetition > 1 && (
              <p className="text-left">
                {repetition}
                <span className="text-zinc-500">×</span>
              </p>
            )}
          </div>
          <p className="text-left text-sm text-zinc-500">{subheading}</p>
        </div>
        <div>
          <p className="text-left text-sm">{description}</p>
        </div>
        <div className="flex flex-row space-x-2 text-sm">
          {label.map((label, index) => (
            <div key={index} className="rounded-full bg-gray-100 px-3 py-1">
              {label}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
