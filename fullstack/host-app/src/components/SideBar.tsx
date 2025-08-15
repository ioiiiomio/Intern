import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Banknote,
  Bitcoin,
  BookText,
  Calculator,
  ChartLine,
  ChevronDown,
  ChevronUp,
  CirclePlus,
  ClipboardList,
  FileUser,
  FolderDot,
  Gamepad2,
  House,
  IdCard,
  Landmark,
  Shield,
  User,
  Users,
} from "lucide-react";

function SideBar() {
  const [barbieTheme, setBarbieTheme] = useState(false);
  const [referralOpen, setReferralOpen] = useState(false); // <-- new state

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
    <div className="fixed bg-white rounded-2xl border border-border_color h-[1042px] w-[300px]">
      {/* Logo */}
      <div className="justify-center">
        <img
          className="mt-[25.27px] mb-[25.27px] mr-[27.84px] ml-[16px] max-w-[211px] h-[27px]"
          src="../../assets/Nurbank-pic.svg"
          alt="Nurbank Logo"
        />
      </div>

      <div className="border-t border-gray-400" />

      {/* Menu */}
      <div className="mx-4 mt-6 text-text_color_secondary text-lg">
        <div className="flex gap-4 mb-4 items-center">
          <Link
            to="/"
            className="flex items-center gap-4 hover:text-blue-500 focus:text-blue_accent"
          >
            <FileUser className="w-7.5 h-7.5" />
            <p className="max-w-[182px]">Поиск Клиента</p>
          </Link>
        </div>

        {/* Referral Program */}
        <div
          className="flex justify-between items-center gap-4 mb-4 cursor-pointer"
          onClick={() => setReferralOpen((prev) => !prev)}
        >
          <div className="flex items-center gap-4">
            <span>
              <Link
                to="/referral"
                className="flex items-center gap-4 hover:text-blue-500 focus:text-blue_accent"
              >
                <Users className="w-7.5 h-7.5" />
                Реферальная программа
                {referralOpen ? (
                  <ChevronUp className="w-6 h-6" />
                ) : (
                  <ChevronDown className="w-6 h-6" />
                )}
              </Link>
            </span>
          </div>
        </div>

        {/* Submenu */}
        {referralOpen && (
          <div className="ml-9 my-4 text-text_color_secondary flex flex-col gap-2">
            <div className="flex gap-4 mb-2 text-m font-medium">
              <Link
                to="/kitty"
                className="flex items-center gap-4 hover:text-blue-500 focus:text-blue_accent"
              >
                <House className="w-7.5 h-7.5" />
                Главная
              </Link>
            </div>
            <div className="flex gap-4 mb-2 text-m font-medium">
              <Link
                to="/kitty"
                className="flex items-center gap-4 hover:text-blue-500 focus:text-blue_accent"
              >
                <ClipboardList className="w-7.5 h-7.5" />
                Заявки
              </Link>
            </div>
            <div className="flex gap-4 mb-2 text-m font-medium">
              <Link
                to="/kitty"
                className="flex items-center gap-4 hover:text-blue-500 focus:text-blue_accent"
              >
                <User className="w-7.5 h-7.5" />
                Клиенты
              </Link>
            </div>
            <div className="flex gap-4 mb-2 text-m font-medium">
              <Link
                to="/kitty"
                className="flex items-center gap-4 hover:text-blue-500 focus:text-blue_accent"
              >
                <Banknote className="w-7.5 h-7.5" />
                Вознаграждения
              </Link>
            </div>
            <div className="flex gap-4 mb-2 text-m font-medium">
              <Link
                to="/kitty"
                className="flex items-center gap-4 hover:text-blue-500 focus:text-blue_accent"
              >
                <Calculator className="w-7.5 h-7.5" />
                Симуляция
              </Link>
            </div>
            <div className="flex gap-4 mb-2 text-m font-medium">
              <Link
                to="/kitty"
                className="flex items-center gap-4 hover:text-blue-500 focus:text-blue_accent"
              >
                <Shield className="w-7.5 h-7.5" />
                Кураторская панель
              </Link>
            </div>
          </div>
        )}

        {/* Other menu items */}
        <div className="flex gap-4 mb-4 items-center">
          <Link
            to="/"
            className="flex items-center gap-4 hover:text-blue-500 focus:text-blue_accent"
          >
            <CirclePlus className="w-7.5 h-7.5" />
            <p>МСБ</p>
            <ChevronDown className="w-6 h-6" />
          </Link>
        </div>
        <div className="flex gap-4 mb-4 items-center">
          <Link
            to="/"
            className="flex items-center gap-4 hover:text-blue-500 focus:text-blue_accent"
          >
            <IdCard className="w-7.5 h-7.5" />
            <p>Digital ID</p>
          </Link>
        </div>
        <div className="flex gap-4 mb-4 items-center">
          <Link
            to="/"
            className="flex items-center gap-4 hover:text-blue-500 focus:text-blue_accent"
          >
            <Landmark className="w-7.5 h-7.5" />
            <p>Обмен Валют</p>
          </Link>
        </div>
        <div className="flex gap-4 mb-4 items-center">
          <Link
            to="/"
            className="flex items-center gap-4 hover:text-blue-500 focus:text-blue_accent"
          >
            <FolderDot className="w-7.5 h-7.5" />
            <p>СДП</p>
            <ChevronDown className="w-6 h-6" />
          </Link>
        </div>
        <div className="flex gap-4 mb-4 items-center">
          <Link
            to="/"
            className="flex items-center gap-4 hover:text-blue-500 focus:text-blue_accent"
          >
            <ChartLine className="w-7.5 h-7.5" />
            <p>Рейтинговая модель</p>
            <ChevronDown className="w-6 h-6" />
          </Link>
        </div>
        <div className="flex gap-4 mb-4 items-center">
          <Link
            to="/"
            className="flex items-center gap-4 hover:text-blue-500 focus:text-blue_accent"
          >
            <Bitcoin className="w-7.5 h-7.5" />
            <p>Криптовикторина</p>
          </Link>
        </div>
        <div className="flex gap-4 mb-4 items-center">
          <Link
            to="/"
            className="flex items-center gap-4 hover:text-blue-500 focus:text-blue_accent"
          >
            <BookText className="w-7.5 h-7.5" />
            <p>Шаблоны ОТР</p>
          </Link>
        </div>
        <div className="flex gap-4 mb-4 items-center text-lg">
          <Link
            to="/game"
            className="flex items-center gap-4 hover:text-blue-500 focus:text-blue_accent"
          >
            <Gamepad2 className="w-7.5 h-7.5" />
            Game
          </Link>
        </div>

        {/* Barbie Theme */}
        <div className="mb-4 text-lg">
          <img
            src="../../assets/Barbie_Logo.png"
            className="w-20 h-auto cursor-pointer"
            onClick={handleThemeToggle}
            alt="Toggle Barbie Theme"
          />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
