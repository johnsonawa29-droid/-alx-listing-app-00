import React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p>© {new Date().getFullYear()} ListingApp. All rights reserved.</p>
    </footer>
  )
}

export default Footer
