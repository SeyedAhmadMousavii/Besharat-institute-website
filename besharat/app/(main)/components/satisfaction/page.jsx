import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";

const Satisfaction = () => {
    return ( 
         <div className="px-16 md:flex md:justify-center md:align-middle text-[#ffd700] container mb-12">
        <div className="flex-col justify-between align-middle m-auto">
              <ChatBubbleBottomCenterTextIcon className="text-[#ffd700]" />
              <p className="text-3xl">رضایت کارآموزان</p>
            </div>
        <div className="md:w-[300px] rounded-3xl">
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