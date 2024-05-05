import { motion } from "framer-motion";
type ServiceCardProps = {
  service: string;
  id: number;
  price: string;
  included: string;
  description: string;
};

const variants = {
  animate: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const ServiceCard = ({ service, id, price, description, included }: ServiceCardProps) => {
  return (
    <motion.div 
    variants={variants}
    className="flex space-x-2 rounded h-6 w-[50rem] items-center justify-center bg-neutral-300">
     <motion.span>{service}</motion.span> 
     <motion.span>{id}</motion.span> 
     <motion.span>{price}</motion.span> 
    </motion.div>
  );
};

export default ServiceCard;
