import dayjs from "dayjs";

export function formatDate(date: string) {
  return dayjs(date).format("D MMMM YYYY");
}
