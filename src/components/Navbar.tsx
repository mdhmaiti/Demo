// the navbar consist if the Home, shop, orders, cart, and about and maybe a search option .

import Link from "next/link";
import MobMenu from "./MobMenu";
import { Button } from "./ui/button";
import { ShoppingCart, ShoppingBag, Home, Book } from "lucide-react";



const navItems = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Shop", url: "/shop" },
  { id: 3, title: "Orders", url: "/orders" },
  { id: 4, title: "Cart", url: "/cart" },
  { id: 5, title: "About", url: "/about" },
];

const Navbar = () => {
 
  return (
    <nav className="bg-green-600 p-3 ">
      <div className=" flex justify-between items-center">
        <div>
          <Link href="/">Logo</Link>
        </div>
        <div className="hidden md:flex space-x-4">

        {navItems.map((item) => (
          <Link className="text-slate-100 text-lg font-medium  "
            href={item.url}
            key={item.id}
            
          >
           <div className="flex flex-row  justify-center items-center">
              {item.title === "Cart" && <ShoppingCart />}
              {item.title === "Shop" && <ShoppingBag />}
              {item.title === "Home" && <Home />} 
              {item.title === "About" && <Book />}
              <Button
                className="text-slate-100 text-xl font-medium "
                variant="ghost"
              >
                {item.title}
              </Button>
            </div>
            
          </Link>
        ))}
          
        </div>
        <div className="md:hidden  ">
          <MobMenu/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
