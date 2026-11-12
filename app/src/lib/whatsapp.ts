import { companyInfo } from '@/data/siteData';

export const getWhatsAppLink = (productName?: string): string => {
  const baseUrl = `https://wa.me/${companyInfo.whatsappNumber}`;
  if (productName) {
    const message = `Hello, I'm interested in ${productName} from Dijon Prime Agro Limited.`;
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  const genericMessage = 'Hello, I would like to inquire about your products and services at Dijon Prime Agro Limited.';
  return `${baseUrl}?text=${encodeURIComponent(genericMessage)}`;
};
