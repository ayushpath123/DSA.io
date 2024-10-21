import React from "react"
const Header = ()=>{
return (
    <div>
        <div className="flex flex-row items-center justify-between px-6 py-4 lg:mx-8">
        <div>
        <img src="./src/images/logo.svg" alt="Logo" className="h-12" img ></img>
        </div>
        <div>
            <button className="rounded-2xl border-green-950 bg-green-950 items-center p-2 text-white antialiased ... font-bold ">Join Community</button>
        </div>
        </div>
    </div>
)
}
export default Header 