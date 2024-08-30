import { HomePage } from "@/app/components/home";
import { GamingliabraryPage } from "@/app/components/gamingliabrary";

import { PopularPage } from "@/app/components/popular";

export default function page (){
    return(
    <>
    <div className="bg-gray-500 rounded-2xl mx-4 sm:mx-8 md:mx-10 lg:mx-20 p-4 sm:p-6 md:p-10 lg:p-12">
    <HomePage/>
    <PopularPage/>
    <GamingliabraryPage/>
    </div>
    </>
    )
}