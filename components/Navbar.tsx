import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-gray-200 flex justify-between items-center w-full rounded-md py-4 px-8">
      <h3 className="text-lg font-bold">
        <Link href="/">Mini Project</Link>
      </h3>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer">
            <HamburgerMenuIcon />
          </MenubarTrigger>
          <MenubarContent align="end">
            <Link href="/designer">
              <MenubarItem>Designer</MenubarItem>
            </Link>
            <Link href="/manufacturer">
              <MenubarItem>Manufacturer</MenubarItem>
            </Link>
            <Link href="/supplier">
              <MenubarItem>Supplier</MenubarItem>
            </Link>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
