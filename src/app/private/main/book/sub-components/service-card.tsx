type ServiceCardProps = {
  service: string;
  id: number;
};

const ServiceCard = ({ service, id }: ServiceCardProps) => {
  return (
    <div className="flex space-x-2 rounded h-10 w-80 items-center justify-center bg-neutral-300">
     <span>{service}</span> 
     <span>{id}</span> 
    </div>
  );
};

export default ServiceCard;
