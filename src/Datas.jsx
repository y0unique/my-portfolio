//import icons
import { SiCplusplus, SiCsharp, SiPython, SiJavascript, SiBlender, SiAdobephotoshop, SiAdobeillustrator, SiLaravel, SiMysql, SiPhp,  SiGmail, SiExpress, SiTailwindcss    } from "react-icons/si";
import { FaJava, FaHtml5, FaReact, FaCss3, FaFigma, FaFacebook ,FaInstagram,FaLinkedin, FaTwitter, FaGithub, FaNodeJs  } from "react-icons/fa";

import { DiJavascript, DiCss3 , DiPython, DiGit , DiReact, DiPhotoshop, DiCode} from "react-icons/di";
import { BsTelephoneFill } from "react-icons/bs";

export const data = {
  // landing
    firstName: "jon",
    lastName: "raguini",
    myPicture: "image.jpg",
    profession: ["FRONTEND DEVELOPER", "BACKEND DEVELOPER" , "IT SUPPORT"],

    // education
    educationData:[
          {   year: "2024", 
              title: "IT Support Officer", 
              location: "Whiterain Digital Technologies Inc.- Makati" 
          },
          {   year: "2023", 
              title: "ICT Staff", 
              location: "Department of Education - Manila" 
          },
          {   year: "2023", 
              title: "Bachelor of Science in Information Technology", 
              location: "Universidad De Manila" 
          },
          {   year: "2019", 
              title: "Technical-Vocational Livelihood-Information and Communications Technology", 
              location: "AMA Computer College Makati" 
          },
          {   
          }
    ],
    //services
    services:[
          {   title: 'Frontend Development', 
              text: 'I work with HTML/CSS, Javascript, ReactJS, TailwindCSS for Frontend Development.', 
              icons: [<FaHtml5 />, <FaCss3 />, <SiJavascript />, <FaReact />, <SiTailwindcss  /> ],
          },
          {   title: 'Digital art / Graphic Designing', 
              text: 'I use Adobe Photoshop, Illustrator and Blender for 3D rendering. ', 
              icons: [<SiAdobephotoshop />, <SiAdobeillustrator />, <SiBlender />],
          },
          {   title: 'Web Design', 
              text: "I use Figma to create intuitive and visually appealing digital experiences.", 
              icons: [<FaFigma />],
          },
          {   title: 'Backend Developement', 
              text: "As a programmer, I develop efficient software solutions for various platforms and applications.", 
              text: "I have experience using PHP/Laravel, MySQL, NodeJS/ExpressJS for Backend Development.", 
              icons: [<SiPhp  />, <SiMysql  />, <SiLaravel />, <FaNodeJs  />, <SiExpress />]
          },
    ],
    //portfolio
      images: [
        {   
            img: require('./images/depedmanila.jpg'), 
            title: 'Deped Manila', 
            icons: ['HTML/CSS', 'Javascript', 'PHP/MySQL'], 
            info: "Official website of Department of Education - Manila 2023-2024",
            fscreenImg: require('./images/fsDepedmanila.jpg'),
            link: "https://depedmanila.vercel.app/"
        },
        {   
            img: require('./images/toymafia.jpg'), 
            title: 'Toymafia Inventory System', 
            icons: ['HTML/CSS', 'Javascript', 'PHP/MySQL'], 
            info: "Toymafia is a simple inventory management system for Funko Pop collectors.", 
            fscreenImg: require('./images/fsToymafia.jpg'),
            link: "#"
        },
        {   
            img: require('./images/clinic.png'), 
            title: 'UDM Clinic Management', 
            icons: ['HTML/CSS', 'Javascript', 'PHP/MySQL'], 
            info: "UDM Clinic System is built to track the patient's medical records.", 
            fscreenImg: require('./images/fsClinic.png'),
            link: "https://udmanagement.000webhostapp.com/"
        },
        {   
            img: require('./images/bms.png'), 
            title: 'Barangay Management', 
            icons: ["NextJS", "MongoDB"], 
            info: "Barangay Management System is built for the barangay 107 residence and councils.", 
            fscreenImg:require('./images/fsBms.png' ),
            link: "https://bms-sage.vercel.app/"
        }
      ],

      //Expertise
       icon:[
        { icons: <SiPhp/>, title: 'PHP',percent:'87%'},
        { icons: <DiJavascript/>, title:'JavaScript',percent:'89%'},
        { icons: <DiReact/>, title: 'ReactJS',percent:'67%'},
        { icons: <DiCode/>, title: 'Coding',percent:'80%'},

        { icons: <SiBlender />, title:'3D Rendering ' ,percent:'60%'},
        { icons: <DiPhotoshop/>, title:'Photoshop',percent:'78%'},
     ],
     //Contact

      category :[
      { 
        target:'_blank', link:'https://mail.google.com/mail/u/0/#inbox?compose=new', 
        contact: 'jonraguini@gmail.com' , 
        icons: <SiGmail />, 
        class: 'gmail'
      },
      { 
        target:'',link: '#contact', 
        contact: '+63-9672-4321-23', 
        icons: <BsTelephoneFill/>, 
        class: 'phone' 
      }
      ],

      socialMeida : [ 
                <a href='https://www.linkedin.com/in/jon-nathaniel-raguini-5ba29033b/' target='_blank'><FaLinkedin /></a>, 
                <a href='https://github.com/y0unique' target='_blank'><FaGithub /></a>
        ],  

      
}
