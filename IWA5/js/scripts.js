const RSA = 'South Africa';
const NAM = 'Namibia';
const BANNED_COUNTRY = 'North Korea';
const FREE_SHIPPING_THRESHOLD_RSA_NAM = 1000;
const FREE_SHIPPING_THRESHOLD_OTHERS = 60;
const SHIPPING_COSTS = {
  [RSA]: 400,
  [NAM]: 600,
  default: 800,
};

let customers = 1;
let location = RSA;
let currency = 'R';

let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * 0;
let batteries = 35 * 2;
let pens = 5 * 0;

let shipping = SHIPPING_COSTS[location] || SHIPPING_COSTS.default;

if (location === BANNED_COUNTRY) {
  console.log('WARNING:', BANNED_WARNIN);
} else {
  let totalCost = shoes + toys + shirts + batteries + pens;
  let freeShippingThreshold = (location === RSA || location === NAM) ?
    FREE_SHIPPING_THRESHOLD_RSA_NAM : FREE_SHIPPING_THRESHOLD_OTHERS;

  if (totalCost >= freeShippingThreshold && customers === 1) {
    shipping = 0;
  } else if (shipping === SHIPPING_COSTS[NAM] && customers !== 1) {
    console.log('WARNING:', FREE_WARNING);
  }

  console.log('Price:', currency, totalCost + shipping);
}
