import TrendingItem from "./trendingItem";

export default function Trending() {
  return (
    <div className="w-full h-[200px] flex flex-col">
      <h4 className="scroll-m-20 text-lg font-medium tracking-tight px-4">
        Trending
      </h4>
      <div className="overflow-auto">
        <ul className="mt-2 space-y-2">
          <TrendingItem tagName="HangoutsLaunch" tagCount="13K" />
          <TrendingItem tagName="BetterThanEverything" tagCount="11K" />
        </ul>
      </div>
    </div>
  );
}
