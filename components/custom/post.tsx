"use client"
import { Star } from "lucide-react";
import { useState } from "react";

export default function Post() {
  const [fav, setFav] = useState<boolean>(false);

  return (
    <>
      <div className="w-1/5 h-auto bg-card rounded-xl border text-card-foreground shadow pb-14 select-none cursor-pointer">
        <div className="flex flex-col space-y-1.5 p-6 pb-4 gap-4">
          <div>
            <p className="font-semibold text-xl">Tiramisu</p>
            <span className="text-sm text-muted-foreground">
              John Cobblepot
            </span>
          </div>

          <div className="flex flex-row space-x-8 text-primary">
            <img
              src="https://via.placeholder.com/150"
              alt="title"
              className="w-64"
            />
            <Star className="w-8 h-8 text-rose-500 cursor-pointer" fill={fav ? "currentColor" : "none"} onClick={() => setFav(!fav)} /> 
          </div>
        </div>
      </div>
    </>
  );
}
