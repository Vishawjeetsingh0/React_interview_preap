import React from 'react'

const Shimmer = () => {
  return (
    <div className='text-center'>
        <div class="animate-pulse border border-blue-300 shadow rounded-md p-4 mt-10 max-w-sm w-full mx-auto">
  <div class=" flex space-x-4 ">
    <div class="rounded-full  bg-slate-500 h-10 w-10"></div>
    <div class="flex-1 space-y-6 py-1">
      <div class="h-2 bg-slate-600 rounded"></div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-slate-600 rounded col-span-2"></div>
          <div class="h-2 bg-slate-600 rounded col-span-1"></div>
        </div>
        <div class="h-2 bg-slate-600 rounded"></div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Shimmer