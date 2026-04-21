import HeroWrapper from "@/components/Landingpage/HeroWrapper";

import StickyOfferButton from "@/components/socialicons/stickybutton";
import Lead from "@/components/Landingpage/Lead";
export default function Page() {
  return (
    <div>
      <StickyOfferButton></StickyOfferButton>
      <Lead></Lead>

      <div className="pt-[120px] md:pt-[145px]">


      <HeroWrapper />
      </div>
   
    
    </div>
  );
} 