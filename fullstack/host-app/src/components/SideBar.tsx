import React from "react";
import { Link } from "react-router-dom";
function SideBar(){
    return(
        <div className="fixed bg-background_secondary rounded-2xl border border-border_color h-[1042px]">
           <div>
            <img className="justify-center max-w-40% mt-[25.27px] mb-[25.27px] mr-[27.84px] ml-[16px] w-[211.1630096435547] h-[27.45166015625px]" src="../../assets/Nurbank-pic.svg" />
           </div>
           <div className="max-w-fill border-t border-gray-400"/>
           <div className="mx-4 mt-6 size-lg text-text_color_secondary justify-center text-lg">
            <div className="flex justify gap-4 mb-4">
                <img className="" src="../../assets/icons/client-search-ic.svg" />
                <p className="my-1">Поиск Клиента</p>
            </div>
            <div className="flex justify gap-4 mb-4">
                <img className="" src="../../assets/icons//MSB-ic.svg" />
                <p className="my-1">МСБ</p>
            </div>
            <div className="flex justify gap-4 mb-4">
                <img className="" src="../../assets/icons/digital-id-ic.svg" />
                <p className="my-1">Digital ID</p>
            </div>
            <div className="flex justify gap-4 mb-4">
                <img className="" src="../../assets/icons/currency-exchange-ic.svg" />
                <p className="my-1">Обмен Валют</p>
            </div>
            <div className="flex justify gap-4 mb-4">
                <img className="" src="../../assets/icons/SDP-ic.svg" />
                <p className="my-1">СДП</p>
                <img className="" src="../../assets/icons/chevron-down-ic.svg" />
            </div>
            <div className="flex justify gap-4 mb-4">
                <img className="" src="../../assets/icons/chart-line-ic.svg" />
                <Link to="/referral" className="my-1">Рейтинговая модель</Link>
                <img className="align-end" src="../../assets/icons/chevron-down-ic.svg" />
            </div>
            <div className="flex justify gap-4 mb-4">
                <img className="" src="../../assets/icons/crypto-b-ic.svg" />
                <p className="my-1">Криптовикторина</p>
            </div>
            <div className="flex justify gap-4 mb-4">
                <img className="" src="../../assets/icons/OTP-templates-ic.svg" />
                <p className="my-1">Шаблоны ОТР</p>
            </div>
            <div className="flex justif gap-4 mb-4">
                <img className="" src="../../assets/icons/ORM-ic.svg" />
                <p className="my-1">ORM</p>
            </div>
            <div className="flex justify gap-4 mb-4 text-lg">
                <img className="" src="../../assets/icons/ORM-ic.svg" />
                <Link to="/game" className="my-1 text-blue_accent">Game</Link>
            </div>
           </div>
        </div>

    )
}

export default SideBar;