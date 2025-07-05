
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const WhatsAppWidget = () => {
    const { toast } = useToast();

    const handleClick = () => {
        toast({
            title: "Let's Chat!",
            description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
        });
    };

    return (
        <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <button
                onClick={handleClick}
                className="bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
                aria-label="Chat on WhatsApp"
            >
                <MessageSquare size={32} />
            </button>
        </motion.div>
    );
};

export default WhatsAppWidget;
  