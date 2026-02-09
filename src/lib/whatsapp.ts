// Always use phone-based WhatsApp URL for form submissions
export const WHATSAPP_PHONE = "918807403946"; // country code required

export const createWhatsAppUrl = (message: string) => {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
};

// Optional quick messages (for buttons, not forms)
export const WHATSAPP_MESSAGES = {
  admission: "Hi! I am interested in admission at Bookworm Kids School. Please share the details.",
  franchise: "Hi! I am interested in the Bookworm Kids School franchise opportunity.",
  general: "Hi! I would like to know more about Bookworm Kids School.",
  callback: "Hi! Please arrange a callback regarding admission enquiry.",
} as const;








