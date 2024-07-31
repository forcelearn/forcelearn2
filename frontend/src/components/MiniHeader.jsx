import React from 'react'

const MiniHeader = () => {
  return (
    <section className="bg-primary py-2 hidden sm:block">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="hidden lg:block">
            <p className="my-2 text-sm flex items-center">
              <i className="fas fa-map-marker-alt mr-3"></i>
              <span>1600 Amphitheatre Parkway, CA 94043</span>
            </p>
          </div>

          <div>
            <p className="my-2 text-sm flex items-center">
              <i className="fas fa-envelope mr-3"></i>
              <a className="text-900" href="mailto:vctung@outlook.com">vctung@outlook.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MiniHeader
