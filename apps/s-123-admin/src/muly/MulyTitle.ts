import { Muly as TMuly } from "../api/muly/Muly";

export const MULY_TITLE_FIELD = "dsfs";

export const MulyTitle = (record: TMuly): string => {
  return record.dsfs || String(record.id);
};
