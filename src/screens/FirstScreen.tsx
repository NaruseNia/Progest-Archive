import { Button } from "@nextui-org/react"
import { Link, useNavigate } from "react-router-dom"

export const FirstScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-5">
      <div className="flex items-center justify-center gap-3">
        <figure>
          <img src="/svg/logo.svg" className="w-16" alt="" />
        </figure>
        <h1 className="font-bold text-7xl title">Progest</h1>
      </div>
      <h2 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">Project manager for video creator.</h2>
      <Button onClick={() => navigate("./setting-first")} color="secondary" variant="bordered" className="font-bold">Create First Project</Button>
    </div>
  )
}
