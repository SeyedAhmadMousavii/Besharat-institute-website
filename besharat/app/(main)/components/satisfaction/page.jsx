import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";

const Satisfaction = () => {
    return ( 
         <div className="px-16 md:flex md:justify-center md:align-middle container mb-12">
        <div className="flex-col justify-between align-middle m-auto">
              <ChatBubbleBottomCenterTextIcon className="text-[#D4AF37] w-12 h-12 mx-auto" />
              <p className="text-3xl font-bold text-[#000080]">رضایت کارآموزان</p>
            </div>
        <div className="md:w-[300px] rounded-3xl shadow-lg border-2 border-[#D4AF37]/30">
          <video
            src="/assets/video/IMG_3011.MOV"
            controls
            className="w-full rounded-3xl"
          ></video>
        </div>
      </div>
     );
}
 
export default Satisfaction;