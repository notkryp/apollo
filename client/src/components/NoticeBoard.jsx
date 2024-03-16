import { Button } from "flowbite-react"

const NoticeBoard = () => {
  return (
    <div className="flex-col flex h-[700px] w-[500px]">
        <div className="flex h-1/6 items-center bg-[#00994B] rounded-t-3xl">
            <h1 className="text-white text-[36px] ml-6 font-montserrat text-bold">Notice board</h1>
        </div>
        <div className="flex-col h-full p-6 rounded-b-3xl flex gap-2 border-2">
        <div className="rounded-lg flex-col p-3  flex gap-1 border-b-2">
            <h1 className="font-montserrat text-bold text-md text-slate-600">Feburary 28, 2024</h1>
            <p className=" text-md font-montserrat text-[#00994B]">School Will be Closed today on the occation of Jai jatra</p>
        </div>
        <div className="rounded-lg flex-col p-3  flex gap-1 border-b-2">
            <h1 className="font-montserrat text-bold text-md text-slate-600">Feburary 28, 2024</h1>
            <p className=" text-md font-montserrat text-[#00994B]">School Will be Closed today on the occation of Jai jatra</p>
        </div>
        <div className="rounded-lg flex-col p-3  flex gap-1 border-b-2">
            <h1 className="font-montserrat text-bold text-md text-slate-600">Feburary 28, 2024</h1>
            <p className=" text-md font-montserrat text-[#00994B]">School Will be Closed today on the occation of Jai jatra</p>
        </div>
        <div className="rounded-lg flex-col p-3  flex gap-1 border-b-2">
            <h1 className="font-montserrat text-bold text-md text-slate-600">Feburary 28, 2024</h1>
            <p className=" text-md font-montserrat text-[#00994B]">School Will be Closed today on the occation of Jai jatra</p>
        </div>
        
        <Button className="bg-[#00994B] flex w-full md:w-max lg:w-max xl:w-max mt-3 ml-2">Read More</Button>
        </div>
    </div>
  )
}

export default NoticeBoard