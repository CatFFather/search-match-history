import Image from "next/image";
import lol from "/public/assets/lol.jpg";
import tft from "/public/assets/tft.jpg";
import pubg from "/public/assets/pubg.jpg";

const gameList = [
  { path: "/lol", name: "리그 오브 레전드", img: lol },
  { path: "/tft", name: "전략적 팀 전투", img: tft },
  { path: "/pubg", name: "배틀그라운드", img: pubg },
];

export default function Home() {
  return (
    <div className="mx-auto my-5" style={{ maxWidth: "1080px" }}>
      <div className="flex gap-6">
        <div className="bg-[#27282E] p-8 rounded-lg flex flex-col flex-1">
          <div className="flex flex-col gap-2 ">
            <h3 className="text-[#FFFFFF] font-bold text-xl">전적검색</h3>
            <div className="flex gap-3 flex-wrap">
              {gameList.map((game) => {
                return (
                  <div className="flex gap-1 flex-col justify-center items-center">
                    <Image className="rounded-lg" src={game.img}></Image>
                    <div className="text-[#BBBBBB] text-sm">{game.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="my-6 border border-[#2D2F37]"></div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[#FFFFFF] font-bold text-xl">e스포츠</h3>
            <div className="flex gap-3">
              <div className="flex gap-1 flex-col justify-center items-center">
                <div>IMG</div>
                <div className="text-[#BBBBBB] text-sm">리그 오브 레전드</div>
              </div>
              <div className="flex gap-1 flex-col justify-center items-center">
                <div>IMG</div>
                <div className="text-[#BBBBBB] text-sm">리그 오브 레전드</div>
              </div>
              <div className="flex gap-1 flex-col justify-center items-center">
                <div>IMG</div>
                <div className="text-[#BBBBBB] text-sm">리그 오브 레전드</div>
              </div>
              <div className="flex gap-1 flex-col justify-center items-center">
                <div>IMG</div>
                <div className="text-[#BBBBBB] text-sm">리그 오브 레전드</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#27282E] p-8 rounded-lg">
          <h3 className="text-[#FFFFFF] font-bold">일정</h3>
        </div>
      </div>
    </div>
  );
}
