import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Users } from "lucide-react";

function SideBar() {
  const [barbieTheme, setBarbieTheme] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (barbieTheme) {
      body.classList.add("barbie-theme");
    } else {
      body.classList.remove("barbie-theme");
    }
  }, [barbieTheme]);

  const handleThemeToggle = () => {
    setBarbieTheme((prev) => !prev);
  };

  return (
    <div className="fixed bg-white rounded-2xl border border-border_color h-[1042px]">
      <div>
        <img
          className="justify-center max-w-40% mt-[25.27px] mb-[25.27px] mr-[27.84px] ml-[16px] max-w-[211.1630096435547px] h-[27.45166015625px]"
          src="../../assets/Nurbank-pic.svg"
          alt="Nurbank Logo"
        />
      </div>
      <div className="max-w-fill border-t border-gray-400" />
      <div className="mx-4 mt-6 size-lg text-text_color_secondary justify-center text-lg">
        <div className="flex justify gap-4 mb-4">
          <img src="../../assets/icons/client-search-ic.svg" />
          <p className="my-1">Поиск Клиента</p>
        </div>
        <div className="flex justify gap-4 mb-4">
          <Users />
          <Link to="/referral" className="my-1">
            Реферальная программа
          </Link>
          <img src="../../assets/icons/chevron-down-ic.svg" />
        </div>
        <div className="flex justify gap-4 mb-4">
          <img src="../../assets/icons/MSB-ic.svg" />
          <p className="my-1">МСБ</p>
          <img src="../../assets/icons/chevron-down-ic.svg" />
        </div>
        <div className="flex justify gap-4 mb-4">
          <img src="../../assets/icons/digital-id-ic.svg" />
          <p className="my-1">Digital ID</p>
        </div>
        <div className="flex justify gap-4 mb-4">
          <img src="../../assets/icons/currency-exchange-ic.svg" />
          <p className="my-1">Обмен Валют</p>
        </div>
        <div className="flex justify gap-4 mb-4">
          <img src="../../assets/icons/SDP-ic.svg" />
          <p className="my-1">СДП</p>
          <img src="../../assets/icons/chevron-down-ic.svg" />
        </div>
        <div className="flex justify gap-4 mb-4">
          <img src="../../assets/icons/chart-line-ic.svg" />
          <p>Рейтинговая модель</p>
          <img src="../../assets/icons/chevron-down-ic.svg" />
        </div>
        <div className="flex justify gap-4 mb-4">
          <img src="../../assets/icons/crypto-b-ic.svg" />
          <p className="my-1">Криптовикторина</p>
        </div>
        <div className="flex justify gap-4 mb-4">
          <img src="../../assets/icons/OTP-templates-ic.svg" />
          <p className="my-1">Шаблоны ОТР</p>
        </div>
        <div className="flex justify gap-4 mb-4 text-lg">
          <img src="../../assets/icons/ORM-ic.svg" />
          <Link to="/game" className="my-1 text-blue_accent">
            Game
          </Link>
        </div>
        <div className="mb-4 text-lg">
          <img
            src="../../assets/Barbie_Logo.png"
            className="w-20 h-auto"
            onClick={handleThemeToggle}
            style={{ cursor: "pointer" }}
            alt="Toggle Barbie Theme"
          />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
