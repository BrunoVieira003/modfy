import GameCard from "@/components/game-card";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const games = await prisma.game.findMany()
  return (
    <div className="flex flex-col">
      <h1 className="text-5xl text-center mb-10">Welcome to Modfy</h1>
      <div className="flex justify-between items-center">
        <h2 className="text-4xl mb-4">Games</h2>
        <Link href='/games' className="flex items-center gap-1">
          View all games
          <svg fill="currentColor" width="16" height="16" viewBox="0 0 24 24" id="right" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg">
            <path id="primary" d="M21.71,11.29l-7-7a1,1,0,0,0-1.42,1.42L18.59,11H3a1,1,0,0,0,0,2H18.59l-5.3,5.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l7-7A1,1,0,0,0,21.71,11.29Z"/>
          </svg>
        </Link>
      </div>
      <div className="flex gap-8 flex-wrap">
        {games.map(item => <GameCard game={item}/>)}
      </div>
    </div>
  );
}
