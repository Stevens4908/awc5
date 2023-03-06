import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaTelegram, FaWhatsapp } from 'react-icons/fa';

class Footer extends React.Component {

        render() {

                const ir_ig = () => {
                        window.open("https://instagram.com/adworkchain?igshid=YmMyMTA2M2Y=" )
                    }

                    
                const ir_fb = () => {
                        window.open("https://www.facebook.com/adworkchain" )
                    }

                    
                const ir_tw = () => {
                        window.open("https://twitter.com/Adworkchain?t=4IO_ZF4kLYWiW85whpf0mw&s=09" )
                    }

                    const ir_wp = () => {
                        window.open("https://wa.me/message/W2NG2HSGPFG2L1" )
                    }
                    
                const style = { color: "#00ffff", fontSize: "1.3em" , cursor:"pointer" }
                
                return (
                        <div>
                                <div className="mensaje">
                                        <ul className="mensaje_footer">
                                                <li><FaWhatsapp style={{ color: "#00ffff", fontSize: "3em" , cursor:"pointer"}} onClick={ir_wp}/></li>
                                        </ul>

                                </div>
                                <div className="footer">
                                        <ul className="footer_menu">
                                                <li><FaInstagram style={style } onClick={ir_ig}/></li>
                                                <li><FaFacebookF style={style} onClick={ir_fb}/></li>
                                                <li><FaTwitter style={style} onClick={ir_tw}/></li>
                                                <li><FaTelegram style={style} /></li>
                                        </ul>

                                </div>
                        </div>


                )

        }

}
export default Footer;