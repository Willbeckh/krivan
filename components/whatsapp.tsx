import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const WhatsappIcon = () => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="fixed bottom-6 right-0 z-50 w-20 hover:w-28 transition-all ps-4 p-2 bg-slate-950 rounded-l-xl cursor-poiter">
            <a
              href="https://wa.me/254790923002"
              target="_blank"
              className="text-green-500 hover:text-white transition"
            >
              <FaWhatsapp size={48} />
            </a>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="p-1">Chat us on Whatsapp!</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default WhatsappIcon;
