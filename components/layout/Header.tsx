import React from "react"

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
      <div className="text-2xl font-bold">🏠 ListingApp</div>

      <nav className="flex gap-6">
        <a href="#">Rooms</a>
        <a href="#">Mansion</a>
        <a href="#">Countryside</a>
      </nav>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded px-3 py-1"
        />
        <button className="bg-blue-600 text-white px-4 py-1 rounded">
          Sign in
        </button>
        <button className="bg-gray-200 px-4 py-1 rounded">Sign up</button>
      </div>
    </header>
  )
}

export default Header
