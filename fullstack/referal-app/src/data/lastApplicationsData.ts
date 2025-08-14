import { RewardPerformance } from "./rewardsData";

export const Status = {
  CALCULATED: "Рассчитано",
  PAID: "Выплачено",
  WAITING: "Ожидает",
  DECLINED: "Отклонено",
} as const;
export type Status = (typeof Status)[keyof typeof Status];

export const ProductType = {
  type1: "Беззалоговый заем",
  type2: "Депозит",
} as const;
export type ProductType = (typeof ProductType)[keyof typeof ProductType];

export type LastApplicationsData = {
  requestID: string;
  clientID: string;
  prodType: ProductType;
  status: Status;
  date: Date;
};

// mok data
export async function getLastApplicationsData(): Promise<
  LastApplicationsData[]
> {
  return [
    (() => {
      return {
        requestID: "128793827423",
        clientID: "38648263428",
        prodType: ProductType.type1,
        status: Status.WAITING,
        date: new Date(2025, 3, 12),
      };
    })(),

    (() => {
      return {
        requestID: "128793827423",
        clientID: "38648263428",
        prodType: ProductType.type1,
        status: Status.WAITING,
        date: new Date(2025, 3, 12),
      };
    })(),
  ];
}
