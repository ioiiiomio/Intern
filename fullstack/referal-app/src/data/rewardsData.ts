import { formatDistance, subDays } from "date-fns";
import { ru } from "date-fns/locale";

export const Status = {
  CALCULATED: "Рассчитано",
  PAID: "Выплачено",
  WAITING: "Ожидается",
  DECLINED: "Отклонено",
} as const;
export type Status = (typeof Status)[keyof typeof Status];

export type RewardPerformance = {
  sum: string;
  status: Status;
  calcDate: Date;
  payDate: Date | null;
  remainingTime: string;
};

// mock
export async function getRewardData(): Promise<RewardPerformance[]> {
  return [
    (() => {
      return {
        sum: "20000 тг",
        status: Status.PAID,
        calcDate: new Date(2025, 8, 20),
        payDate: new Date(2025, 8, 11),
        remainingTime: `${Status.PAID} ${formatDistance(
          subDays(new Date(), 15),
          new Date(),
          {
            addSuffix: true,
            locale: ru,
          }
        )} `,
      };
    })(),
    (() => {
      return {
        sum: "35000 тг",
        status: Status.WAITING,
        calcDate: new Date(2025, 8, 20),
        payDate: new Date(2025, 8, 11),
        remainingTime: `${Status.PAID} ${formatDistance(
          subDays(new Date(), 15),
          new Date(),
          {
            addSuffix: true,
            locale: ru,
          }
        )} `,
      };
    })(),
    (() => {
      return {
        sum: "65000 тг",
        status: Status.WAITING,
        calcDate: new Date(2025, 8, 20),
        payDate: new Date(2025, 8, 11),
        remainingTime: `${Status.PAID} ${formatDistance(
          subDays(new Date(), 15),
          new Date(),
          {
            addSuffix: true,
            locale: ru,
          }
        )} `,
      };
    })(),
  ];
}
