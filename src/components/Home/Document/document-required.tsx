// "use client";
// import React from 'react';
// import { DocumentData, InternationalDocumentData } from './document-data';
// import Image from 'next/image';
// import { Card } from '@/components/ui/card';

// const DocumentRequirements = () => {
//     return (
//         <section className="py-10 space-y-12 w-11/12 mx-auto">

//             {/* Title and description section */}
//             <div className='flex flex-col gap-4 items-center justify-center'>
//                 <h2 className="text-center uppercase  font-semibold text-gray-700">
//                     Pre-Requisites
//                 </h2>
//                 <h1 className='title capitalize text-gray-800'>
//                     <span className='text-primaryColor'>Documents Required </span> to Rent a Car
//                 </h1>
//                 <p className='text-center text-md text-gray-500 md:w-[70%] leading-relaxed'>
//                     Whether you&apos;re a resident or an international tourist, MKAutos ensures that renting a luxury car is a smooth and straightforward process. Here are the documents required based on your nationality.
//                 </p>
//             </div>


//             {/* National Residents Section */}
//             <div className="mt-12">
//                 <h3 className=" text-xl md:text-2xl font-semibold text-gray-600 mb-8 text-center">
//                     Documents for International Tourists
//                 </h3>
//                 <div className=" flex flex-wrap gap-10 items-center justify-center mt-6 ">
//                     {
//                         InternationalDocumentData.map((data, i) => (

//                             <Card key={i} className="flex  flex-col items-center gap-2 p-4  w-[200px] sm:w-[260px] h-[180px] bg-white transition-transform transform hover:scale-105">
//                                 <Image
//                                     src={data.image}
//                                     alt={data.title}
//                                     height={100}
//                                     width={100}
//                                     className="size-16 object-cover"
//                                 />
//                                 <p className="sm:text-lg font-medium text-center text-gray-500">{data.title}</p>
//                             </Card>



//                         ))
//                     }
//                 </div>
//             </div>
//             {/* National Residents Section */}
//             <div className="mt-12">
//                 <h3 className=" text-xl md:text-2xl font-semibold text-gray-600 mb-8 text-center">
//                     Documents for UAE Residents
//                 </h3>
//                 <div className="flex flex-wrap gap-10 items-center justify-center mt-6">
//                     {
//                         DocumentData.map((data, i) => (
//                             <Card key={i} className="flex  flex-col items-center gap-2 p-4 w-[200px] sm:w-[260px] hh-[170px] bg-white transition-transform transform hover:scale-105">
//                                 <Image
//                                     src={data.image}
//                                     alt={data.title}
//                                     height={100}
//                                     width={100}
//                                     className="size-16 object-cover"
//                                 />
//                                 <p className="sm:text-lg font-medium text-center text-gray-500">{data.title}</p>
//                             </Card>
//                         ))
//                     }
//                 </div>
//             </div>

//         </section>
//     );
// };

// export default DocumentRequirements;

"use client";
import React from 'react';
import { DocumentData, InternationalDocumentData } from './document-data';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

interface DocumentSectionProps {
    title: string;
    documents: { title: string; image: string }[];
}

const DocumentSection: React.FC<DocumentSectionProps> = ({ title, documents }) => (
    <div className="mt-12">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-600 mb-8 text-center">{title}</h3>
        <div className="flex flex-wrap gap-10 items-center justify-center mt-6">
            {documents.map((doc, i) => (
                <Card
                    key={i}
                    className="flex flex-col items-center gap-2 p-4 w-[200px] sm:w-[260px] h-[170px] bg-white transition-transform transform hover:scale-105"
                >
                    <Image
                        src={doc.image}
                        alt={doc.title}
                        height={100}
                        width={100}
                        className="object-cover h-[70px] w-auto"
                    />
                    <p className="sm:text-lg font-medium text-center text-gray-500">{doc.title}</p>
                </Card>
            ))}
        </div>
    </div>
);

const DocumentRequirements: React.FC = () => {
    return (
        <section className="py-12 space-y-12 w-11/12 mx-auto">

            {/* Title and description section */}
            <div className="flex flex-col gap-4 items-center justify-center">
                <h2 className="text-center  uppercase font-semibold text-gray-700">Pre-Requisites</h2>
                <h1 className="title capitalize text-gray-800">
                    <span className="text-primaryColor">Documents Required</span> to Rent a Car
                </h1>
                <p className="text-center text-md text-gray-500 md:w-[70%] leading-relaxed">
                    Whether you&apos;re a resident or an international tourist, MKAutos ensures that renting a luxury car is a smooth and straightforward process. Here are the documents required based on your nationality.
                </p>
            </div>

            {/* Document sections */}
            <DocumentSection title="Documents for International Tourists" documents={InternationalDocumentData} />
            <DocumentSection title="Documents for UAE Residents" documents={DocumentData} />

        </section>
    );
};

export default DocumentRequirements;
