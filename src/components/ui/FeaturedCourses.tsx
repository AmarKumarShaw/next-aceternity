import Link from "next/link";
import { HoverBorderGradient } from "./hover-border-gradient";

export default function FeaturedCourses(){
    return(
        <div className="py-12 bg-gray-600">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold uppercase">Featured Courses</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn with the Best</p>
                </div>
            </div>
            <div className="mt-20 flex justify-center ">
              
            <Link
              href={"/courses"}>
            <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 mx-auto"
      >
        View all courses
                </HoverBorderGradient>
           </Link>
            </div>
            <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
               
            </div>
            <div>
                4
            </div>
        </div>
    )
}