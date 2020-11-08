import {Virus, Navi} from './enemy.js';
import { ElementTypes, DeviceTypes } from '../../../global/constants';

var allWorlds = [
    {   
        deviceType: DeviceTypes.Megaman,
        description: "Based on Advanced PET Blue Version",
        stages: [
            {
                id: 1,
                stageClear: 10,
                boss: new Navi("NormalNaviA", 8, 12, ElementTypes.Neutral, 2, "normalnavi.svg", ""),
                viruses: [
                    new Virus("Mettaur", 1, 10, ElementTypes.Neutral, 1, "mettaur.svg"),
                    new Virus("Spikey", 1, 10, ElementTypes.Fire, 1, "spikey.svg"),
                    new Virus("Shrimpy", 1, 10, ElementTypes.Aqua, 1, "shrimpy.svg")
                ]
            },
            {
                id: 2,
                stageClear: 10,
                boss: new Navi("NormalNaviB", 15, 14, ElementTypes.Neutral, 2, "normalnavi.svg", ""),
                viruses: [
                    new Virus("Mettaur", 2, 12, ElementTypes.Neutral, 2, "mettaur.svg"),
                    new Virus("Spikey", 2, 12, ElementTypes.Fire, 2, "spikey.svg"),
                    new Virus("Shrimpy", 2, 12, ElementTypes.Aqua, 2, "shrimpy.svg"),
                    new Virus("Boomer", 2, 12, ElementTypes.Neutral, 2, "boomer.svg")                   
                ]
            },            
            {
                id: 3,
                stageClear: 20,
                boss: new Navi("Roll", 20, 16, ElementTypes.Neutral, 3, "roll.svg", ""),
                viruses: [
                    new Virus("Mettaur", 3, 14, ElementTypes.Neutral, 2, "mettaur.svg"),
                    new Virus("Spikey", 3, 14, ElementTypes.Fire, 2, "spikey.svg"),
                    new Virus("Shrimpy", 3, 14, ElementTypes.Aqua, 2, "shrimpy.svg"),
                    new Virus("Boomer", 3, 14, ElementTypes.Neutral, 2, "boomer.svg"),
                    new Virus("Dharma", 3, 14, ElementTypes.Neutral, 2, "dharma.svg")                   
                ]
            },
            {
                id: 4,
                stageClear: 30,
                boss: new Navi("GutsMan", 22, 18, ElementTypes.Neutral, 3, "gutsman.svg", ""),
                viruses: [
                    new Virus("Mettaur", 4, 16, ElementTypes.Neutral, 2, "mettaur.svg"),
                    new Virus("Spikey", 4, 16, ElementTypes.Fire, 2, "spikey.svg"),
                    new Virus("Shrimpy", 4, 16, ElementTypes.Aqua, 2, "shrimpy.svg"),
                    new Virus("Boomer", 4, 16, ElementTypes.Neutral, 2, "boomer.svg"),
                    new Virus("Dharma", 4, 16, ElementTypes.Neutral, 2, "dharma.svg"),
                    new Virus("Kilby", 4, 16, ElementTypes.Wood, 2, "kilby.svg")                   
                ]
            },
            {
                id: 5,
                stageClear: 40,
                boss: new Navi("TopMan", 25, 20, ElementTypes.Neutral, 3, "topman.svg", ""),
                viruses: [
                    new Virus("Mettaur", 5, 18, ElementTypes.Neutral, 3, "mettaur.svg"),
                    new Virus("Spikey", 5, 18, ElementTypes.Fire, 3, "spikey.svg"),
                    new Virus("Shrimpy", 5, 18, ElementTypes.Aqua, 3, "shrimpy.svg"),
                    new Virus("Boomer", 5, 18, ElementTypes.Neutral, 3, "boomer.svg"),
                    new Virus("Dharma", 5, 18, ElementTypes.Neutral, 3, "dharma.svg"),
                    new Virus("Kilby", 5, 18, ElementTypes.Wood, 3, "kilby.svg"),
                    new Virus("Melody", 5, 18, ElementTypes.Neutral, 3, "melody.svg"),
                    new Virus("VolGear", 5, 18, ElementTypes.Fire, 3, "volgear.svg"),
                    new Virus("Moloko", 5, 18, ElementTypes.Neutral, 3, "moloko.svg")                    
                ]
            },
            {
                id: 6,
                stageClear: 50,
                boss: new Navi("Sparkman", 27, 22, ElementTypes.Elec, 3, "sparkman.svg", ""),
                viruses: [
                    new Virus("Mettaur", 5, 20, ElementTypes.Neutral, 3, "mettaur.svg"),
                    new Virus("Spikey", 5, 20, ElementTypes.Fire, 3, "spikey.svg"),
                    new Virus("Shrimpy", 5, 20, ElementTypes.Aqua, 3, "shrimpy.svg"),
                    new Virus("Boomer", 5, 20, ElementTypes.Neutral, 3, "boomer.svg"),
                    new Virus("Dharma", 5, 20, ElementTypes.Neutral, 3, "dharma.svg"),
                    new Virus("Kilby", 5, 20, ElementTypes.Wood, 3, "kilby.svg"),
                    new Virus("Melody", 5, 20, ElementTypes.Neutral, 3, "melody.svg"),
                    new Virus("VolGear", 5, 20, ElementTypes.Fire, 3, "volgear.svg"),
                    new Virus("Moloko", 5, 20, ElementTypes.Neutral, 3, "moloko.svg"),
                    new Virus("Billy", 5, 20, ElementTypes.Elec, 3, "billy.svg"),
                    new Virus("Weather", 5, 20, ElementTypes.Neutral, 3, "weather.svg"),
                    new Virus("Trumpy", 5, 20, ElementTypes.Neutral, 3, "trumpy.svg")                                         
                ]
            },
            {
                id: 7,
                stageClear: 80,
                boss: new Navi("Fireman", 30, 24, ElementTypes.Fire, 4, "fireman.svg", ""),
                viruses: [
                    new Virus("Mettaur", 5, 22, ElementTypes.Neutral, 3, "mettaur.svg"),
                    new Virus("Spikey", 5, 22, ElementTypes.Fire, 3, "spikey.svg"),
                    new Virus("Shrimpy", 5, 22, ElementTypes.Aqua, 3, "shrimpy.svg"),
                    new Virus("Boomer", 5, 22, ElementTypes.Neutral, 3, "boomer.svg"),
                    new Virus("Dharma", 5, 22, ElementTypes.Neutral, 3, "dharma.svg"),
                    new Virus("Kilby", 5, 22, ElementTypes.Wood, 3, "kilby.svg"),
                    new Virus("Melody", 5, 22, ElementTypes.Neutral, 3, "melody.svg"),
                    new Virus("VolGear", 5, 22, ElementTypes.Fire, 3, "volgear.svg"),
                    new Virus("Moloko", 5, 22, ElementTypes.Neutral, 3, "moloko.svg"),
                    new Virus("Billy", 5, 22, ElementTypes.Elec, 3, "billy.svg"),
                    new Virus("Weather", 5, 22, ElementTypes.Neutral, 3, "weather.svg"),
                    new Virus("Trumpy", 5, 22, ElementTypes.Neutral, 3, "trumpy.svg")                  
                ]
            },
            {
                id: 8,
                stageClear: 130,
                boss: new Navi("ShadeMan", 35, 26, ElementTypes.Neutral, 4, "shademan.svg", ""),
                viruses: [
                    new Virus("Mettaur", 5, 22, ElementTypes.Neutral, 3, "mettaur.svg"),
                    new Virus("Spikey", 5, 22, ElementTypes.Fire, 3, "spikey.svg"),
                    new Virus("Shrimpy", 5, 22, ElementTypes.Aqua, 3, "shrimpy.svg"),
                    new Virus("Boomer", 5, 22, ElementTypes.Neutral, 3, "boomer.svg"),
                    new Virus("Dharma", 5, 22, ElementTypes.Neutral, 3, "dharma.svg"),
                    new Virus("Kilby", 5, 22, ElementTypes.Wood, 3, "kilby.svg"),
                    new Virus("Melody", 5, 22, ElementTypes.Neutral, 3, "melody.svg"),
                    new Virus("VolGear", 5, 22, ElementTypes.Fire, 3, "volgear.svg"),
                    new Virus("Moloko", 5, 22, ElementTypes.Neutral, 3, "moloko.svg"),
                    new Virus("Billy", 5, 22, ElementTypes.Elec, 3, "billy.svg"),
                    new Virus("Weather", 5, 22, ElementTypes.Neutral, 3, "weather.svg"),
                    new Virus("Trumpy", 5, 22, ElementTypes.Neutral, 3, "trumpy.svg")                     
                ]
            },
            {
                id: 9,
                stageClear: 200,
                boss: new Navi("SearchMan", 44, 28, ElementTypes.Neutral, 4, "searchman.svg", ""),
                viruses: [
                    new Virus("Mettaur", 5, 22, ElementTypes.Neutral, 3, "mettaur.svg"),
                    new Virus("Spikey", 5, 22, ElementTypes.Fire, 3, "spikey.svg"),
                    new Virus("Shrimpy", 5, 22, ElementTypes.Aqua, 3, "shrimpy.svg"),
                    new Virus("Boomer", 5, 22, ElementTypes.Neutral, 3, "boomer.svg"),
                    new Virus("Dharma", 5, 22, ElementTypes.Neutral, 3, "dharma.svg"),
                    new Virus("Kilby", 5, 22, ElementTypes.Wood, 3, "kilby.svg"),
                    new Virus("Melody", 5, 22, ElementTypes.Neutral, 3, "melody.svg"),
                    new Virus("VolGear", 5, 22, ElementTypes.Fire, 3, "volgear.svg"),
                    new Virus("Moloko", 5, 22, ElementTypes.Neutral, 3, "moloko.svg"),
                    new Virus("Billy", 5, 22, ElementTypes.Elec, 3, "billy.svg"),
                    new Virus("Weather", 5, 22, ElementTypes.Neutral, 3, "weather.svg"),
                    new Virus("Trumpy", 5, 22, ElementTypes.Neutral, 3, "trumpy.svg")                    
                ]
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
                boss: new Navi("NormalNaviA",  8, 12, ElementTypes.Neutral, 2, "normalnavi.svg", ""),
                viruses: [
                    new Virus("Mettaur", 1, 10, ElementTypes.Neutral, 1, "mettaur.svg"),
                    new Virus("Spikey", 1, 10, ElementTypes.Fire, 1, "spikey.svg"),
                    new Virus("Shrimpy", 1, 10, ElementTypes.Aqua, 1, "shrimpy.svg")
                ]
            },
            {
                id: 2,
                stageClear: 10,
                boss: new Navi("NormalNaviB", 15, 14, ElementTypes.Neutral, 2, "normalnavi.svg", ""),
                viruses: [
                    new Virus("Mettaur", 2, 12, ElementTypes.Neutral, 2, "mettaur.svg"),
                    new Virus("Spikey", 2, 12, ElementTypes.Fire, 2, "spikey.svg"),
                    new Virus("Shrimpy", 2, 12, ElementTypes.Aqua, 2, "shrimpy.svg"),
                    new Virus("Boomer", 2, 12, ElementTypes.Neutral, 2, "boomer.svg")                   
                ]
            },
            {
                id: 3,
                stageClear: 20,
                boss: new Navi("AquaMan", 20, 16, ElementTypes.Aqua, 3, "aquaman.svg", ""),
                viruses: [
                    new Virus("Mettaur", 3, 14, ElementTypes.Neutral, 2, "mettaur.svg"),
                    new Virus("Spikey", 3, 14, ElementTypes.Fire, 2, "spikey.svg"),
                    new Virus("Shrimpy", 3, 14, ElementTypes.Aqua, 2, "shrimpy.svg"),
                    new Virus("Boomer", 3, 14, ElementTypes.Neutral, 2, "boomer.svg"),
                    new Virus("Dharma", 3, 14, ElementTypes.Neutral, 2, "dharma.svg")                   
                ]
            },
            {
                id: 4,
                stageClear: 30,
                boss: new Navi("TopMan", 22, 18, ElementTypes.Neutral, 3, "topman.svg", ""),
                viruses: [
                    new Virus("Mettaur", 4, 16, ElementTypes.Neutral, 2, "mettaur.svg"),
                    new Virus("Spikey", 4, 16, ElementTypes.Fire, 2, "spikey.svg"),
                    new Virus("Shrimpy", 4, 16, ElementTypes.Aqua, 2, "shrimpy.svg"),
                    new Virus("Boomer", 4, 16, ElementTypes.Neutral, 2, "boomer.svg"),
                    new Virus("Dharma", 4, 16, ElementTypes.Neutral, 2, "dharma.svg"),
                    new Virus("Kilby", 4, 16, ElementTypes.Wood, 2, "kilby.svg")                   
                ]
            },
            {
                id: 5,
                stageClear: 40,
                boss: new Navi("Sparkman", 25, 20, ElementTypes.Elec, 3, "sparkman.svg", ""),
                viruses: [
                    new Virus("Mettaur", 5, 18, ElementTypes.Neutral, 3, "mettaur.svg"),
                    new Virus("Spikey", 5, 18, ElementTypes.Fire, 3, "spikey.svg"),
                    new Virus("Shrimpy", 5, 18, ElementTypes.Aqua, 3, "shrimpy.svg"),
                    new Virus("Boomer", 5, 18, ElementTypes.Neutral, 3, "boomer.svg"),
                    new Virus("Dharma", 5, 18, ElementTypes.Neutral, 3, "dharma.svg"),
                    new Virus("Kilby", 5, 18, ElementTypes.Wood, 3, "kilby.svg"),
                    new Virus("Melody", 5, 18, ElementTypes.Neutral, 3, "melody.svg"),
                    new Virus("VolGear", 5, 18, ElementTypes.Fire, 3, "volgear.svg"),
                    new Virus("Moloko", 5, 18, ElementTypes.Neutral, 3, "moloko.svg")                    
                ]
            },   
            {
                id: 6,
                stageClear: 50,
                boss: new Navi("WoodMan", 27, 22, ElementTypes.Wood, 3, "woodman.svg", ""),
                viruses: [
                    new Virus("Mettaur", 5, 20, ElementTypes.Neutral, 3, "mettaur.svg"),
                    new Virus("Spikey", 5, 20, ElementTypes.Fire, 3, "spikey.svg"),
                    new Virus("Shrimpy", 5, 20, ElementTypes.Aqua, 3, "shrimpy.svg"),
                    new Virus("Boomer", 5, 20, ElementTypes.Neutral, 3, "boomer.svg"),
                    new Virus("Dharma", 5, 20, ElementTypes.Neutral, 3, "dharma.svg"),
                    new Virus("Kilby", 5, 20, ElementTypes.Wood, 3, "kilby.svg"),
                    new Virus("Melody", 5, 20, ElementTypes.Neutral, 3, "melody.svg"),
                    new Virus("VolGear", 5, 20, ElementTypes.Fire, 3, "volgear.svg"),
                    new Virus("Moloko", 5, 20, ElementTypes.Neutral, 3, "moloko.svg"),
                    new Virus("Billy", 5, 20, ElementTypes.Elec, 3, "billy.svg"),
                    new Virus("Weather", 5, 20, ElementTypes.Neutral, 3, "weather.svg"),
                    new Virus("Trumpy", 5, 20, ElementTypes.Neutral, 3, "trumpy.svg")                                         
                ]
            }, 
            {
                id: 7,
                stageClear: 80,
                boss: new Navi("MetalMan", 30, 24, ElementTypes.Neutral, 4, "", ""),
                viruses: [
                    new Virus("Mettaur", 5, 22, ElementTypes.Neutral, 3, "mettaur.svg"),
                    new Virus("Spikey", 5, 22, ElementTypes.Fire, 3, "spikey.svg"),
                    new Virus("Shrimpy", 5, 22, ElementTypes.Aqua, 3, "shrimpy.svg"),
                    new Virus("Boomer", 5, 22, ElementTypes.Neutral, 3, "boomer.svg"),
                    new Virus("Dharma", 5, 22, ElementTypes.Neutral, 3, "dharma.svg"),
                    new Virus("Kilby", 5, 22, ElementTypes.Wood, 3, "kilby.svg"),
                    new Virus("Melody", 5, 22, ElementTypes.Neutral, 3, "melody.svg"),
                    new Virus("VolGear", 5, 22, ElementTypes.Fire, 3, "volgear.svg"),
                    new Virus("Moloko", 5, 22, ElementTypes.Neutral, 3, "moloko.svg"),
                    new Virus("Billy", 5, 22, ElementTypes.Elec, 3, "billy.svg"),
                    new Virus("Weather", 5, 22, ElementTypes.Neutral, 3, "weather.svg"),
                    new Virus("Trumpy", 5, 22, ElementTypes.Neutral, 3, "trumpy.svg")                  
                ]
            },  
            {
                id: 8,
                stageClear: 130,
                boss: new Navi("ShadeMan", 35, 26, ElementTypes.Neutral, 4, "shademan.svg", ""),
                viruses: [
                    new Virus("Mettaur", 5, 22, ElementTypes.Neutral, 3, "mettaur.svg"),
                    new Virus("Spikey", 5, 22, ElementTypes.Fire, 3, "spikey.svg"),
                    new Virus("Shrimpy", 5, 22, ElementTypes.Aqua, 3, "shrimpy.svg"),
                    new Virus("Boomer", 5, 22, ElementTypes.Neutral, 3, "boomer.svg"),
                    new Virus("Dharma", 5, 22, ElementTypes.Neutral, 3, "dharma.svg"),
                    new Virus("Kilby", 5, 22, ElementTypes.Wood, 3, "kilby.svg"),
                    new Virus("Melody", 5, 22, ElementTypes.Neutral, 3, "melody.svg"),
                    new Virus("VolGear", 5, 22, ElementTypes.Fire, 3, "volgear.svg"),
                    new Virus("Moloko", 5, 22, ElementTypes.Neutral, 3, "moloko.svg"),
                    new Virus("Billy", 5, 22, ElementTypes.Elec, 3, "billy.svg"),
                    new Virus("Weather", 5, 22, ElementTypes.Neutral, 3, "weather.svg"),
                    new Virus("Trumpy", 5, 22, ElementTypes.Neutral, 3, "trumpy.svg")                     
                ]
            }, 
            {
                id: 9,
                stageClear: 200,
                boss: new Navi("ProtoMan", 44, 28, ElementTypes.Neutral, 4, "protoman.svg", ""),
                viruses: [
                    new Virus("Mettaur", 5, 22, ElementTypes.Neutral, 3, "mettaur.svg"),
                    new Virus("Spikey", 5, 22, ElementTypes.Fire, 3, "spikey.svg"),
                    new Virus("Shrimpy", 5, 22, ElementTypes.Aqua, 3, "shrimpy.svg"),
                    new Virus("Boomer", 5, 22, ElementTypes.Neutral, 3, "boomer.svg"),
                    new Virus("Dharma", 5, 22, ElementTypes.Neutral, 3, "dharma.svg"),
                    new Virus("Kilby", 5, 22, ElementTypes.Wood, 3, "kilby.svg"),
                    new Virus("Melody", 5, 22, ElementTypes.Neutral, 3, "melody.svg"),
                    new Virus("VolGear", 5, 22, ElementTypes.Fire, 3, "volgear.svg"),
                    new Virus("Moloko", 5, 22, ElementTypes.Neutral, 3, "moloko.svg"),
                    new Virus("Billy", 5, 22, ElementTypes.Elec, 3, "billy.svg"),
                    new Virus("Weather", 5, 22, ElementTypes.Neutral, 3, "weather.svg"),
                    new Virus("Trumpy", 5, 22, ElementTypes.Neutral, 3, "trumpy.svg")                    
                ]
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