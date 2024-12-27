import React, { useState, useEffect } from "react";
import CaseSelection from "./CaseSelection";
import SizeSelection from "./SizeSelection";
import BandSelection from "./BandSelection";
import CollectionSwitcher from "./CollectionSwitcher";
import WatchPreview from "./WatchPreview";
import SaveShare from "./SaveShare";
import ImageSlider from "./ImageSlider";
import  {watchData}  from "../data/watchData";

const CustomizationPage = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedBand, setSelectedBand] = useState(null);
  const [isFrontView, setFrontView] = useState(true);
  const [selectedCollection, setSelectedCollection] = useState(
    "Apple Watch Series 10"
  );

  const handleCaseSelect = (caseItem) => setSelectedCase(caseItem);
  const handleSizeSelect = (size) => setSelectedSize(size);
  const handleBandSelect = (band) => setSelectedBand(band);
  const handleCollectionSwitch = (collection) =>
    setSelectedCollection(collection);

  const casePrize = selectedCase
    ? selectedCase.material === "Titanium"
      ? 100
      : 0
    : 0;
  const bandPrize = selectedBand ? selectedBand.price : 0;

  useEffect(() => {
    setSelectedBand(null);
  }, [selectedCollection]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex flex-col md:flex-row justify-between p-5">
        <a href="https://www.apple.com/shop/buy-watch/apple-watch">
          <img
            src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1734954726/header_images_apple_watches_swxgrm.jpg"
            alt="Apple Watch"
            width="80"
            height="18"
          />
        </a>
        <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-auto gap-4 mt-4 md:mt-0">
          <CollectionSwitcher
            collections={watchData.collections}
            onSwitch={handleCollectionSwitch}
          />
          <SaveShare
            selectedCase={selectedCase}
            selectedBand={selectedBand}
            selectedSize={selectedSize}
          />
        </div>
      </nav>

      {/* Watch Studio */}
      <div className="flex flex-col justify-center items-center mt-10 mb-5">
        {watchData.watchCollections.map((eachItem) => {
          if (eachItem.name === selectedCollection) {
            return (
              <React.Fragment key={eachItem.name}>
                {!selectedBand ? (
                  <div className="relative w-96 h-96 overflow-hidden">
                    <img
                      src={isFrontView ? eachItem.frontview : eachItem.sideview}
                      className="absolute w-full h-full object-cover transition-opacity duration-500 opacity-100"
                      alt={eachItem.name}
                    />
                  </div>
                ) : (
                  <ImageSlider />
                )}

                <div className="text-center mt-4">
                  <button
                    onClick={() => setFrontView(!isFrontView)}
                    className="mt-4 underline text-blue-500"
                  >
                    {isFrontView ? "Side View" : "Front View"}
                  </button>
                  <p className="text-gray-600 font-semibold">
                    {eachItem.name.toUpperCase()}
                  </p>
                  <p className="text-black font-normal mt-2">
                    From ${eachItem.price + casePrize + bandPrize}
                  </p>
                </div>
                <WatchPreview
                  selectedCase={selectedCase}
                  selectedSize={selectedSize}
                  selectedBand={selectedBand}
                />
              </React.Fragment>
            );
          }
          return null;
        })}
      </div>

      {/* Customization Workflow */}
      <div className="flex flex-col md:flex-row justify-around items-center w-full mb-5">
        <SizeSelection sizes={watchData.sizes} onSelect={handleSizeSelect} />
        <CaseSelection cases={watchData.cases} onSelect={handleCaseSelect} />
        <BandSelection bands={watchData.bands} onSelect={handleBandSelect} />
      </div>
    </div>
  );
};

export default CustomizationPage;
