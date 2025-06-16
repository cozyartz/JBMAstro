// src/components/GalleryMasonry.jsx
import { motion } from "framer-motion";

export default function GalleryMasonry({ cloudflareBase, images }) {
  return (
    <section className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
      {images.map(({ id, caption }, index) => (
        <motion.div
          key={id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 * index }}
          className="break-inside-avoid overflow-hidden rounded-xl bg-white shadow transition hover:shadow-lg"
        >
          <img
            src={`${cloudflareBase}/${id}/public`}
            alt={caption}
            width="600"
            height="400"
            className="w-full h-auto object-cover rounded-t-xl hover:scale-[1.02] transition-transform duration-300 ease-in-out"
            loading="lazy"
            decoding="async"
          />
          <p className="p-4 text-sm text-gray-700 leading-snug">{caption}</p>
        </motion.div>
      ))}
    </section>
  );
}
