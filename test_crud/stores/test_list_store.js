import { create } from "zustand";

const useStore = create((set) => ({
  listings: [],
  addListing: (listing) =>
    set((state) => ({ listings: [...state.listings, listing] })),
  updateListing: (updatedListing) =>
    set((state) => ({
      listings: state.listings.map((listing) =>
        listing.id === updatedListing.id ? updatedListing : listing
      ),
    })),
  deleteListing: (id) =>
    set((state) => ({
      listings: state.listings.filter((listing) => listing.id !== id),
    })),
}));

export default useStore;
