import React from "react"
import { PROPERTYLISTINGSAMPLE } from "@/constants"

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <section
        className="h-[400px] flex flex-col items-center justify-center text-center bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <h1 className="text-4xl font-bold mb-2">
          Find your favorite place here!
        </h1>
        <p className="text-lg">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filters */}
      <section className="flex gap-3 flex-wrap justify-center py-6">
        {["Top Villa", "Self Checkin", "Beachfront", "Mountain View"].map(
          (filter, idx) => (
            <span
              key={idx}
              className="px-4 py-2 border rounded-full cursor-pointer hover:bg-gray-200"
            >
              {filter}
            </span>
          )
        )}
      </section>

      {/* Listings */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        {PROPERTYLISTINGSAMPLE.map((property, idx) => (
          <div
            key={idx}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg"
          >
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{property.name}</h2>
              <p className="text-sm text-gray-600">
                {property.address.city}, {property.address.country}
              </p>
              <p className="mt-2 text-blue-600 font-bold">
                ${property.price}/night
              </p>
              <p className="text-yellow-500">⭐ {property.rating}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default HomePage
