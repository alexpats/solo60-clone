"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// Dynamic imports για τα components του react-leaflet ώστε να φορτώνονται μόνο στον client
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center">
      <motion.h1
        className="text-4xl font-bold text-center mb-6 text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Καλώς ήρθατε στο Solo60 Clone 🚀
      </motion.h1>

      {/* Ενότητα τοποθεσίας με χάρτη */}
      <motion.div
        className="bg-white p-6 rounded-2xl shadow-lg max-w-4xl w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Τοποθεσία</h2>
        <div className="h-64 w-full rounded-lg overflow-hidden">
          <MapContainer
            center={[51.5202, -0.0795]} // Συντεταγμένες παράδειγμα (Shoreditch)
            zoom={15}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[51.5202, -0.0795]}>
              <Popup>Solo60 - Shoreditch</Popup>
            </Marker>
          </MapContainer>
        </div>
      </motion.div>

      {/* Ενότητα κράτησης */}
      <motion.div
        className="bg-white p-6 rounded-2xl shadow-lg max-w-4xl w-full mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Κράτηση Χώρου</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Όνομα"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="datetime-local"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all"
          >
            Κάνε Κράτηση
          </button>
        </form>
      </motion.div>
    </div>
  );
}