import { Mail, MapPin, Phone } from "lucide-react";

const navLinks = [
    { link: "/", name: "Home" },
    { link: "/about", name: "About Us" },
    { link: "/cars", name: "Cars" },
    { link: "/blog", name: "Blogs" },
    { link: "/help", name: "Help" },
    { link: "/contact", name: "Contact Us" },
];
const footerLink = [
    { link: "/about", name: "About Us" },
    { link: "/cars", name: "Cars" },
    { link: "/blog", name: "Blogs" },
    { link: "/help", name: "Help" },
    { link: "/contact", name: "Contact Us" },
]
const contacts = [
    {
        icon: Phone,
        info: " +971-56-1234567",
    },
    {
        icon: Mail,
        info: "info@mkautos.com",
    },

    {
        icon: MapPin,
        info: "Dubai, United Arab Emirates",
    },
];
const socialMedia = [
    {
        image: "/assets/social-media/facebook.png",
        name: "facebook",
        link: "https://www.facebook.com",
    },
    {
        image: "/assets/social-media/instagram.png",
        name: "instagram",
        link: "https://www.instagram.com",
    },
    {
        image: "/assets/social-media/twitter.png",
        name: "whatshap",
        link: "https://www.x.com",
    },
];
export { navLinks, footerLink, contacts, socialMedia }