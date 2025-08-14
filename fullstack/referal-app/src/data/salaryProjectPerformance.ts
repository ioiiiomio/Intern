import { formatDistance, subDays } from "date-fns";
import { ru } from "date-fns/locale";

export const Status = {
  CALCULATED: "Рассчитано",
  PAID: "Выплачено",
  WAITING: "Ожидается",
  DECLINED: "Отклонено",
} as const;
export type Status = (typeof Status)[keyof typeof Status];

export type SalaryProjectPerformance = {
  companySum: string;
  finance: number;
  reward: number;
  status: Status;
  expDate: Date;
  payDate: Date | null;
  remainingTime: string;
};

// mock data
export async function getSalaryRewardData(): Promise<
  SalaryProjectPerformance[]
> {
  return [
    (() => {
      return {
        companySum: "20000 тг",
        finance: 2400000,
        reward: 120000,
        status: Status.PAID,
        expDate: new Date(2025, 8, 20),
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
        companySum: "25600 тг",
        finance: 2200000,
        reward: 1578600,
        status: Status.CALCULATED,
        expDate: new Date(2025, 8, 20),
        payDate: new Date(2025, 8, 11),
        remainingTime: `${Status.CALCULATED} ${formatDistance(
          subDays(new Date(), 25),
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
        companySum: "25600 тг",
        finance: 2200000,
        reward: 1578600,
        status: Status.WAITING,
        expDate: new Date(2025, 8, 20),
        payDate: new Date(2025, 8, 11),
        remainingTime: Status.WAITING,
      };
    })(),
  ];
}
