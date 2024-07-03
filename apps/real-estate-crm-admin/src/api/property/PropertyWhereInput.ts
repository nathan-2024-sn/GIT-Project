import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AgentListRelationFilter } from "../agent/AgentListRelationFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { ClientListRelationFilter } from "../client/ClientListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PropertyWhereInput = {
  address?: StringNullableFilter;
  agents?: AgentListRelationFilter;
  appointments?: AppointmentListRelationFilter;
  clients?: ClientListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  status?: "Option1";
  typeField?: StringNullableFilter;
};
