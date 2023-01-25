import {
    IoMdSunny,
    IoMdRainy,
    IoMdCloudy,
    IoMdSnow,
    IoMdThunderstorm,
} from 'react-icons/io';
import { 
    TbMist, 
} from "react-icons/tb";
import {
    BsCloudHaze2Fill,
    BsCloudDrizzleFill,
    BsFillCloudFog2Fill,
} from 'react-icons/bs';
import { GiSmokeBomb } from "react-icons/gi";

export default function GetIcon(desc) {
    let icon;
    console.log(desc);
    switch (desc) {
        case 'Clouds':
            icon = <IoMdCloudy />;
            break;
        case 'Haze':
            icon = <BsCloudHaze2Fill />;
            break;
        case 'Rain':
            icon = <IoMdRainy className='text-[#31cafb]' />;
            break;
        case 'Clear':
            icon = <IoMdSunny className='text-[#ffde33]' />;
            break;
        case 'Drizzle':
            icon = <BsCloudDrizzleFill className='text-[#31cafb]' />;
            break;
        case 'Snow':
            icon = <IoMdSnow className='text-[#31cafb]' />;
            break;
        case 'Thunderstorm':
            icon = <IoMdThunderstorm />;
            break;
        case 'Mist':
            icon = <TbMist />;
            break;
        case 'Fog':
            icon = <BsFillCloudFog2Fill />;
            break;
        case 'Smoke':
            icon = <GiSmokeBomb />;
            break;
    }
    console.log(icon);
    return icon;
}
