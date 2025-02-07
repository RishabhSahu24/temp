"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import img from "../public/stamp.png";

export default function Home() {
  const [showPinkCard, setShowPinkCard] = useState(false);
  const [showMessage, setShowMessage] = useState(true);
  const [showYayUI, setShowYayUI] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [speed, setSpeed] = useState(1000);

  const handleYes = () => {
    setShowYayUI(true);
    setSpeed(1000);
  };

  const moveButton = () => {
    const maxX = 200;
    const maxY = 100;
    const randomX = Math.floor(Math.random() * maxX) - maxX / 2;
    const randomY = Math.floor(Math.random() * maxY) - maxY / 2;
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (speed < 500) {
      interval = setInterval(() => {
        moveButton();
      }, speed);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [speed]);

  useEffect(() => {
    if (showPinkCard) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 10000); // 10 seconds
    }
  }, [showPinkCard]);

  const handleNo = () => {
    moveButton();
    setSpeed((prev) => Math.max(prev - 200, 100));
  };

  return (
    <div className="flex h-screen items-center justify-center bg-[#FAF4EB] overflow-hidden">
      <div className="relative w-full h-full">
        {/* Red Card */}
        <div
          className={`absolute w-full h-full transition-all duration-1000 ease-in-out transform ${
            showPinkCard ? "opacity-0 -translate-y-full" : "opacity-100"
          }`}
        >
          <button
            className="border-0 w-full h-full p-0 bg-transparent"
            aria-label="For Sneha"
            onClick={() => setShowPinkCard(true)}
          >
            <div className="relative bg-[#FF4C4C] w-[90%] h-[300px] md:w-[800px] md:h-[500px] mx-auto rounded-2xl md:rounded-[36px] shadow-lg flex items-center justify-center cursor-pointer transition-all duration-200 hover:shadow-xl hover:-translate-y-1 active:shadow-md active:translate-y-0">
              <span className="text-white text-2xl md:text-5xl font-medium italic text-center px-4">
                For Sneha ❤️
              </span>
              <p className="absolute bottom-4 text-white text-lg md:text-xl italic">
                If love was a melody, you&apos;d be my favorite song. 💖
              </p>
              <div className="absolute top-2 right-2 md:top-4 md:right-4 w-20 h-20 md:w-36 md:h-36 bg-white rounded-lg shadow-md flex items-center justify-center">
                <Image
                  src={img}
                  alt="Stamp"
                  className="w-16 h-16 md:w-32 md:h-32"
                />
              </div>
            </div>
          </button>
        </div>

        {/* Pink Card */}
        {/* Pink Card */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out transform ${
            showPinkCard
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-full"
          }`}
        >
          <div className="relative bg-[#FFC0CB] w-[90%] md:w-[600px] md:p-12 rounded-[24px] md:rounded-[32px] shadow-xl shadow-pink-300/50 text-center flex flex-col items-center p-4 gap-4 md:gap-6">
            {showMessage ? (
              <p className="text-[#FF4C4C] text-lg md:text-xl italic whitespace-pre-line">
                {`For My Dearest Sneha,
                    
                    From the moment I met you, my world has been brighter, my heart lighter, and my soul warmer. You are the melody in my silence, the poetry in my chaos, and the warmth in my coldest days.

                    So, today, I ask not just for a Valentine's Day with you, but for a lifetime where every day feels like this—where love is not just a word, but a feeling we live, breathe, and cherish together.

                    Will you be my forever Valentine? ❤️`}
              </p>
            ) : (
              <>
                <h1 className="text-[#FF4C4C] text-2xl md:text-3xl font-bold mt-2 md:mt-5 leading-tight">
                  Will you <br /> be my forever Valentine?
                </h1>
                <p className="text-[#FF4C4C] text-lg italic">
                  Without you, every moment is incomplete. With you, every
                  second is magic. ✨
                </p>
                <div className="flex gap-3 md:gap-4 items-center flex-col justify-center">
                  <button
                    className="bg-[#FF4C4C] text-white text-base md:text-lg font-semibold py-2 px-5 md:px-6 rounded-md shadow-md hover:bg-[#E04343] transition"
                    onClick={handleYes}
                  >
                    YES!
                  </button>
                  <button
                    className="bg-white text-[#FF4C4C] text-sm font-medium py-1 px-3 md:px-4 rounded-md shadow mt-2 md:mt-4 hover:bg-gray-100 transition absolute"
                    onClick={handleNo}
                    style={{
                      transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                      transition: "transform 0.3s ease-out",
                    }}
                  >
                    No!
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Yay UI */}
        {showYayUI && (
          <div className="absolute w-full h-full flex items-center justify-center bg-[#FAF4EB]">
            <div className="bg-[#FFC0CB] w-[90%] md:w-[600px] p-6 md:p-12 rounded-[24px] md:rounded-[32px] shadow-xl shadow-pink-300/50 text-center flex flex-col items-center gap-4 md:gap-6 -translate-y-10 md:-translate-y-20">
              <div className="w-[120px] md:w-[200px] transform -rotate-6 shadow-xl rounded-lg p-2 bg-white">
                <Image
                  src="/hearts.gif"
                  alt="Hearts Animation"
                  width={200}
                  height={200}
                  className="w-full"
                />
              </div>
              <h1 className="text-[#FF4C4C] text-3xl md:text-4xl font-bold">
                Yay! 💖
              </h1>
              <p className="text-[#FF4C4C] text-lg italic">
                You are my happiness, my dream, my love. Thank you for saying
                YES! 🌹
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
