import {Virus, Navi} from './enemy.js';
import { ElementTypes, DeviceTypes } from '../../../global/constants';

//TODO: The first two tournaments are NormalNavis
var allWorlds = [
    {   
        deviceType: DeviceTypes.Megaman,
        description: "Based on Advanced PET Blue Version",
        stages: [
            {
                id: 1,
                stageClear: 10,
                boss: new Navi("NormalNaviA", 10, 8, ElementTypes.Neutral, 2, "normalnavi.svg", ""),
                viruses: [
                    new Virus("Mettaur", 1, 6, ElementTypes.Neutral, 2, "mettaur.svg"),
                    new Virus("Spikey", 1, 7, ElementTypes.Fire, 3, "spikey.svg"),
                    new Virus("Shrimpy", 1, 7, ElementTypes.Aqua, 3, "shrimpy.svg"),
                    new Virus("Boomer", 1, 7, ElementTypes.Neutral, 3, "boomer.svg"),
                    new Virus("Dharma", 1, 8, ElementTypes.Neutral, 2, "dharma.svg"),
                    new Virus("Kilby", 1, 8, ElementTypes.Wood, 3, "kilby.svg"),
                    new Virus("Melody", 1, 7, ElementTypes.Neutral, 2, "melody.svg"),
                    new Virus("VolGear", 1, 7, ElementTypes.Fire, 2, "volgear.svg"),
                    new Virus("Moloko", 1, 7, ElementTypes.Neutral, 2, "moloko.svg"),
                    new Virus("Billy", 1, 6, ElementTypes.Elec, 2, "billy.svg"),
                    new Virus("Weather", 1, 7, ElementTypes.Neutral, 2, "weather.svg"),
                    new Virus("Trumpy", 1, 7, ElementTypes.Neutral, 2, "trumpy.svg")
                ]
            },
            {
                id: 2,
                stageClear: 10,
                boss: new Navi("NormalNaviB", 15, 16, ElementTypes.Neutral, 4, "normalnavi.svg", ""),
                viruses: [
                ]
            },            
            {
                id: 3,
                stageClear: 20,
                boss: new Navi("Roll", 20, 8, ElementTypes.Neutral, 2, "roll.svg", ""),
                viruses: []
            },
            {
                id: 4,
                stageClear: 30,
                boss: new Navi("GutsMan", 23, 8, ElementTypes.Neutral, 2, "gutsman.svg", ""),
                viruses: []
            },
            {
                id: 5,
                stageClear: 40,
                boss: new Navi("TopMan", 25, 8, ElementTypes.Neutral, 2, "topman.svg", ""),
                viruses: []
            },
            {
                id: 6,
                stageClear: 50,
                boss: new Navi("Sparkman", 27, 8, ElementTypes.Elec, 2, "sparkman.svg", ""),
                viruses: []
            },
            {
                id: 7,
                stageClear: 80,
                boss: new Navi("Fireman", 30, 8, ElementTypes.Fire, 2, "fireman.svg", ""),
                viruses: []
            },
            {
                id: 8,
                stageClear: 130,
                boss: new Navi("ShadeMan", 35, 8, ElementTypes.Neutral, 2, "shademan.svg", ""),
                viruses: []
            },
            {
                id: 9,
                stageClear: 200,
                boss: new Navi("SearchMan", 44, 8, ElementTypes.Neutral, 2, "searchman.svg", ""),
                viruses: []
            }
        ]
    },
    {
        deviceType: DeviceTypes.Protoman,
        description: "Based on Advanced PET RED Version",
        stages: [
            {
                id: 1,
                stageClear: 10,
                boss: new Navi("NormalNaviA", 10, 8, ElementTypes.Neutral, 2, "normalnavi.svg", ""),
                viruses: []
            },
            {
                id: 2,
                stageClear: 10,
                boss: new Navi("NormalNaviB", 15, 8, ElementTypes.Neutral, 2, "normalnavi.svg", ""),
                viruses: []
            },
            {
                id: 3,
                stageClear: 20,
                boss: new Navi("AquaMan", 20, 8, ElementTypes.Aqua, 2, "aquaman.svg", ""),
                viruses: []
            },
            {
                id: 4,
                stageClear: 30,
                boss: new Navi("TopMan", 23, 8, ElementTypes.Neutral, 2, "topman.svg", ""),
                viruses: []
            },
            {
                id: 5,
                stageClear: 40,
                boss: new Navi("Sparkman", 25, 8, ElementTypes.Elec, 2, "sparkman.svg", ""),
                viruses: []
            },   
            {
                id: 6,
                stageClear: 50,
                boss: new Navi("WoodMan", 27, 8, ElementTypes.Wood, 2, "woodman.svg", ""),
                viruses: []
            }, 
            {
                id: 7,
                stageClear: 80,
                boss: new Navi("MetalMan", 30, 8, ElementTypes.Neutral, 2, "", ""),
                viruses: []
            },  
            {
                id: 8,
                stageClear: 130,
                boss: new Navi("ShadeMan", 40, 8, ElementTypes.Neutral, 2, "shademan.svg", ""),
                viruses: []
            }, 
            {
                id: 9,
                stageClear: 200,
                boss: new Navi("ProtoMan", 50, 8, ElementTypes.Neutral, 2, "protoman.svg", ""),
                viruses: []
            }                                
        ]
    }            
];

export default class World {
    static sortWorldsByDeviceType(deviceType) {
        var filteredList = [];
        //This guarantee the world for the deviceType be on the top of the list
        filteredList = allWorlds.filter(x => x.deviceType !== deviceType);
        filteredList.splice(0, 0, allWorlds.find(x => x.deviceType === deviceType))

        return filteredList;
    }
    static getCurrentStage(deviceType, worldId, stageId) {
        var worlds = this.sortWorldsByDeviceType(deviceType);
        return worlds[worldId - 1].stages.find(x => x.id === stageId);
    }
    static getRandomVirus(deviceType, worldId, stageId) {
        var stage = this.getCurrentStage(deviceType, worldId, stageId);

        var virusIndex = Math.floor(Math.random() * stage.viruses.length);  
        
        return stage.viruses[virusIndex];
    }   
    static getWorldsCount() {
        return allWorlds.length;
    }
}

// //2. For require syntax
// class className {}
//module.exports.World = World
// //or
// module.exports = {
//     className: className
// }