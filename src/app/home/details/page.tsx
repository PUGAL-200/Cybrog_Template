import { Home } from "@/app/components/detail/home";
import { Detail  } from "@/app/components/detail/detail";
import { Games } from "@/app/components/detail/games";


export default function page() {
    return (
    <>
            <div className="bg-gray-500 rounded-2xl mx-4 sm:mx-8 md:mx-10 lg:mx-20 p-4 sm:p-6 md:p-10 lg:p-12">
                <Home />
                <Detail/>
                <Games/>
            </div>





            </>)
}
