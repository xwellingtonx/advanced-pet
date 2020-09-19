import {Virus, Navi} from './character';
import { ElementTypes, DeviceTypes } from '../../../global/constants';

var allWorlds = [
    {   
        deviceType: DeviceTypes.Megaman,
        description: "Based on Advanced PET Blue Version",
        stages: [
            {
                id: 1,
                stageClear: 10,
                boss: new Navi("NormalNavi", 8, ElementTypes.Neutral, 2, "normalnavi.svg", ""),
                viruses: [
                    new Virus("Mettaur", 1, 6, ElementTypes.Neutral, 2, "mettaur.svg"),
                    //new Virus("Spikey", 1, 7, ElementTypes.Neutral, 3, "spikey.svg"),
                    //new Virus("Shrimpy", 1, 7, ElementTypes.Neutral, 3, "Shrimpy.svg"),
                    new Virus("Boomer", 1, 7, ElementTypes.Neutral, 3, "boomer.svg"),
                    //new Virus("Elemperor", 1, 9, ElementTypes.Neutral, 3, "elemperor.svg"),
                   // new Virus("Dharma", 1, 8, ElementTypes.Neutral, 2, "dharma.svg"),
                    //new Virus("Kilby", 1, 8, ElementTypes.Neutral, 3, "kilby.svg"),
                    new Virus("Melody", 1, 7, ElementTypes.Neutral, 2, "melody.svg"),
                    new Virus("VolGear", 1, 7, ElementTypes.Neutral, 2, "volgear.svg"),
                    new Virus("Moloko", 1, 7, ElementTypes.Neutral, 2, "moloko.svg"),
                   // new Virus("Weather", 1, 7, ElementTypes.Neutral, 2, "weather.svg")
                ]
            },
            {
                id: 2,
                stageClear: 20,
                boss: new Navi("Roll", 8, ElementTypes.Neutral, 2, "", ""),
                viruses: []
            },
            {
                id: 3,
                stageClear: 30,
                boss: new Navi("GutsMan", 8, ElementTypes.Neutral, 2, "", ""),
                viruses: []
            },
            {
                id: 4,
                stageClear: 40,
                boss: new Navi("TopMan", 8, ElementTypes.Neutral, 2, "", ""),
                viruses: []
            },
            {
                id: 5,
                stageClear: 50,
                boss: new Navi("Sparkman", 8, ElementTypes.Elec, 2, "", ""),
                viruses: []
            },
            {
                id: 6,
                stageClear: 60,
                boss: new Navi("Fireman", 8, ElementTypes.Fire, 2, "", ""),
                viruses: []
            },
            {
                id: 7,
                stageClear: 70,
                boss: new Navi("ShadeMan", 8, ElementTypes.Neutral, 2, "", ""),
                viruses: []
            },
            {
                id: 8,
                stageClear: 80,
                boss: new Navi("SearchMan", 8, ElementTypes.Neutral, 2, "", ""),
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
                boss: new Navi("NormalNavi", 8, ElementTypes.Neutral, 2, "", ""),
                viruses: []
            },
            {
                id: 2,
                stageClear: 20,
                boss: new Navi("AquaMan", 8, ElementTypes.Aqua, 2, "", ""),
                viruses: []
            },
            {
                id: 3,
                stageClear: 30,
                boss: new Navi("TopMan", 8, ElementTypes.Neutral, 2, "", ""),
                viruses: []
            },
            {
                id: 4,
                stageClear: 40,
                boss: new Navi("Sparkman", 8, ElementTypes.Elec, 2, "", ""),
                viruses: []
            },   
            {
                id: 5,
                stageClear: 50,
                boss: new Navi("WoodMan", 8, ElementTypes.Wood, 2, "", ""),
                viruses: []
            }, 
            {
                id: 6,
                stageClear: 60,
                boss: new Navi("MetalMan", 8, ElementTypes.Neutral, 2, "", ""),
                viruses: []
            },  
            {
                id: 7,
                stageClear: 70,
                boss: new Navi("ShadeMan", 8, ElementTypes.Neutral, 2, "", ""),
                viruses: []
            }, 
            {
                id: 8,
                stageClear: 80,
                boss: new Navi("ProtoMan", 8, ElementTypes.Neutral, 2, "", ""),
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
}

// //2. For require syntax
// class className {}
//module.exports.World = World
// //or
// module.exports = {
//     className: className
// }