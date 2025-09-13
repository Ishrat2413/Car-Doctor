import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiArrowFromLeft } from 'react-icons/bi';

const ServiceCard = ({ service }) => {
    const { title, img, price, _id } = service || {}
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className='h-48 overflow-hidden'>
                <Image height={150} width={430} src={img} alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-between items-center">
                    <h2 className='text-center text-primary font-semibold text-xl'>Price: {price}</h2>
                    <Link href={`/services/${_id}`}><button className="btn btn-primary"><BiArrowFromLeft className='text-2xl' /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;