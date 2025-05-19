// "use client";

// import { useEffect, useRef, useState } from "react";
// import { ArrowLeft, Mail, MapPin, Phone, User, Twitter } from "lucide-react";
// import { Button } from "@/components/ui/button";

// import Link from "next/link";
// import { toast } from "sonner";
// import Loader from "@/components/ui/Loader";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const formRef = useRef<HTMLFormElement>(null);
//   const [loading, setLoading] = useState(true);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     setTimeout(() => {
//       toast("Message sent!", {
//         // description: "Thank you for your message. We'll get back to you soon.",
//       });

//       setFormData({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//       });

//       setIsSubmitting(false);
//     }, 1500);
//   };

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     const timer = setTimeout(() => setLoading(false), 700);
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) return <Loader text="loading contact data..." />;

//   return (
//     <section className="py-8 md:py-0 px-5 lg:px-0">
//       <div className="container max-w-6xl mx-auto">
//         <Button asChild variant="ghost" className="mb-6 scale-transition -ml-3">
//           <Link href="/" className="flex items-center gap-2">
//             <ArrowLeft className="h-4 w-4" />
//             Back to Home
//           </Link>
//         </Button>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <div>
//             <div className="space-y-6 " style={{ animationDelay: "300ms" }}>
//               <div className="flex items-start space-x-4">
//                 <div className="bg-secondary dark:bg-accent p-3 rounded-full">
//                   <Mail className="h-5 w-5" />
//                 </div>
//                 <div>
//                   <h3 className="font-medium">Email</h3>
//                   <p className="text-muted-foreground">
//                     <a
//                       href="mailto:atharvamhaske76@gmail.com"
//                       className="hover-underline"
//                     >
//                       atharvamhaske76@gmail.com
//                     </a>
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="bg-secondary dark:bg-accent p-3 rounded-full">
//                   <Phone className="h-5 w-5" />
//                 </div>
//                 <div>
//                   <h3 className="font-medium">Phone</h3>
//                   <div className="flex items-center gap-2 mt-2">
//                     <a href="tel:+91XXXXXXXXX" className="hover-underline">
//                       +91 9657137520
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* Twitter DM Row - styled like other contact items */}
//               <div className="flex items-start space-x-4">
//                 <div className="bg-secondary dark:bg-accent p-3 rounded-full">
//                   <Twitter className="h-5 w-5 text-black dark:text-white" />
//                 </div>
//                 <div>
//                   <h3 className="font-medium">Twitter</h3>
//                   <a
//                     href="https://twitter.com/AtharvaXDevs"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-muted-foreground hover:underline font-medium"
//                   >
//                     DM me on Twitter
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="bg-secondary dark:bg-accent p-3 rounded-full">
//                   <MapPin className="h-5 w-5" />
//                 </div>
//                 <div>
//                   <h3 className="font-medium">Location</h3>
//                   <p className="text-muted-foreground">
//                     <a href="https://www.google.com/maps/place/Pune,+Maharashtra,+India" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Pune, Maharashtra</a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div
//             className="bg-card rounded-lg shadow-sm p-6 md:p-8 ring-transition flex items-center justify-center"
//             style={{ animationDelay: "500ms" }}
//           >
//             <iframe
//               title="Map"
//               className="w-full h-64 md:h-96 rounded-lg border border-border"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30268.06425951499!2d73.807632!3d18.5204303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c08c5b0e0e0b%3A0x4d0b7b7b7b7b7b7b!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
//               loading="lazy"
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
