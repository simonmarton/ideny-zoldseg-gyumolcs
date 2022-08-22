type ByProduceList = Record<string, { availableMonths: number[]; category: 'fruit' | 'vegetable' | 'herb' }>;
type ProduceCategory = 'fruit' | 'vegetable' | 'herb';
type Produce = {
  name: string;
  category: ProduceCategory;
  availableMonths: number[];
};
export const produceDebug: Produce[] = [
  {
    name: 'alma',
    category: 'fruit',
    availableMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    name: 'bab',
    category: 'vegetable',
    availableMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
];

export const produce: Produce[] = [
  {
    name: 'alma',
    category: 'fruit',
    availableMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    name: 'bab',
    category: 'vegetable',
    availableMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    name: 'birsalma',
    category: 'fruit',
    availableMonths: [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  },
  {
    name: 'brokkoli',
    category: 'vegetable',
    availableMonths: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    name: 'burgonya',
    category: 'vegetable',
    availableMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    name: 'cékla',
    category: 'vegetable',
    availableMonths: [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
  },
  {
    name: 'cseresznye',
    category: 'fruit',
    availableMonths: [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  },
  {
    name: 'cukkini',
    category: 'vegetable',
    availableMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
  },
  {
    name: 'dió',
    category: 'fruit',
    availableMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    name: 'egres',
    category: 'fruit',
    availableMonths: [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  },
  {
    name: 'eper',
    category: 'fruit',
    availableMonths: [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  },
  {
    name: 'fehérrépa',
    category: 'vegetable',
    availableMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    name: 'fejes káposzta',
    category: 'vegetable',
    availableMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    name: 'fejes saláta',
    category: 'vegetable',
    availableMonths: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
  },
  {
    name: 'fekete retek',
    category: 'vegetable',
    availableMonths: [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
  },
  {
    name: 'fodros kel',
    category: 'vegetable',
    availableMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  },
  {
    name: 'görögdinnye',
    category: 'fruit',
    availableMonths: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
  },
  {
    name: 'hagyma',
    category: 'vegetable',
    availableMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    name: 'hónapos retek',
    category: 'vegetable',
    availableMonths: [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  },
  {
    name: 'jégcsapretek',
    category: 'vegetable',
    availableMonths: [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  },
  {
    name: 'kapor',
    category: 'herb',
    availableMonths: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
  },
  {
    name: 'karalábé',
    category: 'vegetable',
    availableMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    name: 'karfiol',
    category: 'vegetable',
    availableMonths: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    name: 'kelbimbó',
    category: 'vegetable',
    availableMonths: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  },
  {
    name: 'kelkáposzta',
    category: 'vegetable',
    availableMonths: [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    name: 'kínai kel',
    category: 'vegetable',
    availableMonths: [1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  },
  {
    name: 'körte',
    category: 'fruit',
    availableMonths: [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
  },
  {
    name: 'kukorica',
    category: 'vegetable',
    availableMonths: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  },
  {
    name: 'madársaláta',
    category: 'vegetable',
    availableMonths: [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
  },
  {
    name: 'málna',
    category: 'fruit',
    availableMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
  },
  {
    name: 'mandula',
    category: 'fruit',
    availableMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    name: 'mángold',
    category: 'vegetable',
    availableMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
  },
  {
    name: 'medvehagyma',
    category: 'vegetable',
    availableMonths: [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    name: 'meggy',
    category: 'fruit',
    availableMonths: [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  },
  {
    name: 'naspolya',
    category: 'fruit',
    availableMonths: [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  },
  {
    name: 'őszibarack',
    category: 'fruit',
    availableMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  },
  {
    name: 'padlizsán',
    category: 'vegetable',
    availableMonths: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
  },
  {
    name: 'paprika',
    category: 'vegetable',
    availableMonths: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
  },
  {
    name: 'paradicsom',
    category: 'vegetable',
    availableMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
  },
  {
    name: 'pasztinák',
    category: 'vegetable',
    availableMonths: [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
  },
  {
    name: 'petrezselyem',
    category: 'herb',
    availableMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    name: 'póréhagyma',
    category: 'vegetable',
    availableMonths: [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    name: 'ribizli',
    category: 'fruit',
    availableMonths: [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  },
  {
    name: 'ringló',
    category: 'fruit',
    availableMonths: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  },
  {
    name: 'rukkola',
    category: 'vegetable',
    availableMonths: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  },
  {
    name: 'sárgabarack',
    category: 'fruit',
    availableMonths: [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  },
  {
    name: 'sárgadinnye',
    category: 'fruit',
    availableMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
  },
  {
    name: 'sárgarépa',
    category: 'vegetable',
    availableMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    name: 'sóska',
    category: 'vegetable',
    availableMonths: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  },
  {
    name: 'spárga',
    category: 'vegetable',
    availableMonths: [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  },
  {
    name: 'spenót',
    category: 'vegetable',
    availableMonths: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  },
  {
    name: 'sütőtök',
    category: 'vegetable',
    availableMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  },
  {
    name: 'szamóca',
    category: 'fruit',
    availableMonths: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
  },
  {
    name: 'szeder',
    category: 'fruit',
    availableMonths: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
  },
  {
    name: 'szilva',
    category: 'fruit',
    availableMonths: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  },
  {
    name: 'szőlő',
    category: 'fruit',
    availableMonths: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
  },
  {
    name: 'tök',
    category: 'vegetable',
    availableMonths: [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    name: 'uborka',
    category: 'vegetable',
    availableMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  },
  {
    name: 'újhagyma',
    category: 'vegetable',
    availableMonths: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  },
  {
    name: 'zeller',
    category: 'vegetable',
    availableMonths: [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
  },
  {
    name: 'zöldbab',
    category: 'vegetable',
    availableMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  },
  {
    name: 'zöldborsó',
    category: 'vegetable',
    availableMonths: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
  },
];

export const byProduce: ByProduceList = {
  alma: {
    category: 'fruit',
    availableMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  bab: {
    category: 'vegetable',
    availableMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  birsalma: {
    category: 'fruit',
    availableMonths: [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  },
  brokkoli: {
    category: 'vegetable',
    availableMonths: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  burgonya: {
    category: 'vegetable',
    availableMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  cékla: {
    category: 'vegetable',
    availableMonths: [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
  },
  cseresznye: {
    category: 'fruit',
    availableMonths: [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  },
  cukkini: {
    category: 'vegetable',
    availableMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
  },
  dió: {
    category: 'fruit',
    availableMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  egres: {
    category: 'fruit',
    availableMonths: [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  },
  eper: {
    category: 'fruit',
    availableMonths: [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  },
  fehérrépa: {
    category: 'vegetable',
    availableMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  'fejes káposzta': {
    category: 'vegetable',
    availableMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  'fejes saláta': {
    category: 'vegetable',
    availableMonths: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
  },
  'fekete retek': {
    category: 'vegetable',
    availableMonths: [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
  },
  'fodros kel': {
    category: 'vegetable',
    availableMonths: [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  },
  görögdinnye: {
    category: 'fruit',
    availableMonths: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
  },
  hagyma: {
    category: 'vegetable',
    availableMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  'hónapos retek': {
    category: 'vegetable',
    availableMonths: [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  },
  jégcsapretek: {
    category: 'vegetable',
    availableMonths: [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  },
  kapor: {
    category: 'herb',
    availableMonths: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
  },
  karalábé: {
    category: 'vegetable',
    availableMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  karfiol: {
    category: 'vegetable',
    availableMonths: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  kelbimbó: {
    category: 'vegetable',
    availableMonths: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  },
  kelkáposzta: {
    category: 'vegetable',
    availableMonths: [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  'kínai kel': {
    category: 'vegetable',
    availableMonths: [1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  },
  körte: {
    category: 'fruit',
    availableMonths: [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
  },
  kukorica: {
    category: 'vegetable',
    availableMonths: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  },
  madársaláta: {
    category: 'vegetable',
    availableMonths: [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
  },
  málna: {
    category: 'fruit',
    availableMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
  },
  mandula: {
    category: 'fruit',
    availableMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  mángold: {
    category: 'vegetable',
    availableMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
  },
  medvehagyma: {
    category: 'vegetable',
    availableMonths: [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  meggy: {
    category: 'fruit',
    availableMonths: [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  },
  naspolya: {
    category: 'fruit',
    availableMonths: [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  },
  őszibarack: {
    category: 'fruit',
    availableMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  },
  padlizsán: {
    category: 'vegetable',
    availableMonths: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
  },
  paprika: {
    category: 'vegetable',
    availableMonths: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
  },
  paradicsom: {
    category: 'vegetable',
    availableMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
  },
  pasztinák: {
    category: 'vegetable',
    availableMonths: [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
  },
  petrezselyem: {
    category: 'herb',
    availableMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  póréhagyma: {
    category: 'vegetable',
    availableMonths: [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  },
  ribizli: {
    category: 'fruit',
    availableMonths: [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  },
  ringló: {
    category: 'fruit',
    availableMonths: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  },
  rukkola: {
    category: 'vegetable',
    availableMonths: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  },
  sárgabarack: {
    category: 'fruit',
    availableMonths: [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  },
  sárgadinnye: {
    category: 'fruit',
    availableMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
  },
  sárgarépa: {
    category: 'vegetable',
    availableMonths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  sóska: {
    category: 'vegetable',
    availableMonths: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  },
  spárga: {
    category: 'vegetable',
    availableMonths: [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  },
  spenót: {
    category: 'vegetable',
    availableMonths: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  },
  sütőtök: {
    category: 'vegetable',
    availableMonths: [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  },
  szamóca: {
    category: 'fruit',
    availableMonths: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
  },
  szeder: {
    category: 'fruit',
    availableMonths: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
  },
  szilva: {
    category: 'fruit',
    availableMonths: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  },
  szőlő: {
    category: 'fruit',
    availableMonths: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
  },
  tök: {
    category: 'vegetable',
    availableMonths: [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  },
  uborka: {
    category: 'vegetable',
    availableMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  },
  újhagyma: {
    category: 'vegetable',
    availableMonths: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  },
  zeller: {
    category: 'vegetable',
    availableMonths: [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
  },
  zöldbab: {
    category: 'vegetable',
    availableMonths: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  },
  zöldborsó: {
    category: 'vegetable',
    availableMonths: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
  },
};
