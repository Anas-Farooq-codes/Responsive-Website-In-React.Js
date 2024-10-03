import React from "react";
import Image from "next/image";

interface ImageModalProps {
  isOpen: boolean;
  imageSrc: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, imageSrc, onClose }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl"
        >
          &times;
        </button>
        <Image
          src={imageSrc}
          alt="Portfolio Image"
          layout="fill"
          objectFit="contain"
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default ImageModal;