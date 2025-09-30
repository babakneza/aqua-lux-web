import { LocaleText } from '@/lib/i18n';

export type ProductCategory = 'domestic' | 'industrial' | 'agricultural';
export type MechanismType = 'single-jet' | 'multi-jet' | 'woltman' | 'ultrasonic' | 'electromagnetic';

export interface Product {
  id: string;
  slug: string;
  title: LocaleText;
  category: ProductCategory;
  mechanism: MechanismType;
  descriptionShort: LocaleText;
  descriptionLong: LocaleText;
  sizesDN: number[];
  standards: string[];
  measurementClass?: string;
  images: string[];
  datasheetUrl?: string;
  installManualUrl?: string;
  conformityUrl?: string;
  specs: Record<string, LocaleText | string | number>;
}

export const products: Product[] = [
  {
    id: 'mjr-dom-15',
    slug: 'multi-jet-residential-dn15',
    title: { 
      fa: 'کنتور آب خانگی مولتی‌جت DN15', 
      en: 'Multi-Jet Residential Water Meter DN15' 
    },
    category: 'domestic',
    mechanism: 'multi-jet',
    descriptionShort: {
      fa: 'دقت بالا برای مصارف خانگی، بدنه برنجی، کلاس اندازه‌گیری R160.',
      en: 'High accuracy residential meter, brass body, R160 class.'
    },
    descriptionLong: {
      fa: 'مقاوم در برابر رسوب، مکانیزم خشک، قابلیت نصب افقی/عمودی، سازگار با پالس خروجی.',
      en: 'Scale-resistant, dry dial, horizontal/vertical mount, pulse output ready.'
    },
    sizesDN: [15, 20, 25],
    standards: ['ISO 4064', 'OIML R49'],
    measurementClass: 'R160',
    images: ['/img/products/mjr-dn15-1.png', '/img/products/mjr-dn15-2.png'],
    datasheetUrl: '/docs/mjr-dn15-datasheet.pdf',
    specs: {
      maxFlow: '2.5 m³/h',
      pressure: '16 bar',
      temp: '0.1–50°C',
      body: { fa: 'برنج فورج', en: 'Forged brass' }
    }
  },
  {
    id: 'wolt-ind-200',
    slug: 'woltman-industrial-dn200',
    title: { 
      fa: 'کنتور ولتمن صنعتی DN200', 
      en: 'Woltman Industrial Water Meter DN200' 
    },
    category: 'industrial',
    mechanism: 'woltman',
    descriptionShort: {
      fa: 'مناسب دبی‌های بالا، فلنجی، کلاس R200.',
      en: 'For high flow, flanged, R200 class.'
    },
    descriptionLong: {
      fa: 'روتور محوری، یاتاقان‌های مقاوم، قابل سرویس در محل، گزینه خروجی دیجیتال.',
      en: 'Axial rotor, rugged bearings, field-serviceable, digital output option.'
    },
    sizesDN: [80, 100, 150, 200, 300],
    standards: ['ISO 4064', 'OIML R49', 'MID'],
    measurementClass: 'R200',
    images: ['/img/products/wolt-dn200-1.png', '/img/products/wolt-dn200-2.png'],
    datasheetUrl: '/docs/wolt-dn200-datasheet.pdf',
    specs: {
      maxFlow: '1000 m³/h',
      pressure: '16/25 bar',
      temp: '0.1–50°C',
      body: { fa: 'چدن داکتیل پوشش اپوکسی', en: 'Ductile iron, epoxy coated' }
    }
  },
  {
    id: 'sj-dom-20',
    slug: 'single-jet-domestic-dn20',
    title: { 
      fa: 'کنتور آب خانگی تک جت DN20', 
      en: 'Single-Jet Domestic Water Meter DN20' 
    },
    category: 'domestic',
    mechanism: 'single-jet',
    descriptionShort: {
      fa: 'اقتصادی و قابل اعتماد، مناسب مصارف خانگی استاندارد.',
      en: 'Economical and reliable, suitable for standard residential use.'
    },
    descriptionLong: {
      fa: 'ساختار ساده، نگهداری آسان، مقاوم در برابر آب سخت، عمر طولانی.',
      en: 'Simple construction, easy maintenance, hard water resistant, long lifespan.'
    },
    sizesDN: [15, 20, 25, 32],
    standards: ['ISO 4064', 'OIML R49'],
    measurementClass: 'R100',
    images: ['/img/products/sj-dn20-1.png'],
    specs: {
      maxFlow: '3.125 m³/h',
      pressure: '16 bar',
      temp: '0.1–50°C',
      body: { fa: 'برنج یا پلاستیک مهندسی', en: 'Brass or engineered plastic' }
    }
  },
  {
    id: 'ultra-ind-100',
    slug: 'ultrasonic-industrial-dn100',
    title: { 
      fa: 'کنتور اولتراسونیک صنعتی DN100', 
      en: 'Ultrasonic Industrial Water Meter DN100' 
    },
    category: 'industrial',
    mechanism: 'ultrasonic',
    descriptionShort: {
      fa: 'بدون قطعات متحرک، دقت بالا، مناسب آب‌های کثیف.',
      en: 'No moving parts, high accuracy, suitable for dirty water.'
    },
    descriptionLong: {
      fa: 'اندازه‌گیری دوطرفه، بدون افت فشار، خروجی دیجیتال پیشرفته، قابلیت ارتباط با سیستم‌های SCADA.',
      en: 'Bi-directional measurement, no pressure drop, advanced digital output, SCADA integration ready.'
    },
    sizesDN: [50, 80, 100, 150, 200],
    standards: ['ISO 4064', 'MID', 'OIML R49'],
    measurementClass: 'R250',
    images: ['/img/products/ultra-dn100-1.png'],
    specs: {
      maxFlow: '400 m³/h',
      pressure: '16/25 bar',
      temp: '0.1–95°C',
      body: { fa: 'فولاد ضد زنگ یا کربن استیل', en: 'Stainless steel or carbon steel' }
    }
  },
  {
    id: 'agri-80',
    slug: 'agricultural-meter-dn80',
    title: { 
      fa: 'کنتور آب کشاورزی DN80', 
      en: 'Agricultural Water Meter DN80' 
    },
    category: 'agricultural',
    mechanism: 'woltman',
    descriptionShort: {
      fa: 'مقاوم در برابر ذرات معلق، مناسب آبیاری.',
      en: 'Suspended particles resistant, suitable for irrigation.'
    },
    descriptionLong: {
      fa: 'طراحی ویژه برای شرایط سخت کشاورزی، فیلتر داخلی، نگهداری ساده در مزرعه.',
      en: 'Designed for harsh agricultural conditions, internal filter, simple field maintenance.'
    },
    sizesDN: [50, 65, 80, 100],
    standards: ['ISO 4064', 'OIML R49'],
    measurementClass: 'R160',
    images: ['/img/products/agri-dn80-1.png'],
    specs: {
      maxFlow: '120 m³/h',
      pressure: '10/16 bar',
      temp: '0.1–50°C',
      body: { fa: 'چدن یا برنج تقویت شده', en: 'Cast iron or reinforced brass' }
    }
  },
  {
    id: 'electro-ind-150',
    slug: 'electromagnetic-industrial-dn150',
    title: { 
      fa: 'کنتور الکترومغناطیسی DN150', 
      en: 'Electromagnetic Water Meter DN150' 
    },
    category: 'industrial',
    mechanism: 'electromagnetic',
    descriptionShort: {
      fa: 'دقت بسیار بالا، مناسب فرآیندهای حساس صنعتی.',
      en: 'Very high accuracy, suitable for sensitive industrial processes.'
    },
    descriptionLong: {
      fa: 'اندازه‌گیری الکترومغناطیسی، بدون افت فشار، خروجی 4-20mA، مقاوم در برابر مواد شیمیایی.',
      en: 'Electromagnetic measurement, zero pressure drop, 4-20mA output, chemical resistant.'
    },
    sizesDN: [80, 100, 150, 200, 250],
    standards: ['ISO 4064', 'MID', 'EN 1434'],
    measurementClass: 'R400',
    images: ['/img/products/electro-dn150-1.png'],
    specs: {
      maxFlow: '800 m³/h',
      pressure: '16/40 bar',
      temp: '0.1–95°C',
      body: { fa: 'فولاد ضد زنگ با لاینر PTFE', en: 'Stainless steel with PTFE liner' }
    }
  }
];

export const categoryNames: Record<ProductCategory, LocaleText> = {
  domestic: { fa: 'خانگی', en: 'Residential' },
  industrial: { fa: 'صنعتی', en: 'Industrial' },
  agricultural: { fa: 'کشاورزی', en: 'Agricultural' }
};

export const mechanismNames: Record<MechanismType, LocaleText> = {
  'single-jet': { fa: 'تک جت', en: 'Single-Jet' },
  'multi-jet': { fa: 'مولتی جت', en: 'Multi-Jet' },
  'woltman': { fa: 'ولتمن', en: 'Woltman' },
  'ultrasonic': { fa: 'اولتراسونیک', en: 'Ultrasonic' },
  'electromagnetic': { fa: 'الکترومغناطیسی', en: 'Electromagnetic' }
};
