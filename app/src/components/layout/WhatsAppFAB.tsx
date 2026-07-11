import { FiMessageCircle } from 'react-icons/fi';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function WhatsAppFAB() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lift whatsapp-pulse hover:scale-110 transition-transform duration-200"
      aria-label="Chat on WhatsApp"
    >
      <FiMessageCircle size={26} className="text-white" />
    </a>
  );
}
