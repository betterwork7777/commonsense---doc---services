
import React from "react";

const services = [
  { name: "Citizenship Application (N-400)", price: "$350" },
  { name: "Divorce Papers (Non-Contested)", price: "$500" },
  { name: "Divorce with Child Support", price: "$750" },
  { name: "Small Claims", price: "$100" },
  { name: "Family-Based Green Card (I-485)", price: "$750 + $100 per additional family member" },
  { name: "Family Petition (I-130)", price: "$200" },
  { name: "Employment-Based Green Card", price: "$1,000" },
  { name: "E-2 Investment Visa", price: "$1,000" },
];

export default function Services() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <ul>
        {services.map((service, idx) => (
          <li key={idx} className="mb-2">
            <strong>{service.name}</strong>: {service.price}
          </li>
        ))}
      </ul>
    </main>
  );
}
