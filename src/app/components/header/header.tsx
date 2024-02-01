import Image from "next/image";
import "./header.css";

export default function Header() {
  return (
   <div className="header">
       <div>
           <h1>Hi i`am Cassiano! 👋 </h1>
           <h2>Software Developer</h2>
       </div>
       <Image
            src="/me.jpeg"
            alt="Cassiano image"
            width={325}
            height={310}
            priority
        />
   </div>
 
  );
}
