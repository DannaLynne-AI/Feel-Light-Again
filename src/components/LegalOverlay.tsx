/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface LegalOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const LegalOverlay = ({ isOpen, onClose, title, children }: LegalOverlayProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-earth/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-cream w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-[40px] shadow-2xl p-8 md:p-12 border border-earth/10"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-earth/5 transition-colors text-earth/50"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-3xl font-serif text-earth mb-8 pr-12">{title}</h2>
            <div className="prose prose-earth max-w-none text-earth/70 font-sans leading-relaxed space-y-6">
              {children}
            </div>
            <div className="mt-12 pt-8 border-t border-earth/10 flex justify-end">
              <button 
                onClick={onClose}
                className="bg-earth text-cream px-8 py-3 rounded-full text-sm font-semibold hover:bg-earth/90 transition-all"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
