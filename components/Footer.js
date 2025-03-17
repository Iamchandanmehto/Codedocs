import Image from 'next/image';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillDiscord } from "react-icons/ai";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="font-sans tracking-wide bg-white px-10 pt-12 pb-6">
      <div className="flex flex-wrap justify-between gap-10">
        <div className="max-w-md">
     <h3 className='text-5xl text-black'>About us</h3>
          <div className="mt-6">
            <p className="text-gray-950 leading-relaxed text-sm">
            At Codedocs, we believe that learning web development should be clear, structured, and beginner-friendly. Our platform is designed to help aspiring front-end developers master the fundamentals of HTML, CSS, JavaScript, and modern frameworks like React.
            </p>
          </div>
          <ul className="mt-10 flex space-x-5 text-3xl  ">
        <Link href={'https://x.com/ichandanmehto'}><li>< FaSquareXTwitter/></li></Link>
  
        <Link href={'https://x.com/ichandanmehto'}>      <li><FaInstagramSquare/></li></Link>
       <Link href={'https://www.linkedin.com/in/chandanmehto'}> <li><FaLinkedin/></li></Link>
       <Link href={'https://github.com/Iamchandanmehto'}><li><FaGithubSquare/></li></Link> 
        {/* <li >< AiFillDiscord/></li> */}
          </ul>
        </div>

        {[
          { title: "Products", links: [ "Pricing", "Support", "Client Portal", "Resources"] },
          { title: "Platforms", links: ["Hubspot", "Integration Services", "Marketing Glossary", "UIPath"] },
        ].map((section, index) => (
          <div key={index} className="md:max-lg:min-w-[140px]  ">
            <h4 className="text-gray-950  font-semibold text-lg relative max-sm:cursor-pointer">
              {section.title}
            </h4>
            <ul className="mt-6 space-y-4">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-gray-700 text-gray-900 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            
          </div>
        ))}
      </div>
      <div className=" w-full border-slate-200 border  my-3 bg-gray-100 shadow-custom "></div>
        <div className='items-center justify-center text-center flex flex-row '>
       <Link href={'https://github.com/Iamchandanmehto'}>
       <h3 className='text-lg mx-auto   text-gray-800'> Made By {'<3'} Chandan</h3>
       </Link>   
        </div>
    </footer>
  );
};

export default Footer;