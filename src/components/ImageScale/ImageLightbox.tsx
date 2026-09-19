import { useEffect, useState } from "react";
import { X } from "lucide-react";
import "./ImageLightbox.css";

interface ImageLightboxProps {
  image: string | null;
  alt?: string;
  onClose: () => void;
}

export function ImageLightbox({
  image,
  alt = "Project image",
  onClose,
}: ImageLightboxProps) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (image) {
      setIsClosing(false);
    }
  }, [image]);

  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        startClosing();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [image]);

  const startClosing = () => {
    if (isClosing) return;

    setIsClosing(true);
  };

  if (!image) return null;

  return (
    <div
      className={`image-lightbox ${
        isClosing ? "image-lightbox--closing" : ""
      }`}
      role="dialog"
      aria-modal="true"
      onClick={startClosing}
    >
      <button
        className="image-lightbox__close"
        onClick={(e) => {
          e.stopPropagation();
          startClosing();
        }}
        aria-label="Close image"
      >
        <X size={28} />
      </button>

      <img
        className="image-lightbox__image"
        src={image}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
      />

      {isClosing && (
        <span
          className="image-lightbox__close-animation"
          onAnimationEnd={onClose}
        />
      )}
    </div>
  );
}