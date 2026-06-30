import React, { useState } from "react";
import { ROOMS } from "../data";
import { Room } from "../types";
import { Sparkles, Star, Bed, Maximize2, CheckCircle2, X } from "lucide-react";
import { PeacockDivider } from "./PeacockIcons";

interface RoomsProps {
  onBookRoom: (room: Room) => void;
}

export const Rooms: React.FC<RoomsProps> = ({ onBookRoom }) => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleBookClick = (room: Room) => {
    setSelectedRoom(room);
    setShowConfirm(true);
  };

  const handleConfirmReservation = () => {
    if (selectedRoom) {
      onBookRoom(selectedRoom);
      setShowConfirm(false);
      // We will alert the parent/show inline success
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="rooms">
      {/* Subtle peacock background pattern */}
      <div className="absolute inset-0 peacock-pattern pointer-events-none opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-accent bg-accent/10 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sublime Sanctuary Spaces</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary">
            Imperial Accommodations
          </h2>
          <p className="text-gray-600 text-base max-w-xl mx-auto leading-relaxed">
            Select from our highly exclusive collection of suites and villas. Styled in royal teak wood and limestone, each chamber guarantees a deep spiritual silence and endless comfort.
          </p>
        </div>

        {/* Room Grid - 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ROOMS.map((room) => (
            <div
              key={room.id}
              className="glass-light rounded-[16px] overflow-hidden shadow-sm flex flex-col justify-between group transform hover:-translate-y-2 transition-all duration-300"
              id={`room-card-${room.id}`}
            >
              {/* Image & Badges */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Location Badge */}
                <div className="absolute top-4 left-4 glass-dark text-white font-semibold text-[10px] uppercase tracking-wider px-2.5 py-1.5 rounded-[8px] shadow-md">
                  {room.location}
                </div>

                {/* Duration / Rating Badge */}
                <div className="absolute bottom-4 right-4 glass-accent text-primary font-bold text-xs px-2.5 py-1.5 rounded-[8px] flex items-center gap-1 shadow-md">
                  <Star className="w-3.5 h-3.5 fill-primary stroke-primary" />
                  <span>{room.rating}</span>
                </div>
              </div>

              {/* Content Detail */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4 text-left">
                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-bold text-primary group-hover:text-accent transition-colors">
                    {room.name}
                  </h3>
                  
                  {/* Basic Specifications */}
                  <div className="flex items-center gap-3 text-gray-500 text-xs font-medium pt-1">
                    <span className="flex items-center gap-1">
                      <Bed className="w-3.5 h-3.5 text-accent" />
                      {room.beds}
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize2 className="w-3.5 h-3.5 text-accent" />
                      {room.size}
                    </span>
                  </div>
                </div>

                {/* Core Perks */}
                <div className="space-y-1">
                  {room.amenities.slice(0, 3).map((amenity, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-gray-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing & Booking CTA */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-primary leading-none">
                      ${room.price}
                    </span>
                    <span className="text-[10px] text-accent font-bold uppercase tracking-wider mt-1">
                      /Person
                    </span>
                  </div>

                  <button
                    onClick={() => handleBookClick(room)}
                    className="glass-btn-accent font-bold px-5 py-2.5 rounded-[12px] text-xs uppercase tracking-wider"
                    id={`book-now-${room.id}`}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirm && selectedRoom && (
        <div className="fixed inset-0 bg-[#0B4F6C]/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="glass-light rounded-[16px] overflow-hidden max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-scale-up">
            <button
              onClick={() => setShowConfirm(false)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors focus:outline-none"
              aria-label="Close"
              id="close-confirm-modal"
            >
              <X className="w-4.5 h-4.5" />
            </button>

            <div className="relative h-48">
              <img
                src={selectedRoom.image}
                alt={selectedRoom.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/50 flex items-end p-5">
                <h4 className="font-serif text-xl font-bold text-white">
                  Confirm {selectedRoom.name} Reservation
                </h4>
              </div>
            </div>

            <div className="p-6 text-left space-y-4">
              <p className="text-sm text-gray-600">
                You are about to submit a reservation inquiry for the luxurious <strong>{selectedRoom.name}</strong> located in the <strong>{selectedRoom.location}</strong>.
              </p>

              <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500">Rate:</span>
                  <span className="font-semibold text-primary">${selectedRoom.price} /Person</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Bedding:</span>
                  <span className="font-semibold text-primary">{selectedRoom.beds}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Complementary:</span>
                  <span className="font-semibold text-emerald-700">Breakfast & Private Butler Service</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="w-1/2 glass-btn-primary py-3 rounded-[12px] text-xs uppercase tracking-wider"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmReservation}
                  className="w-1/2 glass-btn-accent font-bold py-3 rounded-[12px] text-xs uppercase tracking-wider"
                  id="submit-room-reservation"
                >
                  Confirm Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Elegant Separator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <PeacockDivider color="#C8A24A" />
      </div>
    </section>
  );
};
