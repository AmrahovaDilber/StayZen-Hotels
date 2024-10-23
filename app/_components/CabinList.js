import React from 'react'

export default async function CabinList() {
    const cabins = await getCabins();

    if (!cabins.length) return null;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {cabins.map((cabin) => (
      <CabinCard key={cabin.id} cabin={cabin} />
    ))}
  </div>
  )
}
