export default function ModPage(){
    return (
        <div className="my-6">
            <a href="#files" className="border-b border-b-black font-bold text-sm">Go to files</a>
            <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsum ut fuga saepe, minima incidunt doloribus corporis facere expedita debitis unde, nisi eveniet illum libero accusantium! Perferendis cupiditate quia dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, a non. Quod, ipsa soluta. Eveniet magnam sit voluptate quas illum animi minima architecto aliquid, vel exercitationem, tempore alias nemo iste. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur quae recusandae, rem perspiciatis, in ipsam quo architecto totam assumenda cumque ex reiciendis nobis nesciunt facilis provident unde fugit! Hic!</p>
            <h1 className="text-xl my-3" id="files">Files</h1>
            <table className="table-auto w-full border">
                <thead className="bg-slate-200">
                    <tr>
                        <th className="text-start text-lg p-4">Mod</th>
                        <th className="text-start text-lg p-4">Game Version</th>
                        <th className="text-start text-lg p-4">Version</th>
                        <th className="text-center text-lg p-4">Download</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:bg-slate-100">
                        <td className="p-4">Mod name</td>
                        <td className="p-4">1.20.4</td>
                        <td className="p-4">v1.0.1</td>
                        <td className="p-4 text-center">
                            <button>
                                <img src="/icons/home.svg" className="h-6 w-6" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}