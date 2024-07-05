import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from 'react-icons/ci';
import { FaInstagram } from "react-icons/fa";
import "./Footer.css"



export const Footer = () => {
  return (
    <div className='footer'>
<FaWhatsapp className='icon' />
<CiFacebook className='icon'/>
<FaInstagram className='icon'/>
    </div>
  )
}

export default Footer
