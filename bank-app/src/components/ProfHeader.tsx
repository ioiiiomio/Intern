import React from "react";
import { faker, Faker } from "@faker-js/faker";

const avatarGitHub = faker.image.avatarGitHub();
const nameOfHuman = faker.person.fullName();


function ProfHeader(){

    return(
        <div className="flex-1 p-6 space-y-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Big box with 4 sections: Profile pic and info, empt box, 2 thigy with stats */}
            <div className="flex items-center space-x-4 col-span-1">
                <img
                    className="h-16 w-16 rounded-full object-cover"
                    src={avatarGitHub}
                    alt="Profile"
                />
                <div>
                    <h1 className="text-lg font-semibold">{nameOfHuman}</h1>
                    <h2 className="text-sm text-gray-500">Managér</h2>
                </div>
            </div>

            <div className="w-20% h-full col-span-1">
                {/* this is my tiny costylchik box with empty space */}
               
            </div>
            <div className="col-span-1">
                <h1>Max num of clients</h1>
                <h1> add the circle badg hre</h1>
            </div>
            <div className="col-span-1">
                        <div>
                <h1>Max num of clients</h1>
                <h1> add the circle badg hre</h1>
            </div>
            </div>
        </div>
    )
}

export default ProfHeader;