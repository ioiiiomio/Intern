// Здесь про заявки: Всего, успешные, Ожидают, Вознаграждения

import React from "react";

function QuickActions(){
    return(
        
        <div className="w-full flex gap-3">
            <h1> Быстрые действия</h1>
            
            <div className="border-text_color_secondary rounded-2xl bg-bank_blue">
                <p>Новая заявка</p>
            </div>
            <div className="border-text_color_secondary rounded-2xl">
                <p>Симуляция</p>
            </div>
            <div className="border-text_color_secondary rounded-2xl">
                <p>Workflow</p>
            </div>
            <div className="border-text_color_secondary rounded-2xl">
                <p>Поиск клиента</p>
            </div>
            <div className="border-text_color_secondary rounded-2xl">
                <p>Экспорт отчета</p>
            </div>    
        </div>
    );
}

export default QuickActions;
