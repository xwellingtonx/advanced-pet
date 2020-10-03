import { EnemyTypes } from "../../../global/constants";

class Enemy {
    constructor(name, level, hp, element, at, image, type) {
        this.name = name;
        this.hp = hp;
        this.element = element;
        this.at = at;
        this.image = image;
        this.type = type;
        this.level = level;
    }
}

class Virus extends Enemy {
    constructor(name, level, hp, element, at, image) {
        super(name, level, hp, element, at, image, EnemyTypes.Virus);
    }
}

class Navi extends Enemy {
    constructor(name, level, hp, element, at, image, operatorImage) {
        super(name, level, hp, element, at, image, EnemyTypes.Boss);
        this.operatorImage = operatorImage;
    }
}

 class Player extends Enemy {
    constructor(sessionId, name, level, hp, cp, element, at, image) {
        super(name, level, hp, element, at, image, EnemyTypes.Player);
        this.cp = cp;
        this.sessionId = sessionId;
    }
}

export {
    Virus,
    Navi,
    Player,
}