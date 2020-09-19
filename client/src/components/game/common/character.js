class Character {
    constructor(name, hp, element, at, image, type) {
        this.name = name;
        this.hp = hp;
        this.element = element;
        this.at = at;
        this.image = image;
        this.type = type;
    }
}

class Virus extends Character {
    constructor(name, level, hp, element, at, image) {
        super(name, hp, element, at, image, "Virus");
        this.level = level;
    }
}

class Navi extends Character {
    constructor(name, hp, element, at, image, operatorImage) {
        super(name, hp, element, at, image, "Navi");
        this.operatorImage = operatorImage;
    }
}

 class Player extends Character {
    constructor(name, level, hp, cp, element, at, image) {
        super(name, hp, element, at, image, "Player");
        this.cp = cp;
        this.level = level;
    }
}

export {
    Virus,
    Navi,
    Player,
}