"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Home() {
  const [items, setItems] = useState<string[]>([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const handleEnter = (e: any) => {
      if (e.key === "Enter") {
        setItems([...items, value]);
        setValue("");
      }
    };
    window.addEventListener("keydown", handleEnter);
    return () => {
      window.removeEventListener("keydown", handleEnter);
    };
  }, [items, value]);

  return (
    <main>
      <div className="grid grid-cols-2 gap-4">
        <div className="border-2 min-h-[30vh] flex flex-col justify-between rounded-md border-gray-800">
          <div className="mx-auto w-full  py-6 px-8">
            <h1 className="text-3xl border-b font-bold leading-tight text-gray-900">
              List of things
            </h1>
            <div className="mt-4">
              <div>
                {items.map((item, i) => (
                  <h2
                    key={i}
                    className="text-lg mt-1 leading-tight text-gray-900"
                  >
                    {item}
                  </h2>
                ))}
              </div>
            </div>
          </div>
          <div className="flex">
            <Input
              autoFocus
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter name of item.."
              className=" border-gray-900 rounded-none border-2 border-b-0 border-x-0"
            />
            <Button
              onClick={() => {
                setItems([...items, value]);
                setValue("");
              }}
              className="rounded-none"
            >
              Button
            </Button>
          </div>
        </div>

        <div>
          <Button className="bg-blue-600 hover:bg-blue-800 rounded text-xl w-full py-8">
            Generate Kit
          </Button>
          <Button className="bg-red-600 mt-4 hover:bg-red-800 rounded text-xl w-full py-8">
            Upload Design
          </Button>
          <Button className="bg-yellow-600 mt-4 hover:bg-yellow-800 rounded text-xl w-full py-8">
            Connect with Manufacturer
          </Button>
          <Button className="bg-black mt-4 hover:bg-gray-800 rounded text-xl w-full py-8">
            Buy Now
          </Button>
        </div>
      </div>
    </main>
  );
}
