import React from "react";
import {
  MediumProjectCard,
  ProjectCards,
} from "../components/Projects/ProjectCards";
import { Box, Center, Heading, Show } from "@chakra-ui/react";
import LaneAttire_1 from "../images/LaneAttire_1.png";
import LaneAttire_3 from "../images/LaneAttire_3.png";
import LaneAttire_5 from "../images/LaneAttire_5.png";
import LaneAttire_4 from "../images/LaneAttire_4.png";
import LaneAttire_2 from "../images/LaneAttire_2.png";
import beautyBliss_1 from "../images/beautyBliss_1.png";
import beautyBliss_2 from "../images/beautyBliss_2.png";
import beautyBliss_3 from "../images/beautyBliss_3.png";
import beautyBliss_4 from "../images/beautyBliss_4.png";
import beautyBliss_5 from "../images/beautyBliss_5.png"
import Bigmart_1 from "../images/Bigmart_1.png";
import Bigmart_2 from "../images/Bigmart_2.png";
import Bigmart_3 from "../images/Bigmart_3.png";
import Bigmart_4 from "../images/Bigmart_4.png";
import Bigmart_5 from "../images/Bigmart_5.png";
import Bigmart_6 from "../images/Bigmart_6.png";
import questyme_1 from "../images/questyme_1.png"
import questyme_2 from "../images/questyme_2.png"
import questyme_3 from "../images/questyme_3.png"
import questyme_4 from "../images/questyme_4.png"
const Projects = () => {
  const LaneAttire = [LaneAttire_1, LaneAttire_2, LaneAttire_3, LaneAttire_4, LaneAttire_5];
  const Questyme =[questyme_2,questyme_4,questyme_3,questyme_1]
  const BeautyBliss = [
    beautyBliss_1,
    beautyBliss_2,
    beautyBliss_3,
    beautyBliss_4,
    beautyBliss_5
  ];
  const Bigmart = [
    Bigmart_1,
    Bigmart_2,
    Bigmart_3,
    Bigmart_4,
    Bigmart_5,
    Bigmart_6,
  ];
  return (
    <Box
      pl={{
        base: "5",
        sm: "5",
        md: "5",
        lg: "10",
        xl: "10",
        "2xl": "10",
      }}
      pr={{
        base: "5",
        sm: "5",
        md: "5",
        lg: "10",
        xl: "10",
        "2xl": "10",
      }}
      id="projects"
      fontFamily="'Poppins', sans-serif"

    >
      <Center>
        <Heading mb={"40px"} 
          fontFamily="'Poppins', sans-serif"
        
        textDecor={"underline"}>Projects</Heading>
      </Center>
      <ProjectCards
        direction={"row-reverse"}
        deployedLink={"https://clever-horse-e88e52.netlify.app/"}
        image={Questyme}
        title={"QuesTyme"}
        subTitle={"Interview Scheduler site"}
        presentationLink={"https://github.com/Sonu-Shettiyar/QuesTyme_Clone"}
        features={[
          "Interview Scheduling",
          "Enhanced Card UI",
          "Category and Date-based filtering",
          "Forget Password feature for recovering account access",
          "Single Click Join meet feature",
          "Excellent responsiveness throughout the site"
        ]}
        description={
          "QuesTyme is a top-notch interview scheduler application with features for interview scheduling and one-on-one sessions. It is a special project assigned to a team of six selected members by Masai School."
        }
        techStack={["React.js", "Chakra UI", "Typescript"]}
      />
      <ProjectCards
        direction={"row"}
        deployedLink={"https://idyllic-hummingbird-265d79.netlify.app/"}
        image={LaneAttire}
        title={"LaneAttire"}
        subTitle={"LimerRoad Clone"}
        GithubLink={"https://github.com/Sonu-Shettiyar/reach-value-9973"}
        features={[
          "API-based Sign in and Sign-up for users",
          "Different sections for Men and Women",
          "Category and price-based filtering",
          "Dynamic Single Product route with proper product description",
          "Suggest's relevant products in product details",
          "Need Authentication for complete purchases",
        ]}
        description={
          "Lane-Attire is an online fashion store that provides high-quality fashion accessories for both men and women at affordable prices. This is an individual project, completed within a period of five days. It bears similarity to the fashion store Limeroad, clone of the aforementioned brand"
        }
        techStack={["React.js", "Chakra UI", "MockApi","ContextApi"]}
      />
       <ProjectCards
        direction={"row-reverse"}
        deployedLink={"https://gleeful-lily-870fcb.netlify.app/"}
        image={BeautyBliss}
        title={"BeautyBliss"}
        subTitle={"SugarCosmetics Clone"}
        GithubLink={"https://github.com/Sonu-Shettiyar/bright-stamp-7114"}
        features={[
          "Filter by category and Sort by price",
          "Product page with specific product",
          "Pagination and search functionality",
          "User should be logged in to complete purchases",
          "Order page to see recently ordered items",
          "Admin panel to perform CRUD operations.",
          "API-based Sign-in and Sign-up for users",
        ]}
        description={
          

          "BeautyBliss is an e-commerce platform offering a range of premium beauty products, including lipsticks, eyeliners, and other innovative grooming items for women. The website was developed as a collaborative project by a team of four members and was completed within a five-day timeframe. it is a clone of SugarCosmetics."
        }
        techStack={["HTML", "CSS", "JavaScript", "MockAPI","BootStrap"]}

      />
      <ProjectCards
        direction={"row"}
        deployedLink={"https://spectacular-crisp-020f48.netlify.app/"}
        image={Bigmart}
        title={"BigMart"}
        subTitle={"Bigbasket Clone"}
        GithubLink={"https://github.com/Sonu-Shettiyar/-violent-oranges-5571"}
        features={[
          "Product page with Search ,Sort and Filter functionality to find the products",
          "Easy removing item ,increasing and decreasing product quantity with live price update's in cart page",
          "Coupons for availing discount's",
          "User-friendly Checkout Page"
        ]}
        description={
          "The BigMart is a clone of BigBasket. This individual project built in 5 days aims to replicate the features of the popular Indian online supermarket. It seeks to offer a seamless online grocery shopping experience with a vast selection of items and convenient delivery options, catering to the growing demand for online grocery shopping services in India."
        }
        techStack={["HTML", "CSS", "JavaScript"]}

      />
     
     
      <Show breakpoint="(max-width: 993px)">
        <MediumProjectCard
          image={LaneAttire}
          deployedLink={"https://clever-horse-e88e52.netlify.app/"}
        // presentationLink={"https://github.com/Sonu-Shettiyar/reach-value-9973"}

          GithubLink={"https://github.com/Sonu-Shettiyar/QuesTyme_Clone"}
          title={"Questyme"}
          subTitle={"Interview Scheduler"}
          description={
            "QuesTyme is a top-notch interview scheduler application with features for interview scheduling and one-on-one sessions. It is a special project assigned to a team of six selected members by Masai School."
          }
          techStack={["React.js", "Chakra UI","Typescript"]}
        />
        <MediumProjectCard
          image={LaneAttire}
          deployedLink={"https://idyllic-hummingbird-265d79.netlify.app/"}
          GithubLink={"https://github.com/Sonu-Shettiyar/reach-value-9973"}
          title={"LaneAttire"}
          subTitle={"LimerRoad Clone"}
          description={
            "Lane-Attire is an online fashion store that provides high-quality fashion accessories for both men and women at affordable prices. This is an individual project, completed within a period of five days. It bears similarity to the fashion store Limeroad, clone of the aforementioned brand"
          }
          techStack={["React.js", "Chakra UI","MockApi"]}
        />
       
       
        <MediumProjectCard
          image={BeautyBliss}
          deployedLink={"https://gleeful-lily-870fcb.netlify.app/"}
          GithubLink={"https://github.com/Sonu-Shettiyar/bright-stamp-7114"}
          title={"BeautyBliss"}
          subTitle={"SugarCosmetics Clone"}
          description={
            "BeautyBliss is an e-commerce platform offering a range of premium beauty products, including lipsticks, eyeliners, and other innovative grooming items for women. The website was developed as a collaborative project by a team of four members and was completed within a five-day timeframe. it is a clone of SugarCosmetics."
          }
          techStack={["HTML", "CSS", "JavaScript", "MockAPI","BootStrap"]}

        />
      <MediumProjectCard
          image={Bigmart}
          deployedLink={"https://spectacular-crisp-020f48.netlify.app/"}
          GithubLink={"https://github.com/Sonu-Shettiyar/-violent-oranges-5571"}
          title={"BigMart"}
          subTitle={"Bigbasket Clone"}
          description={
            "The BigMart is a clone of BigBasket. This individual project built in 5 days aims to replicate the features of the popular Indian online supermarket. It seeks to offer a seamless online grocery shopping experience with a vast selection of items and convenient delivery options, catering to the growing demand for online grocery shopping services in India."
          }
          techStack={["HTML", "CSS", "JavaScript"]}

        />
      </Show>
    </Box>
  );
};

export default Projects;
