import { ChefHat } from "lucide-react";

export default function Header() {
  return(
    <>
      <div className="flex flex-row justify-start items-center">
        <h1 className="text-primary text-4xl font-bold p-4">guava</h1>
        <ChefHat className="text-primary" size={32}/>
      </div>

    </>
  );
}