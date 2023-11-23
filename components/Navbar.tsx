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

export default function Navbar() {
  return (
    <div className="bg-gray-200 flex justify-between items-center w-full rounded-md py-4 px-8">
      <h3 className="text-lg font-bold">Mini Project</h3>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer">
            <HamburgerMenuIcon />
          </MenubarTrigger>
          <MenubarContent align="end">
            <MenubarItem>Dashboard</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
