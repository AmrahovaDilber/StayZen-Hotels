"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathName}?${(params.toString(), { scroll: false })}`);
  }

  return (
    <div className="border border-gray-800 flex ">
      <Button
        handleFilter={handleFilter}
        filter="all"
        activeFilter={activeFilter}
      >
        All cabins
      </Button>
      <Button
        handleFilter={handleFilter}
        filter="small"
        activeFilter={activeFilter}
      >
        {" "}
        1&mdash; 3guests
      </Button>
      <Button
        handleFilter={handleFilter}
        filter="medium"
        activeFilter={activeFilter}
      >
        {" "}
        4&mdash; 7guests
      </Button>
      <Button
        handleFilter={handleFilter}
        filter="large"
        activeFilter={activeFilter}
      >
        {" "}
        8&mdash; 12guests
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter }) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`px-5 py-2 hover:bg-gray-600 ${
        filter === activeFilter ? "bg-gray-700 text-gray-100" : "text-black"
      }`}
    >
      {children}
    </button>
  );
}



// import React from 'react'

// export default function Filter() {
//   return (
//     <div>
//           <header>
//               <div className="flex flex-col">
//                   {/* qara bg ucun */}
//                   <div className="bg-black w-full">
//                       <div className="max-w-[1200px] mx-auto">
//                           {/* kodlari burda yaz */}
//                       </div>
//                   </div>

//                   {/* mavi bg ucun */}
//                   <div className="bg-blue-500 w-full">
//                       <div className="max-w-[1200px] mx-auto">
//                           {/* kodlari burda yaz */}
//                       </div>
//                   </div>

//               </div>
//           </header>

//           <main className="flex flex-col max-w-[1200px] mx-auto">
              
//           </main>
//     </div>
//   )
// }
