// Здесь про заявки: Всего, успешные, Ожидают, Вознаграждения

import React from "react";

function Applications(){
    return(
        <div className="w-full flex gap-3 justify-between items-center">
            <div className="w-[337px] h-[149px] p-6 border bg-background_secondary border-text_color_secondary rounded-2xl flex justify-between">
                <div>
                    <p className="text-lg mb-2">Всего заявок</p>
                        <h1 className="text-3xl font-semibold mb-4">0</h1>
                    <div className="flex">
                        <p className="text-bank_green mr-2">+12%</p>
                        <p className="text-text_color_secondary">за месяц</p>
                    </div>
                </div>
                <div className="ml-3">
                    <img src='../../assets/icons/file-ic.svg' alt="file-ic"/>
                </div>
            </div>
    
            <div className="w-[337px] h-[149px] p-6  bg-background_secondary border border-text_color_secondary rounded-2xl flex justify-between">
                <div>
                    <p className="text-lg mb-2">Успешные</p>
                        <h1 className="text-3xl font-semibold mb-4">0</h1>
                    <div className="flex">
                        <p className="text-bank_green mr-2">+12%</p>
                        <p className="text-text_color_secondary">за месяц</p>
                    </div>
                </div>
                <div className="ml-3">
                    <img src='../../assets/icons/file-ic.svg' alt="file-ic"/>
                </div>
            </div>

            <div className="w-[337px] h-[149px] p-6 bg-background_secondary border border-text_color_secondary rounded-2xl flex justify-between">
                <div>
                    <p className="text-lg mb-2">Ожидают</p>
                        <h1 className="text-3xl font-semibold mb-4">0</h1>
                    <div className="flex">
                        <p className="text-bank_green mr-2">+12%</p>
                        <p className="text-text_color_secondary">за месяц</p>
                    </div>
                </div>
                <div className="ml-3">
                    <img src='../../assets/icons/file-ic.svg' alt="file-ic"/>
                </div>
            </div>

            <div className="w-[337px] h-[149px] p-6 bg-background_secondary border border-text_color_secondary rounded-2xl flex justify-between">
                <div>
                    <p className="text-lg mb-2">Вознаграждения</p>
                        <h1 className="text-3xl font-semibold mb-4">0</h1>
                    <div className="flex">
                        <p className="text-bank_green mr-2">+12%</p>
                        <p className="text-text_color_secondary">за месяц</p>
                    </div>
                </div>
                <div className="ml-3">
                    <img src='../../assets/icons/file-ic.svg' alt="file-ic"/>
                </div>
            </div>
        </div>
    );
}

export default Applications;
