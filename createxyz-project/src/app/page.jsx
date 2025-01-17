"use client";
import React from "react";

function MainComponent() {
  const [gameStep, setGameStep] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  const handleNextStep = () => {
    setGameStep((prev) => prev + 1);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const backgroundImage =
    gameStep === 0
      ? 'url("https://ucarecdn.com/0ff994ef-8df4-47de-8feb-f6cd12f348fd/-/format/auto/")'
      : gameStep === 1
      ? 'url("https://ucarecdn.com/739dad32-ec81-42d0-92ff-265c281844bd/-/format/auto/")'
      : gameStep === 3
      ? 'url("https://ucarecdn.com/791f146c-fd06-4098-aa1c-e6748a61bcc0/-/format/auto/")'
      : 'url("https://ucarecdn.com/3d490268-0ed4-45b8-951a-0cc796bf7d76/-/format/auto/")';

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat transition-all duration-700"
      style={{
        backgroundImage,
      }}
    >
      <div className="fixed top-4 right-4 z-50 flex items-center bg-white/20 rounded p-2">
        <audio ref={audioRef} loop className="hidden">
          <source src="/bgm.m4a" type="audio/x-m4a" />
        </audio>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          className="w-24"
        />
        <span className="ml-2 text-white">音量</span>
      </div>

      {gameStep < 3 && (
        <div className="text-center p-8 bg-black/50 rounded-xl backdrop-blur-sm border-2 border-red-500/30">
          <h1 className="text-5xl font-impact text-white mb-12 tracking-wider font-bold italic transform hover:scale-105 transition-transform duration-300 text-shadow-lg">
            BLEACH - 千年血戦
          </h1>

          {gameStep === 0 && (
            <button
              onClick={handleNextStep}
              className="bg-gradient-to-r from-red-900 to-red-600 text-white font-impact py-6 px-12 rounded-lg text-3xl transition-all duration-500 shadow-xl hover:shadow-red-500/50 tracking-[0.2em] font-bold italic transform hover:scale-110 hover:from-red-700 hover:to-red-500 border-2 border-red-400/30 relative overflow-hidden button-glow"
            >
              <span className="relative z-10 text-shadow-red">
                ユーハバッハを倒しますか？
              </span>
            </button>
          )}

          {gameStep === 1 && (
            <button
              onClick={handleNextStep}
              className="bg-gradient-to-r from-purple-700 to-purple-500 text-white font-impact py-4 px-8 rounded-lg text-2xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 tracking-wide font-bold italic transform hover:scale-105 hover:from-purple-600 hover:to-purple-400 border-2 border-purple-400/30"
            >
              千年の時を経て力を取り戻しましたが戦いますか？
            </button>
          )}

          {gameStep === 2 && (
            <div className="space-y-4">
              <button
                onClick={handleNextStep}
                className="bg-gradient-to-r from-green-700 to-green-500 text-white font-impact py-4 px-8 rounded-lg text-2xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 tracking-wide font-bold italic transform hover:scale-105 hover:from-green-600 hover:to-green-400 border-2 border-green-400/30"
              >
                ユーハバッハを倒しました。
              </button>
              <p className="text-green-400 mt-4 text-2xl font-impact tracking-wide font-bold italic animate-pulse">
                ゲームクリア！
              </p>
            </div>
          )}
        </div>
      )}

      {gameStep === 3 && (
        <div className="text-center p-8 bg-black/50 rounded-xl backdrop-blur-sm">
          <h2 className="text-6xl font-impact text-white tracking-wider font-bold italic">
            おめでとう！
          </h2>
        </div>
      )}
      <style jsx global>{`
        .text-shadow-lg {
          text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5),
                       -3px -3px 6px rgba(255, 0, 0, 0.25);
        }
        .text-shadow-red {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8),
                       0 0 10px rgba(255, 0, 0, 0.5),
                       0 0 20px rgba(255, 0, 0, 0.3);
        }
        .button-glow {
          box-shadow: 0 0 15px rgba(255, 0, 0, 0.3),
                     inset 0 0 15px rgba(255, 0, 0, 0.3);
        }
        .button-glow:hover {
          box-shadow: 0 0 30px rgba(255, 0, 0, 0.5),
                     inset 0 0 30px rgba(255, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
}

export default MainComponent;