import { Flame } from "lucide-react";

const Footer = () =>{
    return(
        <footer className="relative z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Flame className="h-6 w-6 text-yellow-500" />
              <span className="font-semibold">VendorGrid</span>
            </div>
            <p className="font-semibold text-muted-foreground text-sm">
              © 2025 VendorGrid. All rights reserved. Designed by Virender
              Prasad 💖
            </p>
          </div>
        </div>
      </footer> 
    )
}
export default Footer;