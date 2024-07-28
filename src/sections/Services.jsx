import { services } from "../constans"
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <div className='flex justify-center flex-wrap max-container gap-9'>
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </div>
  )
}

export default Services