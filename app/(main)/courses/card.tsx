import { cn } from "@/lib/utils";
import { Check} from "lucide-react";
import Image from "next/image";


interface Props{
    key: number,
    id:number,
    imageSrc:string,
    title:string,
    active?: boolean,
    disabled?: boolean,
    onClick: (id:number) => void
}

export const Card = ({id,title, disabled , onClick , active, imageSrc}:Props) =>{
    return (

        
        <div 
        onClick = { ()=> onClick(id) }
        className= {cn("h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor:pointer active:borderb-2 flex flex-col items-center justify-between p-3 pb-6 min-h-[217px] min-w-[200px]" , disabled && "no-active-pointer opacit-50")} >



           <div className="min-h-[24px] w-full flex items-center justify-end">
            {active && (
                <div className="rounded-md bg-green-600 flex items-center           justify-center p-1.5 ">
                    <Check className="text-white stroke-[4] h-4 w-4 "/>
                </div>
            )}
           </div>


           <Image src={imageSrc} width={93.33} height={70} alt={title} className="rounded-lg shadow-md border object-cover"/>
           
           <p className="text-neutral-700 text-center font-bold mt3">{title}</p>

        </div>
    );
}