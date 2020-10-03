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
  Notification: "other/Notification",
  
  Option: "option/Option",
  OptionTime: "option/OptionTime",
  OptionSound: "option/OptionSound",

  NaviStatus: "status/NaviStatus",

  PlayerVSPlayer: "versus/PlayerVSPlayer",
  LookingPlayer: "versus/LookingPlayer",
  LoadingNow: "versus/LoadingNow",
  RoundType: "versus/RoundType",
  VersusResult: "versus/VersusResult",

  BattleStart: "battle/BattleStart",
  Roulette: "battle/Roulette",
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
  BattleAttackHit: "battle/BattleAttackHit",
  BattleAttackMiss: "battle/BattleAttackMiss",
  BattleAttackDamage: "battle/BattleAttackDamage",
  BattleChooseWinner: "battle/BattleChooseWinner",
  BattleWinner: "battle/BattleWinner",
  BattleLoser: "battle/BattleLoser",
  
  PlugIn: "story/PlugIn",
  Enemy: "story/Enemy",
  EnemyAttack: "story/EnemyAttack",
  StoryResult: "story/StoryResult",
  StoryResultDetails: "story/StoryResultDetails"
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

const NotificationTypes = {
  Virus: "virus",
  Email: "email"
}

const BattleTypes = {
  AI: "ai",
  Player: "player"
}

const BattleActionTypes = {
  PlayerDamage: "playerDamage",
  EnemyDamage: "EnemyDamage",
  ChipUsage: "chipUsage"
}

const DeviceTypes = {
  Megaman: "megaman",
  Protoman: "protoman", 
  Bass: "bass"
}

const EnemyTypes = {
  Virus: "virus",
  Boss: "boss",
  Player: "player"
}

export {
  ChipClasses,
  ElementTypes,
  ChipTypes,
  SceneNames,
  Events,
  TurnTypes,
  NotificationTypes,
  DeviceTypes,
  BattleTypes,
  EnemyTypes,
  BattleActionTypes
}