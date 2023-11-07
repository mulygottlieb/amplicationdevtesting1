import { Paz as TPaz } from "../api/paz/Paz";

export const PAZ_TITLE_FIELD = "name";

export const PazTitle = (record: TPaz): string => {
  return record.name?.toString() || String(record.id);
};
