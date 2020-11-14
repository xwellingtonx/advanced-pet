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
                boss: new Navi("NormalNaviA", 8, 14, ElementTypes.Neutral, 4, "normalnavi.svg", ""),
                viruses: [
                    new Virus("Mettaur", 1, 10, ElementTypes.Neutral, 2, "mettaur.svg"),
                    new Virus("Spikey", 1, 10, ElementTypes.Fire, 2, "spikey.svg"),
                    new Virus("Shrimpy", 1, 10, ElementTypes.Aqua, 2, "shrimpy.svg")
                ]
            },
            {
                id: 2,
                stageClear: 10,
                boss: new Navi("NormalNaviB", 10, 14, ElementTypes.Neutral, 4, "normalnavi.svg", ""),
                viruses: [
                    new Virus("Mettaur", 2, 12, ElementTypes.Neutral, 3, "mettaur.svg"),
                    new Virus("Spikey", 2, 12, ElementTypes.Fire, 3, "spikey.svg"),
                    new Virus("Shrimpy", 2, 12, ElementTypes.Aqua, 3, "shrimpy.svg"),
                    new Virus("Boomer", 2, 12, ElementTypes.Neutral, 3, "boomer.svg")                   
                ]
            },            
            {
                id: 3,
                stageClear: 20,
                boss: new Navi("Roll", 12, 14, ElementTypes.Neutral, 4, "roll.svg", "mayl.svg"),
                viruses: [
                    new Virus("Mettaur", 3, 12, ElementTypes.Neutral, 3, "mettaur.svg"),
                    new Virus("Spikey", 3, 12, ElementTypes.Fire, 3, "spikey.svg"),
                    new Virus("Shrimpy", 3, 12, ElementTypes.Aqua, 3, "shrimpy.svg"),
                    new Virus("Boomer", 3, 12, ElementTypes.Neutral, 3, "boomer.svg"),
                    new Virus("Dharma", 3, 12, ElementTypes.Neutral, 3, "dharma.svg")                   
                ]
            },
            {
                id: 4,
                stageClear: 30,
                boss: new Navi("GutsMan", 16, 14, ElementTypes.Neutral, 4, "gutsman.svg", "dex.svg"),
                viruses: [
                    new Virus("Mettaur", 4, 12, ElementTypes.Neutral, 4, "mettaur.svg"),
                    new Virus("Spikey", 4, 12, ElementTypes.Fire, 4, "spikey.svg"),
                    new Virus("Shrimpy", 4, 12, ElementTypes.Aqua, 4, "shrimpy.svg"),
                    new Virus("Boomer", 4, 12, ElementTypes.Neutral, 4, "boomer.svg"),
                    new Virus("Dharma", 4, 12, ElementTypes.Neutral, 4, "dharma.svg"),
                    new Virus("Kilby", 4, 12, ElementTypes.Wood, 4, "kilby.svg")                   
                ]
            },
            {
                id: 5,
                stageClear: 40,
                boss: new Navi("TopMan", 22, 16, ElementTypes.Neutral, 4, "topman.svg", ""),
                viruses: [
                    new Virus("Mettaur", 4, 12, ElementTypes.Neutral, 4, "mettaur.svg"),
                    new Virus("Spikey", 4, 12, ElementTypes.Fire, 4, "spikey.svg"),
                    new Virus("Shrimpy", 4, 12, ElementTypes.Aqua, 4, "shrimpy.svg"),
                    new Virus("Boomer", 4, 12, ElementTypes.Neutral, 4, "boomer.svg"),
                    new Virus("Dharma", 4, 12, ElementTypes.Neutral, 4, "dharma.svg"),
                    new Virus("Kilby", 4, 12, ElementTypes.Wood, 4, "kilby.svg"),
                    new Virus("Melody", 4, 12, ElementTypes.Neutral, 4, "melody.svg"),
                    new Virus("VolGear", 4, 12, ElementTypes.Fire, 4, "volgear.svg"),
                    new Virus("Moloko", 4, 12, ElementTypes.Neutral, 4, "moloko.svg")                    
                ]
            },
            {
                id: 6,
                stageClear: 50,
                boss: new Navi("Sparkman", 26, 16, ElementTypes.Elec, 4, "sparkman.svg", ""),
                viruses: [
                    new Virus("Mettaur", 4, 12, ElementTypes.Neutral, 4, "mettaur.svg"),
                    new Virus("Spikey", 4, 12, ElementTypes.Fire, 4, "spikey.svg"),
                    new Virus("Shrimpy", 4, 12, ElementTypes.Aqua, 4, "shrimpy.svg"),
                    new Virus("Boomer", 4, 12, ElementTypes.Neutral, 4, "boomer.svg"),
                    new Virus("Dharma", 4, 12, ElementTypes.Neutral, 4, "dharma.svg"),
                    new Virus("Kilby", 4, 12, ElementTypes.Wood, 4, "kilby.svg"),
                    new Virus("Melody", 4, 12, ElementTypes.Neutral, 4, "melody.svg"),
                    new Virus("VolGear", 4, 12, ElementTypes.Fire, 4, "volgear.svg"),
                    new Virus("Moloko", 4, 12, ElementTypes.Neutral, 4, "moloko.svg"),
                    new Virus("Billy", 4, 12, ElementTypes.Elec, 4, "billy.svg"),
                    new Virus("Weather", 4, 12, ElementTypes.Neutral, 4, "weather.svg"),
                    new Virus("Trumpy", 4, 12, ElementTypes.Neutral, 4, "trumpy.svg")                                         
                ]
            },
            {
                id: 7,
                stageClear: 80,
                boss: new Navi("Fireman", 32, 16, ElementTypes.Fire, 5, "fireman.svg", ""),
                viruses: [
                    new Virus("Mettaur", 5, 12, ElementTypes.Neutral, 5, "mettaur.svg"),
                    new Virus("Spikey", 5, 12, ElementTypes.Fire, 5, "spikey.svg"),
                    new Virus("Shrimpy", 5, 12, ElementTypes.Aqua, 5, "shrimpy.svg"),
                    new Virus("Boomer", 5, 12, ElementTypes.Neutral, 5, "boomer.svg"),
                    new Virus("Dharma", 5, 12, ElementTypes.Neutral, 5, "dharma.svg"),
                    new Virus("Kilby", 5, 12, ElementTypes.Wood, 5, "kilby.svg"),
                    new Virus("Melody", 5, 12, ElementTypes.Neutral, 5, "melody.svg"),
                    new Virus("VolGear", 5, 12, ElementTypes.Fire, 5, "volgear.svg"),
                    new Virus("Moloko", 5, 12, ElementTypes.Neutral, 5, "moloko.svg"),
                    new Virus("Billy", 5, 12, ElementTypes.Elec, 5, "billy.svg"),
                    new Virus("Weather", 5, 12, ElementTypes.Neutral, 5, "weather.svg"),
                    new Virus("Trumpy", 5, 12, ElementTypes.Neutral, 5, "trumpy.svg")                  
                ]
            },
            {
                id: 8,
                stageClear: 130,
                boss: new Navi("ShadeMan", 36, 18, ElementTypes.Neutral, 5, "shademan.svg", ""),
                viruses: [
                    new Virus("Mettaur", 5, 14, ElementTypes.Neutral, 5, "mettaur.svg"),
                    new Virus("Spikey", 5, 14, ElementTypes.Fire, 5, "spikey.svg"),
                    new Virus("Shrimpy", 5, 14, ElementTypes.Aqua, 5, "shrimpy.svg"),
                    new Virus("Boomer", 5, 14, ElementTypes.Neutral, 5, "boomer.svg"),
                    new Virus("Dharma", 5, 14, ElementTypes.Neutral, 5, "dharma.svg"),
                    new Virus("Kilby", 5, 14, ElementTypes.Wood, 5, "kilby.svg"),
                    new Virus("Melody", 5, 14, ElementTypes.Neutral, 5, "melody.svg"),
                    new Virus("VolGear", 5, 14, ElementTypes.Fire, 5, "volgear.svg"),
                    new Virus("Moloko", 5, 14, ElementTypes.Neutral, 5, "moloko.svg"),
                    new Virus("Billy", 5, 14, ElementTypes.Elec, 5, "billy.svg"),
                    new Virus("Weather", 5, 14, ElementTypes.Neutral, 5, "weather.svg"),
                    new Virus("Trumpy", 5, 14, ElementTypes.Neutral, 5, "trumpy.svg")                     
                ]
            },
            {
                id: 9,
                stageClear: 200,
                boss: new Navi("SearchMan", 40, 20, ElementTypes.Neutral, 5, "searchman.svg", ""),
                viruses: [
                    new Virus("Mettaur", 5, 14, ElementTypes.Neutral, 5, "mettaur.svg"),
                    new Virus("Spikey", 5, 14, ElementTypes.Fire, 5, "spikey.svg"),
                    new Virus("Shrimpy", 5, 14, ElementTypes.Aqua, 5, "shrimpy.svg"),
                    new Virus("Boomer", 5, 14, ElementTypes.Neutral, 5, "boomer.svg"),
                    new Virus("Dharma", 5, 14, ElementTypes.Neutral, 5, "dharma.svg"),
                    new Virus("Kilby", 5, 14, ElementTypes.Wood, 5, "kilby.svg"),
                    new Virus("Melody", 5, 14, ElementTypes.Neutral, 5, "melody.svg"),
                    new Virus("VolGear", 5, 14, ElementTypes.Fire, 5, "volgear.svg"),
                    new Virus("Moloko", 5, 14, ElementTypes.Neutral, 5, "moloko.svg"),
                    new Virus("Billy", 5, 14, ElementTypes.Elec, 5, "billy.svg"),
                    new Virus("Weather", 5, 14, ElementTypes.Neutral, 5, "weather.svg"),
                    new Virus("Trumpy", 5, 14, ElementTypes.Neutral, 5, "trumpy.svg")                    
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
                boss: new Navi("NormalNaviA",  8, 14, ElementTypes.Neutral, 4, "normalnavi.svg", ""),
                viruses: [
                    new Virus("Mettaur", 1, 10, ElementTypes.Neutral, 2, "mettaur.svg"),
                    new Virus("Spikey", 1, 10, ElementTypes.Fire, 2, "spikey.svg"),
                    new Virus("Shrimpy", 1, 10, ElementTypes.Aqua, 2, "shrimpy.svg")
                ]
            },
            {
                id: 2,
                stageClear: 10,
                boss: new Navi("NormalNaviB", 10, 14, ElementTypes.Neutral, 4, "normalnavi.svg", ""),
                viruses: [
                    new Virus("Mettaur", 2, 12, ElementTypes.Neutral, 3, "mettaur.svg"),
                    new Virus("Spikey", 2, 12, ElementTypes.Fire, 3, "spikey.svg"),
                    new Virus("Shrimpy", 2, 12, ElementTypes.Aqua, 3, "shrimpy.svg"),
                    new Virus("Boomer", 2, 12, ElementTypes.Neutral, 3, "boomer.svg")                   
                ]
            },
            {
                id: 3,
                stageClear: 20,
                boss: new Navi("AquaMan", 12, 14, ElementTypes.Aqua, 4, "aquaman.svg", ""),
                viruses: [
                    new Virus("Mettaur", 3, 12, ElementTypes.Neutral, 3, "mettaur.svg"),
                    new Virus("Spikey", 3, 12, ElementTypes.Fire, 3, "spikey.svg"),
                    new Virus("Shrimpy", 3, 12, ElementTypes.Aqua, 3, "shrimpy.svg"),
                    new Virus("Boomer", 3, 12, ElementTypes.Neutral, 3, "boomer.svg"),
                    new Virus("Dharma", 3, 12, ElementTypes.Neutral, 3, "dharma.svg")                   
                ]
            },
            {
                id: 4,
                stageClear: 30,
                boss: new Navi("TopMan", 16, 14, ElementTypes.Neutral, 4, "topman.svg", ""),
                viruses: [
                    new Virus("Mettaur", 4, 12, ElementTypes.Neutral, 4, "mettaur.svg"),
                    new Virus("Spikey", 4, 12, ElementTypes.Fire, 4, "spikey.svg"),
                    new Virus("Shrimpy", 4, 12, ElementTypes.Aqua, 4, "shrimpy.svg"),
                    new Virus("Boomer", 4, 12, ElementTypes.Neutral, 4, "boomer.svg"),
                    new Virus("Dharma", 4, 12, ElementTypes.Neutral, 4, "dharma.svg"),
                    new Virus("Kilby", 4, 12, ElementTypes.Wood, 4, "kilby.svg")                   
                ]
            },
            {
                id: 5,
                stageClear: 40,
                boss: new Navi("Sparkman", 22, 16, ElementTypes.Elec, 4, "sparkman.svg", ""),
                viruses: [
                    new Virus("Mettaur", 4, 12, ElementTypes.Neutral, 4, "mettaur.svg"),
                    new Virus("Spikey", 4, 12, ElementTypes.Fire, 4, "spikey.svg"),
                    new Virus("Shrimpy", 4, 12, ElementTypes.Aqua, 4, "shrimpy.svg"),
                    new Virus("Boomer", 4, 12, ElementTypes.Neutral, 4, "boomer.svg"),
                    new Virus("Dharma", 4, 12, ElementTypes.Neutral, 4, "dharma.svg"),
                    new Virus("Kilby", 4, 12, ElementTypes.Wood, 4, "kilby.svg"),
                    new Virus("Melody", 4, 12, ElementTypes.Neutral, 4, "melody.svg"),
                    new Virus("VolGear", 4, 12, ElementTypes.Fire, 4, "volgear.svg"),
                    new Virus("Moloko", 4, 12, ElementTypes.Neutral, 4, "moloko.svg")                    
                ]
            },   
            {
                id: 6,
                stageClear: 50,
                boss: new Navi("WoodMan", 26, 16, ElementTypes.Wood, 4, "woodman.svg", ""),
                viruses: [
                    new Virus("Mettaur", 4, 12, ElementTypes.Neutral, 4, "mettaur.svg"),
                    new Virus("Spikey", 4, 12, ElementTypes.Fire, 4, "spikey.svg"),
                    new Virus("Shrimpy", 4, 12, ElementTypes.Aqua, 4, "shrimpy.svg"),
                    new Virus("Boomer", 4, 12, ElementTypes.Neutral, 4, "boomer.svg"),
                    new Virus("Dharma", 4, 12, ElementTypes.Neutral, 4, "dharma.svg"),
                    new Virus("Kilby", 4, 12, ElementTypes.Wood, 4, "kilby.svg"),
                    new Virus("Melody", 4, 12, ElementTypes.Neutral, 4, "melody.svg"),
                    new Virus("VolGear", 4, 12, ElementTypes.Fire, 4, "volgear.svg"),
                    new Virus("Moloko", 4, 12, ElementTypes.Neutral, 4, "moloko.svg"),
                    new Virus("Billy", 4, 12, ElementTypes.Elec, 4, "billy.svg"),
                    new Virus("Weather", 4, 12, ElementTypes.Neutral, 4, "weather.svg"),
                    new Virus("Trumpy", 4, 12, ElementTypes.Neutral, 4, "trumpy.svg")                                         
                ]
            }, 
            {
                id: 7,
                stageClear: 80,
                boss: new Navi("MetalMan", 32, 16, ElementTypes.Neutral, 5, "metalman.svg", ""),
                viruses: [
                    new Virus("Mettaur", 5, 12, ElementTypes.Neutral, 5, "mettaur.svg"),
                    new Virus("Spikey", 5, 12, ElementTypes.Fire, 5, "spikey.svg"),
                    new Virus("Shrimpy", 5, 12, ElementTypes.Aqua, 5, "shrimpy.svg"),
                    new Virus("Boomer", 5, 12, ElementTypes.Neutral, 5, "boomer.svg"),
                    new Virus("Dharma", 5, 12, ElementTypes.Neutral, 5, "dharma.svg"),
                    new Virus("Kilby", 5, 12, ElementTypes.Wood, 5, "kilby.svg"),
                    new Virus("Melody", 5, 12, ElementTypes.Neutral, 5, "melody.svg"),
                    new Virus("VolGear", 5, 12, ElementTypes.Fire, 5, "volgear.svg"),
                    new Virus("Moloko", 5, 12, ElementTypes.Neutral, 5, "moloko.svg"),
                    new Virus("Billy", 5, 12, ElementTypes.Elec, 5, "billy.svg"),
                    new Virus("Weather", 5, 12, ElementTypes.Neutral, 5, "weather.svg"),
                    new Virus("Trumpy", 5, 12, ElementTypes.Neutral, 5, "trumpy.svg")                  
                ]
            },  
            {
                id: 8,
                stageClear: 130,
                boss: new Navi("ShadeMan", 36, 18, ElementTypes.Neutral, 5, "shademan.svg", ""),
                viruses: [
                    new Virus("Mettaur", 5, 14, ElementTypes.Neutral, 5, "mettaur.svg"),
                    new Virus("Spikey", 5, 14, ElementTypes.Fire, 5, "spikey.svg"),
                    new Virus("Shrimpy", 5, 14, ElementTypes.Aqua, 5, "shrimpy.svg"),
                    new Virus("Boomer", 5, 14, ElementTypes.Neutral, 5, "boomer.svg"),
                    new Virus("Dharma", 5, 14, ElementTypes.Neutral, 5, "dharma.svg"),
                    new Virus("Kilby", 5, 14, ElementTypes.Wood, 5, "kilby.svg"),
                    new Virus("Melody", 5, 14, ElementTypes.Neutral, 5, "melody.svg"),
                    new Virus("VolGear", 5, 14, ElementTypes.Fire, 5, "volgear.svg"),
                    new Virus("Moloko", 5, 14, ElementTypes.Neutral, 5, "moloko.svg"),
                    new Virus("Billy", 5, 14, ElementTypes.Elec, 5, "billy.svg"),
                    new Virus("Weather", 5, 14, ElementTypes.Neutral, 5, "weather.svg"),
                    new Virus("Trumpy", 5, 14, ElementTypes.Neutral, 5, "trumpy.svg")                     
                ]
            }, 
            {
                id: 9,
                stageClear: 200,
                boss: new Navi("ProtoMan", 40, 20, ElementTypes.Neutral, 5, "protoman.svg", ""),
                viruses: [
                    new Virus("Mettaur", 5, 14, ElementTypes.Neutral, 5, "mettaur.svg"),
                    new Virus("Spikey", 5, 14, ElementTypes.Fire, 5, "spikey.svg"),
                    new Virus("Shrimpy", 5, 14, ElementTypes.Aqua, 5, "shrimpy.svg"),
                    new Virus("Boomer", 5, 14, ElementTypes.Neutral, 5, "boomer.svg"),
                    new Virus("Dharma", 5, 14, ElementTypes.Neutral, 5, "dharma.svg"),
                    new Virus("Kilby", 5, 14, ElementTypes.Wood, 5, "kilby.svg"),
                    new Virus("Melody", 5, 14, ElementTypes.Neutral, 5, "melody.svg"),
                    new Virus("VolGear", 5, 14, ElementTypes.Fire, 5, "volgear.svg"),
                    new Virus("Moloko", 5, 14, ElementTypes.Neutral, 5, "moloko.svg"),
                    new Virus("Billy", 5, 14, ElementTypes.Elec, 5, "billy.svg"),
                    new Virus("Weather", 5, 14, ElementTypes.Neutral, 5, "weather.svg"),
                    new Virus("Trumpy", 5, 14, ElementTypes.Neutral, 5, "trumpy.svg")                    
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
    static getCurrentWorld(deviceType, worldId) {
        return this.sortWorldsByDeviceType(deviceType)[worldId - 1];
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