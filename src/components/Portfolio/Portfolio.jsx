import React from 'react'
import img1 from '../../assets/images/poert1.png'
import img2 from '../../assets/images/port2.png'
import img3 from '../../assets/images/port3.png'
import { useState } from 'react';


export default function Portfolio() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleOpenModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const images = [
        { id: 1, src: img1, alt: "Image 1" },
        { id: 2, src: img2, alt: "Image 2" },
        { id: 3, src: img3, alt: "Image 3" },
        { id: 4, src: img3, alt: "Image 4" },
        { id: 5, src: img1, alt: "Image 5" },
        { id: 6, src: img2, alt: "Image 6" },
    ];

    return (
        <>
            <div className="bg-white pt-36 pb-16">
                <div className="text-center">
                    <h1 className="mb-3 uppercase font-bold text-[40px]">portfolio component</h1>
                    <div className="flex justify-center items-center">
                        <div className="line bg-[#2C3E50] me-3"></div>
                        <i className="fa-solid fa-star me-3"></i>
                        <div className="line bg-[#2C3E50]"></div>
                    </div>
                </div>

                <div className="container mx-auto">
                    <div className="row">
                        {images.map((image) => (
                            <div
                                key={image.id}
                                onClick={() => handleOpenModal(image)}
                                data-modal-target="static-modal"
                                data-modal-toggle="static-modal"
                                className="w-full md:w-1/2 lg:w-1/3 p-9 cursor-pointer"
                            >
                                <div>
                                    <img className="rounded-lg" src={image.src} alt={image.alt} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {isModalOpen && (
                    <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div className=" max-w-2xl">
                            <div className=" bg-white rounded-lg">
                                <div className="flex ">
                                    <button 
                                        className="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg text-xl ms-auto"
                                        onClick={handleCloseModal}>X</button>
                                </div>

                                <div className="p-2 ">
                                    <img src={selectedImage?.src} alt={selectedImage?.alt} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
