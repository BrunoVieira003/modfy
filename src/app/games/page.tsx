import GameCard from "@/components/game-card";

export default function Games(){
    return (
        <div>
            <h1 className="text-4xl font-bold mb-10">Games</h1>
            <div className="flex gap-8">
                {[1,2,3].map(item => <GameCard key={item}/>)}
            </div>
        </div>
    )
}