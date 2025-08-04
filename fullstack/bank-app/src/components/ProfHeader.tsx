import React from "react";
import { faker, Faker } from "@faker-js/faker";

const avatarGitHub = faker.image.avatarGitHub();
const nameOfHuman = faker.person.fullName();


function ProfHeader(){

    return(
        <div className="flex justify-between p-6 space-y-6 gap-4">
            {/* Big box with 4 sections: Profile pic and info, empt box, 2 thigy with stats */}
            <div className="ml-6 flex items-center space-x-4 col-span-1 gap-4">
                <img
                    className="h-16 w-16 rounded-full object-cover"
                    src={avatarGitHub}
                    alt="Profile"
                />
                <div>
                    <h1 className="text-2xl font-semibold">{nameOfHuman}</h1>
                    <h2 className="text-lg text-gray-500">Managér</h2>
                </div>
            </div>
            <div className="ml-6 flex gap-12">
                    <div className="col-span-1">
                        <h1 className='mb-3'>Минимальное количество кредитов</h1>
                        <div className="flex gap-6">
                            <div className="border w-11 h-11 rounded-full bg-bank_green_light flex items-center justify-center border-bank_green">
                                <img className="w-5 h-5" src="../../assets/check-ic.svg" alt="check icon" />
                            </div>

                            <div className="border w-11 h-11 rounded-full bg-bank_green_light flex items-center justify-center border-bank_green">
                                <img className="w-5 h-5" src="../../assets/check-ic.svg" alt="check icon" />
                            </div>

                            <div className="border w-11 h-11 rounded-full bg-bank_green_light flex items-center justify-center border-bank_green">
                                <img className="w-5 h-5" src="../../assets/check-ic.svg" alt="check icon" />
                            </div>

                            <div className="border w-11 h-11 rounded-full bg-background_prime flex items-center justify-center border-border_color">
                                <h1>12</h1>
                            </div>
                        </div>

                    </div>
                    <div className="col-span-1">
                        <div>
                            <h1 className="mb-3"> Минимальное количество депозитов</h1>
                            <div className="flex gap-6">
                            <div className="border w-11 h-11 rounded-full bg-bank_green_light flex items-center justify-center border-bank_green">
                                <img className="w-5 h-5" src="../../assets/check-ic.svg" alt="check icon" />
                            </div>

                            <div className="border w-11 h-11 rounded-full bg-bank_green_light flex items-center justify-center border-bank_green">
                                <img className="w-5 h-5" src="../../assets/check-ic.svg" alt="check icon" />
                            </div>

                            <div className="border w-11 h-11 rounded-full bg-bank_green_light flex items-center justify-center border-bank_green">
                                <img className="w-5 h-5" src="../../assets/check-ic.svg" alt="check icon" />
                            </div>

                            <div className="border w-11 h-11 rounded-full bg-background_prime flex items-center justify-center border-border_color ">
                                <h1>8</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfHeader;