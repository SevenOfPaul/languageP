import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ExpandableMessageProps {
  title: string;
  content: string |(React.ReactElement)
  author?: string;
}

export default ({ title, content, author }: ExpandableMessageProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="max-w-full my-4">
      <motion.div
        className="rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 p-4 hover:cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex items-center justify-between">
          <p className="font-medium text-blue-600 dark:text-blue-400">{title}</p>
          <p className="text-xs text-purple-500 opacity-75">{isExpanded ? '收起' : '展开查看'}</p>
        </div>
        <AnimatePresence>
          {isExpanded ? (
            <motion.div
              initial={{ opacity: 0.5, height: 40 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0.5, height: 40 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mt-3 border-t border-blue-200/20 pt-3 text-gray-700 dark:text-gray-300">
                {content}
              </div>
              {author && (
                <p className="text-right text-xs text-purple-500/75 mt-2">
                  {`—— ${author}`}
                </p>
              )}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0.5, height: 40 }}
              animate={{ opacity: 1, height: 40 }}
              exit={{ opacity: 0.5, height: 40 }}
              className="text-xs text-gray-500 mt-2 border-t border-blue-200/20 pt-2"
            >
              点击展开答案...
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}