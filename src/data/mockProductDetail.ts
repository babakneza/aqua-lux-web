import { SpecRow } from '@/components/product-detail/ProductSpecsTable';

export interface ProductDetailData {
  title: string;
  shortDesc: string;
  meta: {
    dn: string;
    class: string;
    standards: string[];
  };
  catalogUrl?: string;
  gallery: Array<{ src: string; alt: string }>;
  featuredText?: string;
  keySpecs: {
    dn: string;
    class: string;
    standards: string[];
    temperatureRangeC: string;
    workingPressureBar: number;
  };
  specTable: SpecRow[];
  features: string[];
  benefits: string[];
  standards: string[];
  certificates?: string[];
  sizes: Array<{
    dn: string;
    thread: string;
    length: number;
    bodyDiameter: number;
  }>;
  chart: {
    type: 'line';
    labels: string[];
    datasets: Array<{
      label: string;
      data: number[];
    }>;
    units: {
      x: string;
      yLeft: string;
      yRight: string;
    };
  };
  descriptionHtml: string;
  attachments?: string[];
}

export const mockProductDetail: ProductDetailData = {
  title: 'AquaLux Industrial Water Meter – DN 25–100',
  shortDesc: 'High-accuracy, durable water meter compliant with EN/ISO and OIML standards.',
  meta: {
    dn: 'DN 25–100',
    class: 'B/C',
    standards: ['ISO 4064', 'OIML R49', 'MID'],
  },
  catalogUrl: '/docs/aqualux-catalog.pdf',
  gallery: [
    { src: '/img/products/mjr-dn15-1.png', alt: 'Water meter front view' },
    { src: '/img/products/wolt-dn200-1.png', alt: 'Water meter side view' },
    { src: '/img/products/ultra-dn100-1.png', alt: 'Internal mechanism' },
  ],
  featuredText: 'New / MID Certified',
  keySpecs: {
    dn: 'DN 25–100',
    class: 'B/C',
    standards: ['ISO 4064', 'OIML R49', 'MID'],
    temperatureRangeC: '0…50 °C',
    workingPressureBar: 16,
  },
  specTable: [
    {
      nominalSizeInch: '1"',
      Qs: 3.0,
      Qmin: 0.03,
      Qt: 0.12,
      Qn: 1.5,
      Qmax: 3.0,
      workingPressureBar: 16,
      temperatureRangeC: '0…30',
      resetMileageM3: 1000000,
      readingAccuracy: '±2% (Qt–Qmax) / ±5% (Qmin–Qt)',
      pressureDropAtQnBar: 0.06,
      lengthMm: 165,
      bodyDiameterMm: 90,
      lengthWithCouplingsMm: 260,
      class: 'B',
    },
    {
      nominalSizeInch: '1¼"',
      Qs: 5.0,
      Qmin: 0.05,
      Qt: 0.2,
      Qn: 2.5,
      Qmax: 5.0,
      workingPressureBar: 16,
      temperatureRangeC: '0…30',
      resetMileageM3: 1000000,
      readingAccuracy: '±2% / ±5%',
      pressureDropAtQnBar: 0.08,
      lengthMm: 190,
      bodyDiameterMm: 100,
      lengthWithCouplingsMm: 300,
      class: 'B',
    },
    {
      nominalSizeInch: '1½"',
      Qs: 7.5,
      Qmin: 0.075,
      Qt: 0.3,
      Qn: 3.5,
      Qmax: 7.5,
      workingPressureBar: 16,
      temperatureRangeC: '0…50',
      resetMileageM3: 1000000,
      readingAccuracy: '±2% / ±5%',
      pressureDropAtQnBar: 0.1,
      lengthMm: 200,
      bodyDiameterMm: 110,
      lengthWithCouplingsMm: 320,
      class: 'C',
    },
    {
      nominalSizeInch: '2"',
      Qs: 10.0,
      Qmin: 0.1,
      Qt: 0.4,
      Qn: 5.0,
      Qmax: 10.0,
      workingPressureBar: 16,
      temperatureRangeC: '0…50',
      resetMileageM3: 1000000,
      readingAccuracy: '±2% / ±5%',
      pressureDropAtQnBar: 0.12,
      lengthMm: 220,
      bodyDiameterMm: 120,
      lengthWithCouplingsMm: 350,
      class: 'C',
    },
  ],
  features: [
    'High accuracy across all flow ranges',
    'Robust brass body with anti-corrosion coating',
    'Tamper-resistant register with clear readability',
    'Low pressure loss at nominal flow',
    'Easy maintenance and spare parts availability',
  ],
  benefits: [
    'Reduced non-revenue water',
    'Lower lifetime cost',
    'Compliance with municipal standards',
    'Fast installation and commissioning',
  ],
  standards: ['ISO 4064', 'OIML R49', 'MID'],
  certificates: ['/docs/mid.pdf'],
  sizes: [
    { dn: 'DN 25', thread: 'G1', length: 165, bodyDiameter: 90 },
    { dn: 'DN 32', thread: 'G1¼', length: 190, bodyDiameter: 100 },
    { dn: 'DN 40', thread: 'G1½', length: 200, bodyDiameter: 110 },
    { dn: 'DN 50', thread: 'G2', length: 220, bodyDiameter: 120 },
  ],
  chart: {
    type: 'line',
    labels: ['Qmin', 'Qt', 'Qn', 'Qmax'],
    datasets: [
      { label: 'Pressure drop (bar)', data: [0.02, 0.04, 0.06, 0.12] },
      { label: 'Accuracy (%)', data: [5, 3, 2, 2] },
    ],
    units: { x: 'Flow', yLeft: 'bar', yRight: '%' },
  },
  descriptionHtml: `
    <p class="mb-4">The AquaLux Industrial Water Meter is engineered for reliability and precision in demanding environments. Built with a robust brass body and advanced multi-jet mechanism, this meter delivers consistent accuracy across all flow ranges.</p>
    <p class="mb-4">Designed to meet the stringent requirements of industrial and commercial applications, the AquaLux meter features a tamper-resistant register, low pressure loss characteristics, and excellent long-term stability.</p>
    <h3 class="text-lg font-bold mt-6 mb-3">Applications</h3>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li>Industrial process water measurement</li>
      <li>Commercial building utilities</li>
      <li>Municipal water distribution</li>
      <li>Sub-metering applications</li>
    </ul>
    <h3 class="text-lg font-bold mt-6 mb-3">Construction</h3>
    <p>The meter body is manufactured from high-grade brass with a protective epoxy coating. Internal components are corrosion-resistant and designed for minimal wear, ensuring accurate measurement over the meter's lifetime.</p>
  `,
  attachments: ['/docs/installation.pdf', '/docs/datasheet.pdf'],
};
