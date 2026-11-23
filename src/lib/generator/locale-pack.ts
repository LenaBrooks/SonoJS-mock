export type GeneratorCountryCode = "DE" | "US" | "GB" | "FR" | "NL" | "JP" | "CA";

export type LocalePlace = { city: string; region: string };

export type LocalePack = {
  code: GeneratorCountryCode;
  countryName: string;
  currency: string;
  currencySymbol: string;
  regionLabel: "province" | "state" | "region";
  firstNames: string[];
  lastNames: string[];
  places: LocalePlace[];
  streets: string[];
  phonePrefix: string;
  postalPattern: "de" | "us" | "gb" | "fr" | "nl" | "jp" | "ca";
  companies: string[];
  industries: string[];
};

const names = ["Alex", "Jordan", "Taylor", "Morgan", "Casey", "Riley"];
const surnames = ["Miller", "Wilson", "Taylor", "Martin", "Clark", "Walker"];
const places = [
  { city: "London", region: "England" },
  { city: "Berlin", region: "Berlin" },
  { city: "Paris", region: "Ile-de-France" },
  { city: "Toronto", region: "Ontario" },
  { city: "Amsterdam", region: "North Holland" },
  { city: "Tokyo", region: "Tokyo" },
  { city: "New York", region: "New York" },
];
const streets = ["Main Street", "High Street", "Oak Avenue", "King Road"];
const companies = ["Northstar Labs", "Brightline Systems", "Evergreen Studio"];
const industries = ["Technology", "Finance", "Healthcare", "Education"];

function pack(code: GeneratorCountryCode, countryName: string, currency: string, currencySymbol: string, phonePrefix: string, postalPattern: LocalePack["postalPattern"], regionLabel: LocalePack["regionLabel"]): LocalePack {
  return { code, countryName, currency, currencySymbol, phonePrefix, postalPattern, regionLabel, firstNames: names, lastNames: surnames, places, streets, companies, industries };
}

export const LOCALE_PACKS: Record<GeneratorCountryCode, LocalePack> = {
  GB: pack("GB", "United Kingdom", "GBP", "£", "+44", "gb", "region"),
  DE: pack("DE", "Germany", "EUR", "€", "+49", "de", "region"),
  US: pack("US", "United States", "USD", "$", "+1", "us", "state"),
  FR: pack("FR", "France", "EUR", "€", "+33", "fr", "region"),
  NL: pack("NL", "Netherlands", "EUR", "€", "+31", "nl", "province"),
  JP: pack("JP", "Japan", "JPY", "¥", "+81", "jp", "region"),
  CA: pack("CA", "Canada", "CAD", "$", "+1", "ca", "province"),
};

export const LOCALE_COUNTRY_CODES = Object.keys(LOCALE_PACKS) as GeneratorCountryCode[];
export const EN_LOCALE_COUNTRY_CODES = LOCALE_COUNTRY_CODES;

export function isGeneratorCountryCode(value: string): value is GeneratorCountryCode | "all" {
  return value === "all" || value in LOCALE_PACKS;
}

export function resolveLocalePack(country: GeneratorCountryCode | "all", index: number): LocalePack {
  return country === "all" ? LOCALE_PACKS[LOCALE_COUNTRY_CODES[index % LOCALE_COUNTRY_CODES.length]!] : LOCALE_PACKS[country];
}

export function getLocalePack(code: GeneratorCountryCode): LocalePack {
  return LOCALE_PACKS[code];
}
