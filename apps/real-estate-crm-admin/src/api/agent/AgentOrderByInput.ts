import { SortOrder } from "../../util/SortOrder";

export type AgentOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  propertyId?: SortOrder;
  specialization?: SortOrder;
  updatedAt?: SortOrder;
};
