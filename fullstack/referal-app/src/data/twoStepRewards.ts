import { formatDistance, subDays } from "date-fns";
import { ru } from "date-fns/locale";

// Тут констант значения
export const Status = {
  PAID: "Выплачено",
  CALCULATED: "Рассчитано",
  WAITING: "Ожидается",
  ONWAIT: "Ожидает",
} as const;
export type Status = (typeof Status)[keyof typeof Status];

export const ProductType = {
  DEPOSIT: "Депозит",
  CREDIT: "Кредит",
} as const;
export type ProductType = (typeof ProductType)[keyof typeof ProductType];

export const StageInd = {
  STAGE1: "Этап 1: 30 Дней",
  STAGE2: "Этап 2: 30 Дней",
} as const;
export type StageInd = (typeof StageInd)[keyof typeof StageInd];

// Тут функции для генерации рандомных значений
function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomLetter() {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  return letters.charAt(Math.floor(Math.random() * letters.length));
}

function generateRewardCredentials() {
  return {
    requestLog: `REQ-${getRandomNumber(1, 100000)}${getRandomLetter()}`,
    userID: `user-${getRandomNumber(1, 100)}`,
    clientID: `client-${getRandomNumber(1, 100)}`,
  };
}

// здесь типы данных
export type Stage = {
  stageInd: StageInd;
  sum: number;
  expDate: Date;
  payDate: Date | null;
  remainingTime: string;
  status: Status;
};

export type Reward = {
  userID: string;
  requestID: string;
  sum: number;
  expDate: Date;
  payDate: Date | null;
  remainingTime: string;
  status: Status;
};

export type DoubleReward = {
  userID: string;
  requestID: string;
  clientID: string;
  productType: ProductType;
  sum: number;
  activeComments: string;
  status: Status;
  stages: Stage[];
};

// это примерные данные
export const doubleRewards: DoubleReward[] = [
  (() => {
    const creds = generateRewardCredentials();
    const stage1Sum = getRandomNumber(10000, 50000);
    const stage2Sum = getRandomNumber(10000, 50000);
    return {
      userID: creds.userID,
      requestID: creds.requestLog,
      clientID: creds.clientID,
      productType: ProductType.CREDIT,
      sum: stage1Sum + stage2Sum, // total from both stages
      activeComments: "Выплата по депозиту. Клиент активен.",
      status: Status.ONWAIT,
      stages: [
        {
          stageInd: StageInd.STAGE1,
          sum: stage1Sum,
          expDate: new Date(2025, 8, 20),
          payDate: new Date(2025, 8, 11),
          remainingTime: formatDistance(subDays(new Date(), 15), new Date(), {
            addSuffix: true,
            locale: ru,
          }),
          status: Status.PAID,
        },
        {
          stageInd: StageInd.STAGE2,
          sum: stage2Sum,
          expDate: new Date(2025, 9, 20),
          payDate: null,
          remainingTime: formatDistance(new Date(), subDays(new Date(), 32), {
            addSuffix: true,
            locale: ru,
          }),
          status: Status.CALCULATED,
        },
      ],
    };
  })(),
  (() => {
    const creds = generateRewardCredentials();
    const stage1Sum = getRandomNumber(10000, 50000);
    const stage2Sum = getRandomNumber(10000, 50000);
    return {
      userID: creds.userID,
      requestID: creds.requestLog,
      clientID: creds.clientID,
      productType: ProductType.CREDIT,
      sum: stage1Sum + stage2Sum,
      activeComments: "Выплата по депозиту. Клиент активен.",
      status: Status.ONWAIT,
      stages: [
        {
          stageInd: StageInd.STAGE1,
          sum: stage1Sum,
          expDate: new Date(2025, 8, 20),
          payDate: new Date(2025, 8, 11),
          remainingTime: formatDistance(subDays(new Date(), 3), new Date(), {
            addSuffix: true,
            locale: ru,
          }),
          status: Status.PAID,
        },
        {
          stageInd: StageInd.STAGE2,
          sum: stage2Sum,
          expDate: new Date(2025, 9, 20),
          payDate: null,
          remainingTime: formatDistance(new Date(), subDays(new Date(), 28), {
            addSuffix: true,
            locale: ru,
          }),
          status: Status.PAID,
        },
      ],
    };
  })(),
  (() => {
    const creds = generateRewardCredentials();
    const stage1Sum = getRandomNumber(10000, 50000);
    const stage2Sum = getRandomNumber(10000, 50000);
    return {
      userID: creds.userID,
      requestID: creds.requestLog,
      clientID: creds.clientID,
      productType: ProductType.CREDIT,
      sum: stage1Sum + stage2Sum,
      activeComments: "Выплата по депозиту. Клиент активен.",
      status: Status.ONWAIT,
      stages: [
        {
          stageInd: StageInd.STAGE1,
          sum: stage1Sum,
          expDate: new Date(2025, 8, 20),
          payDate: new Date(2025, 8, 11),
          remainingTime: formatDistance(new Date(), subDays(new Date(), 3), {
            addSuffix: true,
            locale: ru,
          }),
          status: Status.WAITING,
        },
        {
          stageInd: StageInd.STAGE2,
          sum: stage2Sum,
          expDate: new Date(2025, 9, 20),
          payDate: null,
          remainingTime: formatDistance(new Date(), subDays(new Date(), 28), {
            addSuffix: true,
            locale: ru,
          }),
          status: Status.WAITING,
        },
      ],
    };
  })(),
];
