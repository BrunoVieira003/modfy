export default function ModPage(){
    return (
        <div>
            <h1 className="text-4xl font-bold">Mod name</h1>
            <span className="text-sm text-slate-400">Game name</span>
            <h2 className="text-xl mt-3">by Author name</h2>
            <p className="my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsum ut fuga saepe, minima incidunt doloribus corporis facere expedita debitis unde, nisi eveniet illum libero accusantium! Perferendis cupiditate quia dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, a non. Quod, ipsa soluta. Eveniet magnam sit voluptate quas illum animi minima architecto aliquid, vel exercitationem, tempore alias nemo iste. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur quae recusandae, rem perspiciatis, in ipsam quo architecto totam assumenda cumque ex reiciendis nobis nesciunt facilis provident unde fugit! Hic!</p>
            <h3 className="text-xl font-medium mb-4">Requirements</h3>
            <table className="table-auto w-1/3 border">
                <thead className="bg-slate-200">
                    <tr>
                        <th className="text-start">Mod</th>
                        <th className="text-start">Version</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mod name</td>
                        <td>v1.0.1</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}