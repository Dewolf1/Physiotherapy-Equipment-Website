export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: string;
  image: string;
  images: string[];
  rating: number;
  reviewCount: number;
  category: string;
  features: string[];
  specifications: Record<string, string>;
  inStock: boolean;
  buyType: 'amazon' | 'quote';
  amazonLink: string | null;
}

export const products: Product[] = [
  {
    "id": "1",
    "name": "PHYSIOMED PRO PLUS",
    "description": "LCD-based Interferential therapy unit featuring 200 programs. It offers 100% isolated output, medium...",
    "longDescription": "LCD-based Interferential therapy unit featuring 200 programs. It offers 100% isolated output, medium frequencies (2, 4, 6, 8, 10 kHz), and an output current of 0 to 50 µA. The unit includes a 0-99 minute timer with an alarm, various scan patterns (rectangular, trapezoidal, triangular), and multiple therapy modes including 4-Pole and 2-Pole IFT, along with comprehensive TENS and Muscle Stimulation modes.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=450&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=450&fit=crop",
      "https://images.unsplash.com/photo-1590233465812-42eeef4a7c5b?w=600&h=450&fit=crop",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 74,
    "category": "Electrotherapy Equipment",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Electrotherapy Equipment",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "amazon",
    "amazonLink": "https://www.amazon.in/dp/B07Y5S6B8G"
  },
  {
    "id": "2",
    "name": "PHYSIOMED PRO (Compact Model)",
    "description": "A compact LCD-based IFT unit providing 120 programs. It includes the same medium frequency range (2 ...",
    "longDescription": "A compact LCD-based IFT unit providing 120 programs. It includes the same medium frequency range (2 to 10 kHz), a 0-50 µA output current, and identical scan patterns and therapy modes as the Pro Plus model.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 98,
    "category": "Electrotherapy Equipment",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Electrotherapy Equipment",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "amazon",
    "amazonLink": "https://www.amazon.in/dp/B07Y5S6B8G"
  },
  {
    "id": "3",
    "name": "ELECTROSONIC PRO",
    "description": "An LCD-based Ultrasound Therapy Unit with 1 & 3 MHz frequencies and 50 built-in protocols. It featur...",
    "longDescription": "An LCD-based Ultrasound Therapy Unit with 1 & 3 MHz frequencies and 50 built-in protocols. It features continuous and pulsed output modes (1:2 to 1:10), a maximum intensity of 3.5 W/cm², and a 0-99 minute timer.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 66,
    "category": "Electrotherapy Equipment",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Electrotherapy Equipment",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "amazon",
    "amazonLink": "https://www.amazon.in/dp/B07Y5S6B8G"
  },
  {
    "id": "4",
    "name": "PHYSIO SONIC-M",
    "description": "Digital Ultrasound Therapy Unit providing 1 & 3 MHz frequencies in continuous, Pulse A, Pulse B, and...",
    "longDescription": "Digital Ultrasound Therapy Unit providing 1 & 3 MHz frequencies in continuous, Pulse A, Pulse B, and Wave modes. It offers extensive pulse ratios, a maximum intensity of 3.5 W/cm², and a digital display for output power, timer, and mode.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 33,
    "category": "Electrotherapy Equipment",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Electrotherapy Equipment",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "amazon",
    "amazonLink": "https://www.amazon.in/dp/B08XWDNTVM"
  },
  {
    "id": "5",
    "name": "PHYSIO TENS - P12",
    "description": "A 2-Channel LCD-based High Power portable TENS unit. Features include 12 protocols, a 2-150 Hz frequ...",
    "longDescription": "A 2-Channel LCD-based High Power portable TENS unit. Features include 12 protocols, a 2-150 Hz frequency range, a 99-minute timer, and multiple treatment modes including Constant, Burst, Sweep, Mix, and Surge.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 61,
    "category": "Electrotherapy Equipment",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Electrotherapy Equipment",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "amazon",
    "amazonLink": "https://www.amazon.in/dp/B08XWDKW6S"
  },
  {
    "id": "6",
    "name": "DIGI TENS PRO (ELECTROTENE PRO-4C)",
    "description": "A 4-Channel LCD-based High Power TENS unit with 50 protocols and independent intensity controls for ...",
    "longDescription": "A 4-Channel LCD-based High Power TENS unit with 50 protocols and independent intensity controls for each channel. It provides frequencies up to 300 Hz and monophasic wave shapes with modes including Continuous, Burst, Combination, and Ultrareiz.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 44,
    "category": "Electrotherapy Equipment",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Electrotherapy Equipment",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  },
  {
    "id": "7",
    "name": "ELECTRO TENS",
    "description": "A 4-Channel FND-based High Power TENS unit offering 6 protocols and a frequency range of 2-150 Hz. T...",
    "longDescription": "A 4-Channel FND-based High Power TENS unit offering 6 protocols and a frequency range of 2-150 Hz. Treatment programs include Continuous, Burst, variable PWM, Sweep, and Combination modes.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 58,
    "category": "Electrotherapy Equipment",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Electrotherapy Equipment",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "amazon",
    "amazonLink": "https://www.amazon.in/dp/B09V7N7Y6S"
  },
  {
    "id": "8",
    "name": "DIGI-LASER PRO-60P",
    "description": "LCD-based Laser Therapy Unit supporting continuous and pulse modes with 60 evidence-based programs a...",
    "longDescription": "LCD-based Laser Therapy Unit supporting continuous and pulse modes with 60 evidence-based programs and 50 rewritable memory slots. It utilizes a Class 3B Semiconductor GaAs laser (650 nm wavelength) with a 300 mw maximum power probe, equipped with pointed and cluster probes.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 44,
    "category": "Electrotherapy Equipment",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Electrotherapy Equipment",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  },
  {
    "id": "9",
    "name": "ELECTRO THERM-500 WATT",
    "description": "A 500-watt Shortwave Diathermy unit with a cooling fan and vacuum generating valve. It operates at a...",
    "longDescription": "A 500-watt Shortwave Diathermy unit with a cooling fan and vacuum generating valve. It operates at a 27.12 MHz frequency with an 11-meter wavelength. Also available in a Table Top model.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 86,
    "category": "Electrotherapy Equipment",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Electrotherapy Equipment",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  },
  {
    "id": "10",
    "name": "ELECTRO DIGI-TRAC",
    "description": "FND-based Traction Unit designed for lumbar and cervical issues. It features Static, Intermittent, a...",
    "longDescription": "FND-based Traction Unit designed for lumbar and cervical issues. It features Static, Intermittent, and Harmonic modes, providing traction force from 5 to 45Kg (up to 90Kg with doublers) and includes an audio-visual alarm and patient switch.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 90,
    "category": "Electrotherapy Equipment",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Electrotherapy Equipment",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  },
  {
    "id": "11",
    "name": "ELECTRO STIM PRO",
    "description": "A 2-Channel LCD-based High Power Muscle Stimulation unit with 50 protocols. It offers variable frequ...",
    "longDescription": "A 2-Channel LCD-based High Power Muscle Stimulation unit with 50 protocols. It offers variable frequencies and modes including DC Voltage, Galvanic, and Faradic options.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 29,
    "category": "Electrotherapy Equipment",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Electrotherapy Equipment",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  },
  {
    "id": "12",
    "name": "KNEEFLEX PRO (CPM)",
    "description": "A Continuous Passive Motion device for knee therapy immediately after surgery. It weighs 10kg, offer...",
    "longDescription": "A Continuous Passive Motion device for knee therapy immediately after surgery. It weighs 10kg, offers 0 to 120-degree angle control, and features adjustable hold and rest times.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 40,
    "category": "Electrotherapy Equipment",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Electrotherapy Equipment",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "amazon",
    "amazonLink": "https://www.amazon.in/dp/B07N1B9F6X"
  },
  {
    "id": "13",
    "name": "SHOULDER & ELBOW CPM",
    "description": "LCD-based CPM therapy machine for upper limb joint surgery and trauma recovery. It provides 0 to 180...",
    "longDescription": "LCD-based CPM therapy machine for upper limb joint surgery and trauma recovery. It provides 0 to 180 degrees of flexion and 5 steps (170 degrees) of extension, with a 0 to 99-minute treatment timer.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 77,
    "category": "Electrotherapy Equipment",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Electrotherapy Equipment",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "amazon",
    "amazonLink": "https://www.amazon.in/dp/B08XWD9V6M"
  },
  {
    "id": "14",
    "name": "POINTCURE - P20",
    "description": "An LCD-based Longwave Diathermy Unit utilizing the capacitor field method. It operates at a 1 MHz fr...",
    "longDescription": "An LCD-based Longwave Diathermy Unit utilizing the capacitor field method. It operates at a 1 MHz frequency with 20 programs and offers continuous and pulsated modes.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 14,
    "category": "Electrotherapy Equipment",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Electrotherapy Equipment",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  },
  {
    "id": "15",
    "name": "Hi-Lo Table",
    "description": "Electric or hydraulic elevation table with a 240kg lifting capacity and adjustable height range from...",
    "longDescription": "Electric or hydraulic elevation table with a 240kg lifting capacity and adjustable height range from 50cm to 101cm. Features include an adjustable backrest (up to +80°), adjustable head/foot sections, breathing hole, and retractable wheels.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 77,
    "category": "Physiotherapy & Rehabilitation Furniture",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Physiotherapy & Rehabilitation Furniture",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  },
  {
    "id": "16",
    "name": "Traction Table with Variable Height",
    "description": "A 4-section, electrically operated Hi-Low table adjusting from 55cm to 100cm. It includes a friction...",
    "longDescription": "A 4-section, electrically operated Hi-Low table adjusting from 55cm to 100cm. It includes a friction-free rolling lumbar section, nose cut-out, and comes with a flexion stool and belting accessories.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 97,
    "category": "Physiotherapy & Rehabilitation Furniture",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Physiotherapy & Rehabilitation Furniture",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  },
  {
    "id": "17",
    "name": "Bobath Table",
    "description": "Features an extra-wide patient surface with a 150 kg lifting capacity. Includes a 360° accessible ha...",
    "longDescription": "Features an extra-wide patient surface with a 150 kg lifting capacity. Includes a 360° accessible hand switch for electric height adjustment (50 to 100 cm) and an 85° adjustable 2-section head support.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 19,
    "category": "Physiotherapy & Rehabilitation Furniture",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Physiotherapy & Rehabilitation Furniture",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  },
  {
    "id": "18",
    "name": "Traction Tables (2 Fold, 3 Fold, Standard)",
    "description": "4-section tables featuring adjustable lower and head sections. The lumbar section separates to elimi...",
    "longDescription": "4-section tables featuring adjustable lower and head sections. The lumbar section separates to eliminate friction during traction. All include foam padding, a flexion stool, and traction belts.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 81,
    "category": "Physiotherapy & Rehabilitation Furniture",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Physiotherapy & Rehabilitation Furniture",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  },
  {
    "id": "19",
    "name": "Quadriceps Tables (Deluxe & Back Rest)",
    "description": "Designed for quadriceps and hamstrings exercises without changing the patient's position. Includes a...",
    "longDescription": "Designed for quadriceps and hamstrings exercises without changing the patient's position. Includes a foam padded table, a torque unit with adjustable lever arms, and six 1 kg weight plates for variable resistance.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 86,
    "category": "Physiotherapy & Rehabilitation Furniture",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Physiotherapy & Rehabilitation Furniture",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  },
  {
    "id": "20",
    "name": "Treatment Couches",
    "description": "Available in standard sizes (72\"L x 24\"W x 31\"H or 72\"L x 27\"W x 28\"H) with vinyl upholstered tops a...",
    "longDescription": "Available in standard sizes (72\"L x 24\"W x 31\"H or 72\"L x 27\"W x 28\"H) with vinyl upholstered tops and adjustable 18\" backrests. Includes a writing board and drawers mounted on hardwood solid legs; a heavy-duty metal version is also available.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 50,
    "category": "Physiotherapy & Rehabilitation Furniture",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Physiotherapy & Rehabilitation Furniture",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  },
  {
    "id": "21",
    "name": "Tilt Table Electrical",
    "description": "Electrically operated table with a foam padded top and 0 to 90-degree tilt calibration. Measures 60 ...",
    "longDescription": "Electrically operated table with a foam padded top and 0 to 90-degree tilt calibration. Measures 60 cm wide by 195 cm long and includes holding straps, lockable wheels, and an optional utility tray.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 17,
    "category": "Physiotherapy & Rehabilitation Furniture",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Physiotherapy & Rehabilitation Furniture",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  },
  {
    "id": "22",
    "name": "Suspension Frame",
    "description": "Tubular steel construction (210cm x 110cm x 190cm) with a welded steel rod mesh top. Includes compre...",
    "longDescription": "Tubular steel construction (210cm x 110cm x 190cm) with a welded steel rod mesh top. Includes comprehensive suspension gear (slings, pulleys, springs) and an optional foam padded wooden/metal couch.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 62,
    "category": "Physiotherapy & Rehabilitation Furniture",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Physiotherapy & Rehabilitation Furniture",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  },
  {
    "id": "23",
    "name": "Equipment Trolley",
    "description": "A heavy-gauge mild steel, powder-coated trolley with castor wheels, suitable for electrotherapy equi...",
    "longDescription": "A heavy-gauge mild steel, powder-coated trolley with castor wheels, suitable for electrotherapy equipment.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 45,
    "category": "Physiotherapy & Rehabilitation Furniture",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Physiotherapy & Rehabilitation Furniture",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  },
  {
    "id": "24",
    "name": "Wall Bar",
    "description": "Single-section hardwood frame (90cm x 240cm) with 12 oval rungs for shoulder exercises. Includes an ...",
    "longDescription": "Single-section hardwood frame (90cm x 240cm) with 12 oval rungs for shoulder exercises. Includes an optional foam padded knee support for wheelchair patients.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 35,
    "category": "Physiotherapy & Rehabilitation Furniture",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Physiotherapy & Rehabilitation Furniture",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  },
  {
    "id": "25",
    "name": "Hydrotherapy Tank (Whole Body)",
    "description": "Heavy-gauge stainless steel tank (180 cm L x 120 cm W x 60 cm D) for full-body hydro massage. Fitted...",
    "longDescription": "Heavy-gauge stainless steel tank (180 cm L x 120 cm W x 60 cm D) for full-body hydro massage. Fitted with a motorized turbine ejector, digital temperature controller, and heavy-duty legs.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 92,
    "category": "Hydrotherapy & Hot/Cold Therapy",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Hydrotherapy & Hot/Cold Therapy",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  },
  {
    "id": "26",
    "name": "Whirlpool Baths",
    "description": "Stainless steel tanks designed for arm, foot, and lower leg therapy. Equipped with a motorized turbi...",
    "longDescription": "Stainless steel tanks designed for arm, foot, and lower leg therapy. Equipped with a motorized turbine ejector, aerator, digital temperature controller, and immersion heater. Available in dimensions of 120x60x60 cm or 90x50x70 cm.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 22,
    "category": "Hydrotherapy & Hot/Cold Therapy",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Hydrotherapy & Hot/Cold Therapy",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  },
  {
    "id": "27",
    "name": "Contrast Bath",
    "description": "Hot and cold therapy unit featuring two insulated stainless steel tanks (48x38x42 cm). One tank is f...",
    "longDescription": "Hot and cold therapy unit featuring two insulated stainless steel tanks (48x38x42 cm). One tank is for heating and the other for cooling, both featuring independent digital temperature controllers.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 99,
    "category": "Hydrotherapy & Hot/Cold Therapy",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Hydrotherapy & Hot/Cold Therapy",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  },
  {
    "id": "28",
    "name": "Cold Therapy Unit",
    "description": "Stainless steel chilling unit with an adjustable cycle defrost and automatic timer to keep cold pack...",
    "longDescription": "Stainless steel chilling unit with an adjustable cycle defrost and automatic timer to keep cold packs ready.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 76,
    "category": "Hydrotherapy & Hot/Cold Therapy",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Hydrotherapy & Hot/Cold Therapy",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  },
  {
    "id": "29",
    "name": "Hot Therapy (Hydrocollator)",
    "description": "Double-walled stainless steel units with thermostats for heat control. Available in a 4-Pack (1500 w...",
    "longDescription": "Double-walled stainless steel units with thermostats for heat control. Available in a 4-Pack (1500 watts) or 8-Pack (2000 watts) size.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 93,
    "category": "Hydrotherapy & Hot/Cold Therapy",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Hydrotherapy & Hot/Cold Therapy",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  },
  {
    "id": "30",
    "name": "Wax Baths",
    "description": "Available as a Water Wax Bath utilizing the \"Bain Marie\" principle for even heat distribution (25-li...",
    "longDescription": "Available as a Water Wax Bath utilizing the \"Bain Marie\" principle for even heat distribution (25-liter capacity). Standard Wax Baths feature an internal stainless steel tank, special wax immersion heaters, and thermostats.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 69,
    "category": "Hydrotherapy & Hot/Cold Therapy",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Hydrotherapy & Hot/Cold Therapy",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  },
  {
    "id": "31",
    "name": "Targeted Manual Exercisers",
    "description": "Includes the Hand Exerciser Table (6 pulleys and weight sets), Shoulder Pulley (T-shape), Supinator ...",
    "longDescription": "Includes the Hand Exerciser Table (6 pulleys and weight sets), Shoulder Pulley (T-shape), Supinator & Pronator Exerciser (wall-mounted adjustable resistance), Heal Exerciser, Shoulder Cum Wrist Exerciser, Ankle Exerciser, Arm Exerciser, and Shoulder Abduction Ladder.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 70,
    "category": "Exercise, Rehabilitation & Occupational Therapy Tools",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Exercise, Rehabilitation & Occupational Therapy Tools",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  },
  {
    "id": "32",
    "name": "Parallel Walking Bar",
    "description": "10-foot long wooden platform with stainless steel handrails and adjustable height (30\" to 40\") and w...",
    "longDescription": "10-foot long wooden platform with stainless steel handrails and adjustable height (30\" to 40\") and width (16\" to 25\"). Includes a detachable abduction board.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 42,
    "category": "Exercise, Rehabilitation & Occupational Therapy Tools",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Exercise, Rehabilitation & Occupational Therapy Tools",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  },
  {
    "id": "33",
    "name": "Exerciser Staircase",
    "description": "Available in Corner Type or Straight Type (60 cm wide). Features a mix of 15 cm and 10 cm steps lead...",
    "longDescription": "Available in Corner Type or Straight Type (60 cm wide). Features a mix of 15 cm and 10 cm steps leading to a 60x60 cm platform, complete with dual-height handrails for adults and children.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 105,
    "category": "Exercise, Rehabilitation & Occupational Therapy Tools",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Exercise, Rehabilitation & Occupational Therapy Tools",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  },
  {
    "id": "34",
    "name": "Balance Beam",
    "description": "Reversible 6 ft. beam that can be positioned for a width of 3 inches or 6 inches.",
    "longDescription": "Reversible 6 ft. beam that can be positioned for a width of 3 inches or 6 inches.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 56,
    "category": "Exercise, Rehabilitation & Occupational Therapy Tools",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Exercise, Rehabilitation & Occupational Therapy Tools",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  },
  {
    "id": "35",
    "name": "Standing Frames",
    "description": "Available for Child and Adult patients to safely support weight-bearing. Made of mild steel with har...",
    "longDescription": "Available for Child and Adult patients to safely support weight-bearing. Made of mild steel with hardwood bases/trays and three support straps for the heel, ankle, and pelvis.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 27,
    "category": "Exercise, Rehabilitation & Occupational Therapy Tools",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Exercise, Rehabilitation & Occupational Therapy Tools",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  },
  {
    "id": "36",
    "name": "Dumbbell Sets & Medicine Balls",
    "description": "Vinyl dumbbells ranging from 0.5kg to 5kg and fine leather medicine balls ranging from 1kg to 5kg.",
    "longDescription": "Vinyl dumbbells ranging from 0.5kg to 5kg and fine leather medicine balls ranging from 1kg to 5kg.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 88,
    "category": "Exercise, Rehabilitation & Occupational Therapy Tools",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Exercise, Rehabilitation & Occupational Therapy Tools",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  },
  {
    "id": "37",
    "name": "Swings & Hanging Gyms",
    "description": "Platform Swing, Barrel Swing, Tube Swing, Disk Swing, Linear Swing, Monkey Swing, Tyre Swing, Bolste...",
    "longDescription": "Platform Swing, Barrel Swing, Tube Swing, Disk Swing, Linear Swing, Monkey Swing, Tyre Swing, Bolster Swing.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 65,
    "category": "Exercise, Rehabilitation & Occupational Therapy Tools",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Exercise, Rehabilitation & Occupational Therapy Tools",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  },
  {
    "id": "38",
    "name": "Sensory & Motor Skill Boards",
    "description": "Mushroom Peg Board, 5 Shape Peg Board, Geometric Shape Peg Board, Graded Round/Square Peg Boards, Ma...",
    "longDescription": "Mushroom Peg Board, 5 Shape Peg Board, Geometric Shape Peg Board, Graded Round/Square Peg Boards, Magnetic Peg Board, Zig Zag Peg Board, Hand Gym Kit Board, Hand Tool Test Board, Manipulation Board, Velcro Board, Texture Board, and Dressing Frame Set.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 105,
    "category": "Exercise, Rehabilitation & Occupational Therapy Tools",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Exercise, Rehabilitation & Occupational Therapy Tools",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  },
  {
    "id": "39",
    "name": "Pediatric & Gross Motor Equipment",
    "description": "Bolster, Steam Roller, Barrel, Wedge Board, Cubical Ladder, Scooter Board, and various Ball Pools (R...",
    "longDescription": "Bolster, Steam Roller, Barrel, Wedge Board, Cubical Ladder, Scooter Board, and various Ball Pools (Round, With Slide, With Step & Slide).",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 80,
    "category": "Exercise, Rehabilitation & Occupational Therapy Tools",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Exercise, Rehabilitation & Occupational Therapy Tools",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  },
  {
    "id": "40",
    "name": "Therapy Balls & Bands",
    "description": "Gym Ball, Spiky Ring, Spiky Ball, Peanut Spiky Ball, Thera Band, and Thera Tube.",
    "longDescription": "Gym Ball, Spiky Ring, Spiky Ball, Peanut Spiky Ball, Thera Band, and Thera Tube.",
    "price": "Request Quote",
    "image": "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=450&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=450&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 109,
    "category": "Exercise, Rehabilitation & Occupational Therapy Tools",
    "features": [
      "High Quality",
      "Durable",
      "Professional Grade",
      "Reliable Performance"
    ],
    "specifications": {
      "Brand": "Hospimedico",
      "Application": "Exercise, Rehabilitation & Occupational Therapy Tools",
      "Condition": "New",
      "Warranty": "1 Year"
    },
    "inStock": true,
    "buyType": "quote",
    "amazonLink": null
  }
];
