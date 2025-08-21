export type ClientsData = {
  IIN: number;
  clientType: ClientTypes;
  name: string;
  status: ClientStatus;
  lastActivity?: string;
  registrationDate: Date;
};

export const ClientTypes = {
  type1: "Юридическое лицо",
  type2: "Частное лицо",
} as const;
export type ClientTypes = (typeof ClientTypes)[keyof typeof ClientTypes];

export const ClientStatus = {
  CALCULATED: "Рассчитано",
  PAID: "Выплачено",
  WAITING: "Ожидает",
  DECLINED: "Отклонено",
} as const;
export type ClientStatus = (typeof ClientStatus)[keyof typeof ClientStatus];

// mok data
export async function getClientsData(): Promise<ClientsData[]> {
  return [
    {
      IIN: 87364578345,
      clientType: ClientTypes.type1,
      name: "ТОО Астана Инвест",
      status: ClientStatus.CALCULATED,
      lastActivity: "Создал новую заявку",
      registrationDate: new Date(2023, 3, 14),
    },
    {
      IIN: 90345678901,
      clientType: ClientTypes.type2,
      name: "Иван Петров",
      status: ClientStatus.PAID,
      lastActivity: "Получил выплату",
      registrationDate: new Date(2022, 11, 5),
    },
    {
      IIN: 76543210987,
      clientType: ClientTypes.type1,
      name: "АО Global Tech",
      status: ClientStatus.WAITING,
      lastActivity: "Ожидает подтверждения документов",
      registrationDate: new Date(2024, 6, 20),
    },
    {
      IIN: 81234567890,
      clientType: ClientTypes.type2,
      name: "Мария Соколова",
      status: ClientStatus.DECLINED,
      lastActivity: "Заявка отклонена",
      registrationDate: new Date(2025, 0, 9),
    },
    {
      IIN: 99887766554,
      clientType: ClientTypes.type1,
      name: "LLP Digital Future",
      status: ClientStatus.CALCULATED,
      lastActivity: "Рассчитан кредитный рейтинг",
      registrationDate: new Date(2023, 8, 30),
    },
    {
      IIN: 11223344556,
      clientType: ClientTypes.type2,
      name: "Алексей Иванов",
      status: ClientStatus.WAITING,
      lastActivity: "Загрузил документы",
      registrationDate: new Date(2024, 2, 15),
    },
  ];
}
