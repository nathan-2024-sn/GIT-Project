import { Property } from "../property/Property";

export type Agent = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  property?: Property | null;
  specialization: string | null;
  updatedAt: Date;
};
