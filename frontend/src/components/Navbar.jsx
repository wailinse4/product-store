import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-base-100/80 backdrop-blur-lg border-b border-base-content/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto">
            <div className="navbar px-4 min-h-[4rem] justify-between">
                { /* LOGO */ }
                <div className="flex-1 lg:flex-none">
                    <span className="font-semibold font-mono tracking-widest text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Product Store</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar

