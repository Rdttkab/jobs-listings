export interface Company {
  id: string;
  name: string;
  logo: string;
}

export interface Job {
  id: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
  companyId: string;
  company: Company;
}
