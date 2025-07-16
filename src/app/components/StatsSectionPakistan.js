"use client";

import {
  BuildingOfficeIcon,
  MapIcon,
  UserGroupIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import AnimatedMap from "@/app/components/AnimatedMap"
import Counter from "@/app/components/Counter"

export default function StatsSectionPakistan() {
  return (
    <section className="text-white py-24 px-6 bg-emerald-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-white">
            Advancing Real Estate in Pakistan
          </h2>
          <p className="text-lg text-gray-200">
            Our deep-rooted local expertise and integrated planning approach
            have helped shape Pakistan’s evolving commercial and residential
            landscape.
          </p>
          <button className="mt-4 px-6 py-3 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-emerald-900 transition rounded-md font-medium">
            Check Our Projects
          </button>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
              <UserGroupIcon className="h-6 w-6 text-[#d4af37] mb-2" />
              <h3 className="text-2xl font-bold text-white">
                <Counter target={2000} suffix="+" />
                </h3>

              <p className="text-sm text-gray-300">
                clients & investors across Pakistan
              </p>
            </div>

            <div>
              <MapIcon className="h-6 w-6 text-[#d4af37] mb-2" />
              <h3 className="text-2xl font-bold text-white">5M+</h3>
              <p className="text-sm text-gray-300">
                square feet developed nationwide
              </p>
            </div>

            <div>
              <BuildingOfficeIcon className="h-6 w-6 text-[#d4af37] mb-2" />
              <h3 className="text-2xl font-bold text-white">30+</h3>
              <p className="text-sm text-gray-300">
                residential & commercial projects
              </p>
            </div>

            <div>
              <GlobeAltIcon className="h-6 w-6 text-[#d4af37] mb-2" />
              <h3 className="text-2xl font-bold text-white">~1%</h3>
              <p className="text-sm text-gray-300">
                of Karachi GDP in our ecosystem
              </p>
            </div>
          </div>
        </div>

        {/* Right Image / Map */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <AnimatedMap/>
        </div>
      </div>
    </section>
  );
}
