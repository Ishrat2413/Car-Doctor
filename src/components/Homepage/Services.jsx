import React from 'react';
import ServiceCard from '../cards/ServiceCard';
import { getServices } from '../../services/getServices';



const Services = async () => {
    const { services } = await getServices()
    return (
        <div>
            <div>
                <h3 className='text-primary text-2xl font-bold text-center container mx-auto'>Our Services</h3>
            </div>
            <div className='max-w-[1280px] mx-auto m-12 grid grid-cols-1 md:grid-cols-3 gap-2 items-center'>
                {
                    services?.length > 0 && services?.map((service) => (
                        <ServiceCard service={service} key={service._id}></ServiceCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;