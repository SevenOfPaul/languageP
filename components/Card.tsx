import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export const Card = ({ title, description, imageUrl, link }: CardProps) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-lg"
    >
      <Link href={link}>
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            priority  // 添加这行
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  // 添加这行
          />
        </div>

        <div className="p-6">
          <motion.h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {title}
          </motion.h3>

          <motion.p className="text-gray-600 dark:text-gray-400 text-sm">
            {description}
          </motion.p>

          <motion.div
            className="mt-4 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 inline-flex items-center"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            了解更多 →
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};
