import React, { type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface BrandedModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  children: ReactNode;
}

const BrandedModal: React.FC<BrandedModalProps> = ({ isOpen, onClose, title, subtitle, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] cursor-pointer"
          />
          
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-2xl max-h-[85vh] bg-white rounded-3xl shadow-2xl z-[101] overflow-hidden flex flex-col border border-primary/10"
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-black/5 flex items-center justify-between bg-gradient-to-r from-primary/5 to-secondary/5">
              <div>
                <h2 className="text-2xl font-black text-primary tracking-tight uppercase">{title}</h2>
                <p className="text-xs font-semibold text-secondary tracking-[0.2em] uppercase mt-1">{subtitle}</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-black/5 rounded-full transition-colors text-gray-400 hover:text-primary"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar flex-1">
              <div className="prose prose-slate max-w-none">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BrandedModal;
