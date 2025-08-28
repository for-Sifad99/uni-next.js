
import { FaStar, FaClock, FaUser } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';
import Link from 'next/link';

const Page = async () => {

  const res = await fetch("http://localhost:5000/courses");
  const courses = await res.json();

  return (
    <section
      id="courses"
      className="mt-10 sm:mt-12 md:mt-16 lg:mt-18 xl:mt-22 px-4 sm:px-8 lg:px-12 xl:px-20"
    >
      {/* Section Header */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14">
        <p className="font-semibold text-[#1f242e] uppercase tracking-wide">
          Let's Leran
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-2 lg:gap-4 mb-12 mt-8">
        {courses.map((course) => (
          <div
            key={course._id}
            className="group shadow-sm hover:shadow-md flex flex-col hover:-translate-y-2 transition-transform duration-500"
          >
            <div className="relative w-full h-96 md:h-72 lg:h-96 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />

              {/* Default Overlay */}
              <div className="absolute left-0 right-0 bottom-0 p-6 md:px-2 md:py-4 lg:p-6 flex flex-col text-white bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-0">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.round(course.rating)
                          ? 'text-orange-500'
                          : 'text-gray-100'
                      }`}
                    />
                  ))}
                </div>
                <h3 className="text-lg leading-5 font-semibold mb-1 text-white">
                  {course.title}
                </h3>
              </div>

              {/* Hover Overlay */}
              <div className="absolute left-0 right-0 bottom-0 p-6 md:px-2 md:py-4 lg:p-6 flex flex-col text-white bg-gradient-to-t from-black/80 via-black/60 to-transparent opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-lg md:text-base lg:text-lg xl:text-xl leading-5 md:leading-4 lg:leading-4.5 xl:leading-5 font-semibold mb-2">
                  {course.title}
                </h3>

                <div className="flex items-end justify-between">
                  <div className="flex flex-col gap-2 md:gap-1 lg:gap-2">
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-2 md:mb-1 lg:mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`w-3 h-3 lg:w-4 lg:h-4 ${
                            i < Math.round(course.rating)
                              ? 'text-orange-500'
                              : 'text-gray-100'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-2 md:gap-1 lg:gap-2 text-sm md:text-xs lg:text-sm">
                      <FaClock className="text-white" />
                      {course.duration}
                    </div>

                    {/* Instructor */}
                    <div className="flex items-center gap-2 md:gap-1 lg:gap-2 text-sm md:text-xs lg:text-sm">
                      <FaUser className="text-white" />
                      By{' '}
                      <p className="leading-3 lg:leading-4">{course.author}</p>
                    </div>
                  </div>

                  {/* Button */}
                  <Link
                    href={`/courses/${course._id}`}
                    className="w-full flex flex-col justify-end"
                  >
                    <button className="ml-auto w-fit p-4 md:p-3 lg:p-4 bg-[#ff5c2a] text-white hover:text-[#ff5c2a] hover:bg-white rounded-full overflow-hidden transition-all duration-500 cursor-pointer">
                      <FaArrowRight className="md:w-4 md:h-4 lg:w-5 lg:h-5" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
