import { Dfdfdsf as TDfdfdsf } from "../api/dfdfdsf/Dfdfdsf";

export const DFDFDSF_TITLE_FIELD = "id";

export const DfdfdsfTitle = (record: TDfdfdsf): string => {
  return record.id?.toString() || String(record.id);
};
