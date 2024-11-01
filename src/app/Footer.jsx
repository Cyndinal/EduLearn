import React from 'react';
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
function Footer(props) {
    return (
        <div className={'flex items-center justify-center bg-purple-700'}>

            <div className={'flex space-x-0.5 text-4xl'}>
                <PiInstagramLogoFill fill={'pink'}/>
                <FaFacebookF fill={'blue'}/>
                <IoLogoWhatsapp fill={'green'}/>
            </div>
            <div>

            </div>
             </div>
    );
}

export default Footer;