const ChipClasses = {
  Standard: "Standard",
  Mega: "Mega",
  Giga: "Giga",
  Navi: "Navi"
}

const ElementTypes = {
  Neutral: "Neutral",
  Fire: "Fire",
  Aqua: "Aqua",
  Elec: "Elec",
  Wood: "Wood"
}

const ChipTypes = {
  Attack: "Attack",
  Support: "Support"
}

const SceneNames = {
  Greeting: "other/Greeting",
  MadeBy: "other/MadeBy",
  Opening: "other/Opening",
  StandBy: "other/StandBy",
  Splash: "other/Splash",
  
  Option: "option/Option",
  OptionTime: "option/OptionTime",
  OptionSound: "option/OptionSound",

  NaviStatus: "status/NaviStatus",

  PlayerVSPlayer: "versus/PlayerVSPlayer",
  LookingPlayer: "versus/LookingPlayer",
  BattleStart: "versus/BattleStart",
  Roulette: "versus/Roulette",
  LoadingNow: "versus/LoadingNow",
  RoundType: "versus/RoundType",
  BattleResult: "versus/BattleResult",

  SlotIn: "battle/SlotIn",
  MegaBuster: "battle/MegaBuster",
  MegaBusterStatus: "battle/MegaBusterStatus",
  ChipStatus: "battle/ChipStatus",
  ChipOk: "battle/ChipOk",
  BattleNaviStatus: "battle/BattleNaviStatus",
  ChipElement: "battle/ChipElement",
  ChipAttackArea: "battle/ChipAttackArea",
  BattleBoard: "battle/BattleBoard",
  BattleFireAttack: "battle/BattleFireAttack",
  BattleAttackDamage: "battle/BattleAttackDamage",
  BattleChooseWinner: "battle/BattleChooseWinner",
  BattleWinner: "battle/BattleWinner",
  BattleLoser: "battle/BattleLoser",
}

const Events = {
  Up: "up",
  Down: "down",
  Left: "left",
  Right: "right",
  Confirmation: "confirmation",
  Cancel: "cancel",
  SlotIn: "slotIn"
}

const TurnTypes = {
  Attack: "attack",
  Defense: "defense"
}

export {
  ChipClasses,
  ElementTypes,
  ChipTypes,
  SceneNames,
  Events,
  TurnTypes
}