import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentUpdateInput = {
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  property?: PropertyWhereUniqueInput | null;
  specialization?: string | null;
};
