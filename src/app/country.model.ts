export interface Country {
  id: string;
  name: string;
  capital: string;
  population: number;
  languages: [any];
  flag: string;
  alpha2Code: string | undefined;
}
