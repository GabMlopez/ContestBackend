import { useState } from "react";

function CatCard({ Card}) {
    const caturl = new URL(Card.url, import.meta.url).href
  return (
    <div
      className="min-w-[280px] bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start border border-gray-200 hover:shadow-xl transition cursor-pointer relative"
    ><img src="catUrl"></img>
      <div className="mt-3 flex items-center space-x-3">a
      </div>

    </div>
  );
}

export default CatCard;
