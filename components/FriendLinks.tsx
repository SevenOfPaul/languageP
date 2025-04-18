import { motion } from "framer-motion";
import Link from "next/link";
import { links } from "../lib/FriendLink";

export const FriendLinks = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-400"
    >
      <p className="inline-block text-gray-500 font-semibold">友情连接</p>
      {links.map((link, index) => (
        <motion.div
          key={link.text}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="inline-block"
        >
          <Link
            href={link.path}
            className="hover:text-blue-500 transition-colors px-2"
          >
            {link.text}
          </Link>
          {index !== links.length - 1 && (
            <span className="text-gray-300 dark:text-gray-600">|</span>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};