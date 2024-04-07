import React, {useRef} from "react";

export default function Search({setQuery}) {
  const queryRef = useRef(null);
  return (
    <div className="flex flex-col justify-stretch mb-8">
      <div>
        <input
          className="w-1/2 border-neutral-700 border h-12 p-4 rounded-lg"
          type="text"
          placeholder="Popular: Cisco, Google, Microsoft..."
          ref={queryRef}
        />
        <button className=" w-1/8 bg-violet-600 text-white ml-6 p-2 px-4 rounded" onClick={()=>setQuery(queryRef.current.value)}>
          Search
        </button>
      </div>
      <div className="flex">
        <input
          className=" w-1/12 border-neutral-700 border h-10 p-4 rounded-lg mt-4 mr-4"
          type="text"
          placeholder="Sort By"
        />
        <input
          className=" w-1/12 border-neutral-700 border h-10 p-4 rounded-lg mt-4"
          type="text"
          placeholder="Categories"
        />
      </div>
    </div>
  );
}
