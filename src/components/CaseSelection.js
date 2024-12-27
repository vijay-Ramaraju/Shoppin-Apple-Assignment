import React from "react";

const CaseSelection = ({ cases, onSelect }) => {
  return (
    <div className="w-1/3">
      <div className="flex flex-wrap gap-2 justify-center">
        {cases.map((caseItem) => (
          <div
            key={caseItem.id}
            onClick={() => onSelect(caseItem)}
            className=" rounded-md cursor-pointer text-center m-1 hover:shadow-lg transition-shadow "
          >
            <button
              type="button"
              className="border border-gray-300 bg-gray-200 px-2 text-black h-10 font-semibold m-0.5 rounded-md w-full"
            >
              {caseItem.material}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseSelection;
