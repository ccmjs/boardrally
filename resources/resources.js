/**
 * @overview Data-based resources of ccmjs-based web component for a rally board game.
 * @author André Kless <andre.kless@web.de> 2024
 * @license The MIT License (MIT)
 */

/**
 * English texts and labels for a board rally.
 * @type {Object.<string,string>}
 */
export const en = {
  "choose_racetrack": "CHOOSE THE RACETRACK",
};

/**
 * German texts and labels for a board rally.
 * @type {Object.<string,string>}
 */
export const de = {
  "choose_racetrack": "WÄHLE DIE RENNSTRECKE",
};

/**
 * Boards data
 * @type {Array<{name: string, fields: string[][], objects: [{type: string, x: number, y: number, direction: number, range: number[]}], direction: number}>}
 */
export const boards = [
  {
    "name": "DIZZY HIGHWAY",
    "fields": [
      ["BLANK", "BLANK", "ARR_R", "BLANK", "DAR_D", "DAR_D", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "POWER"],
      ["BLANK", "START", "BLANK", "BLANK", "D_DLD", "D_LDL", "DAR_L", "DAR_L", "DAR_L", "DAR_L", "DAR_L", "D_LUL", "DAR_L"],
      ["BLANK", "WAL_U", "BLANK", "BLANK", "DAR_D", "POWER", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "D_ULU", "DAR_L"],
      ["START", "BLANK", "BLANK", "BLANK", "DAR_D", "BLANK", "L1S_U", "BLANK", "WLL1H", "L1S_R", "BLANK", "DAR_U", "BLANK"],
      ["BLANK", "START", "WAL_R", "BLANK", "DAR_D", "BLANK", "WDL1V", "BLANK", "POWER", "BLANK", "BLANK", "DAR_U", "BLANK"],
      ["BLANK", "START", "WAL_R", "BLANK", "DAR_D", "BLANK", "BLANK", "POWER", "BLANK", "WUL1V", "BLANK", "DAR_U", "BLANK"],
      ["START", "BLANK", "BLANK", "BLANK", "DAR_D", "BLANK", "L1S_L", "WRL1H", "BLANK", "L1S_D", "BLANK", "DAR_U", "BLANK"],
      ["BLANK", "WAL_D", "BLANK", "DAR_R", "D_DRD", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "POWER", "DAR_U", "BLANK"],
      ["BLANK", "START", "BLANK", "DAR_R", "D_RDR", "DAR_R", "DAR_R", "DAR_R", "DAR_R", "DAR_R", "D_RUR", "D_URU", "BLANK"],
      ["BLANK", "BLANK", "ARR_R", "POWER", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_U", "DAR_U", "BLANK"]
    ],
    "objects": [
      {
        "type": "ANTEN",
        "x": 0,
        "y": 4,
        "direction": 0
      },
      {
        "type": "REBOT",
        "x": 7,
        "y": 3,
        "direction": 1,
        "range": [3, 0, 12, 9]
      },
      {
        "type": "GOAL1",
        "x": 12,
        "y": 3
      }
    ],
    "direction": 0
  },
  {
    "name": "RISKANTE KREUZUNG",
    "fields": [
      ["BLANK", "BLANK", "ARR_R", "BLANK", "DAR_D", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_U", "BLANK", "BLANK"],
      ["BLANK", "START", "BLANK", "BLANK", "DAR_D", "BLANK", "AR_LD", "ARR_L", "AR_UL", "BLANK", "DA_LU", "DAR_L", "DAR_L"],
      ["BLANK", "WAL_U", "BLANK", "DAR_L", "DA_DL", "BLANK", "ARR_D", "POWER", "ARR_U", "BLANK", "BLANK", "BLANK", "BLANK"],
      ["START", "BLANK", "BLANK", "BLANK", "BLANK", "AR_LD", "AR_DL", "BLANK", "AR_LU", "ARR_L", "ARR_L", "AR_UL", "BLANK"],
      ["BLANK", "START", "WAL_R", "BLANK", "AR_LD", "AR_DL", "BLANK", "BLANK", "BLANK", "POWER", "BLANK", "ARR_U", "BLANK"],
      ["BLANK", "START", "WAL_R", "BLANK", "ARR_D", "BLANK", "POWER", "BLANK", "BLANK", "BLANK", "AR_UR", "AR_RU", "BLANK"],
      ["START", "BLANK", "BLANK", "BLANK", "AR_DR", "ARR_R", "ARR_R", "AR_RD", "BLANK", "AR_UR", "AR_RU", "BLANK", "BLANK"],
      ["BLANK", "WAL_D", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "ARR_D", "POWER", "ARR_U", "BLANK", "DA_UR", "DAR_R"],
      ["BLANK", "START", "BLANK", "DAR_R", "DAR_R", "DA_RD", "BLANK", "AR_DR", "ARR_R", "AR_RU", "BLANK", "DAR_U", "BLANK"],
      ["BLANK", "BLANK", "ARR_R", "BLANK", "BLANK", "DAR_D", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_U", "BLANK"]
    ],
    "objects": [
      {
        "type": "ANTEN",
        "x": 0,
        "y": 4,
        "direction": 0
      },
      {
        "type": "REBOT",
        "x": 4,
        "y": 9,
        "direction": 3,
        "range": [3, 0, 12, 9]
      },
      {
        "type": "GOAL1",
        "x": 8,
        "y": 7
      },
      {
        "type": "GOAL2",
        "x": 11,
        "y": 0
      }
    ],
    "direction": 0
  },
  {
    "name": "POWER PARCOURS",
    "fields": [
      ["BLANK", "BLANK", "ARR_R", "POWER", "WAL_D", "P24_D", "WAL_D", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_U", "POWER"],
      ["BLANK", "START", "BLANK", "BLANK", "BLANK", "DAR_R", "DAR_R", "DAR_R", "DAR_R", "DAR_R", "DAR_R", "D_URU", "BLANK"],
      ["BLANK", "WAL_U", "BLANK", "SPACE", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_U", "BLANK"],
      ["START", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "WLU_P", "BLANK", "BLANK", "WUR_P", "BLANK", "DAR_U", "BLANK"],
      ["BLANK", "START", "WAL_R", "BLANK", "DAR_D", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_U", "BLANK"],
      ["BLANK", "START", "WAL_R", "BLANK", "DAR_D", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_U", "BLANK"],
      ["START", "BLANK", "BLANK", "BLANK", "DAR_D", "BLANK", "WDL_P", "BLANK", "BLANK", "WRD_P", "BLANK", "BLANK", "BLANK"],
      ["BLANK", "WAL_D", "BLANK", "BLANK", "DAR_D", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "SPACE"],
      ["BLANK", "START", "BLANK", "BLANK", "D_DLD", "DAR_L", "DAR_L", "DAR_L", "DAR_L", "DAR_L", "BLANK", "BLANK", "BLANK"],
      ["BLANK", "BLANK", "ARR_R", "POWER", "DAR_D", "BLANK", "BLANK", "BLANK", "BLANK", "WAL_U", "P24_U", "WAL_U", "POWER"]
    ],
    "objects": [
      {
        "type": "ANTEN",
        "x": 0,
        "y": 4,
        "direction": 0
      },
      {
        "type": "REBOT",
        "x": 7,
        "y": 0,
        "direction": 2,
        "range": [3, 0, 12, 9]
      },
      {
        "type": "GOAL1",
        "x": 12,
        "y": 3
      },
      {
        "type": "GOAL2",
        "x": 5,
        "y": 6
      }
    ],
    "direction": 0
  },
  {
    "name": "KREISEL-SPRINT",
    "fields": [
      ["BLANK", "START", "WAL_R", "BLANK", "DAR_D", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_U", "BLANK", "BLANK"],
      ["BLANK", "WAL_U", "BLANK", "BLANK", "DAR_D", "BLANK", "AR_LD", "ARR_L", "AR_UL", "BLANK", "DA_LU", "DAR_L", "DAR_L"],
      ["START", "BLANK", "WA_RD", "DAR_L", "DA_DL", "BLANK", "ARR_D", "POWER", "ARR_U", "BLANK", "BLANK", "BLANK", "BLANK"],
      ["BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "AR_LD", "AR_DL", "BLANK", "AR_LU", "ARR_L", "ARR_L", "AR_UL", "BLANK"],
      ["BLANK", "START", "WAL_R", "BLANK", "AR_LD", "AR_DL", "BLANK", "BLANK", "BLANK", "POWER", "BLANK", "ARR_U", "BLANK"],
      ["BLANK", "START", "WAL_R", "BLANK", "ARR_D", "BLANK", "POWER", "BLANK", "BLANK", "BLANK", "AR_UR", "AR_RU", "BLANK"],
      ["BLANK", "BLANK", "BLANK", "BLANK", "AR_DR", "ARR_R", "ARR_R", "AR_RD", "BLANK", "AR_UR", "AR_RU", "BLANK", "BLANK"],
      ["START", "BLANK", "WA_UR", "BLANK", "BLANK", "BLANK", "BLANK", "ARR_D", "POWER", "ARR_U", "BLANK", "DA_UR", "DAR_R"],
      ["BLANK", "WAL_D", "BLANK", "DAR_R", "DAR_R", "DA_RD", "BLANK", "AR_DR", "ARR_R", "AR_RU", "BLANK", "DAR_U", "BLANK"],
      ["BLANK", "START", "WAL_R", "BLANK", "BLANK", "DAR_D", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_U", "BLANK"]
    ],
    "objects": [
      {
        "type": "ANTEN",
        "x": 0,
        "y": 4,
        "direction": 0
      },
      {
        "type": "REBOT",
        "x": 12,
        "y": 0,
        "direction": 1,
        "range": [3, 0, 12, 9]
      },
      {
        "type": "GOAL1",
        "x": 12,
        "y": 8
      },
      {
        "type": "GOAL2",
        "x": 5,
        "y": 2
      },
      {
        "type": "GOAL3",
        "x": 4,
        "y": 9
      }
    ],
    "direction": 0
  },
  {
    "name": "LASER SQUARE",
    "fields": [
      ["BLANK", "BLANK", "ARR_R", "POWER", "DAR_D", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "ARR_U", "BLANK"],
      ["BLANK", "START", "BLANK", "ARR_L", "BLANK", "BLANK", "BLANK", "SPACE", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_L"],
      ["BLANK", "WAL_U", "BLANK", "BLANK", "BLANK", "WUL1V", "L1S_L", "LA1_H", "LA1_H", "LA1_H", "WRL1H", "BLANK", "BLANK"],
      ["START", "BLANK", "BLANK", "BLANK", "BLANK", "LA1_V", "DA_UR", "DAR_R", "DAR_R", "DA_RD", "L1S_U", "BLANK", "BLANK"],
      ["BLANK", "START", "WAL_R", "BLANK", "POWER", "LA1_V", "DAR_U", "BLANK", "BLANK", "DAR_D", "LA1_V", "SPACE", "BLANK"],
      ["BLANK", "START", "WAL_R", "BLANK", "SPACE", "LA1_V", "DAR_U", "ROT_R", "POWER", "DAR_D", "LA1_V", "POWER", "BLANK"],
      ["START", "BLANK", "BLANK", "BLANK", "BLANK", "L1S_D", "DA_LU", "DAR_L", "DAR_L", "DA_DL", "LA1_V", "BLANK", "BLANK"],
      ["BLANK", "WAL_D", "BLANK", "BLANK", "BLANK", "WLL1H", "LA1_H", "LA1_H", "LA1_H", "L1S_R", "WDL1V", "BLANK", "BLANK"],
      ["BLANK", "START", "BLANK", "DAR_R", "BLANK", "BLANK", "BLANK", "BLANK", "SPACE", "BLANK", "BLANK", "BLANK", "ARR_R"],
      ["BLANK", "BLANK", "ARR_R", "BLANK", "ARR_U", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_U", "POWER"]
    ],
    "objects": [
      {
        "type": "ANTEN",
        "x": 0,
        "y": 4,
        "direction": 0
      },
      {
        "type": "REBOT",
        "x": 3,
        "y": 5,
        "direction": 3,
        "range": [3, 0, 12, 9]
      },
      {
        "type": "GOAL1",
        "x": 8,
        "y": 1
      },
      {
        "type": "GOAL2",
        "x": 9,
        "y": 8
      }
    ],
    "direction": 0
  },
  {
    "name": "ROCK'N REBOOT",
    "fields": [
      ["BLANK", "BLANK", "ARR_R", "BLANK", "DAR_D", "BLANK", "BLANK", "BLANK", "POWER", "AR_UR", "ARR_R", "AR_RU", "BLANK"],
      ["BLANK", "START", "BLANK", "BLANK", "DA_DR", "DAR_R", "DAR_R", "SPACE", "BLANK", "ARR_U", "BLANK", "DA_LD", "DAR_L"],
      ["BLANK", "WAL_U", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "ARR_U", "BLANK", "DAR_D", "BLANK"],
      ["START", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "ARR_U", "BLANK", "DAR_D", "BLANK"],
      ["BLANK", "START", "WAL_R", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "SPACE", "BLANK"],
      ["BLANK", "START", "WAL_R", "POWER", "SPACE", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "POWER", "BLANK"],
      ["START", "BLANK", "BLANK", "BLANK", "DAR_U", "BLANK", "ARR_D", "BLANK", "BLANK", "ARR_R", "ARR_R", "ARR_R", "AR_RD"],
      ["BLANK", "WAL_D", "BLANK", "BLANK", "DAR_U", "BLANK", "ARR_D", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "ARR_D"],
      ["BLANK", "START", "BLANK", "DAR_R", "DA_RU", "POWER", "ARR_D", "BLANK", "SPACE", "DAR_L", "DAR_L", "DA_UL", "AR_DR"],
      ["BLANK", "BLANK", "ARR_R", "BLANK", "AR_LD", "ARR_L", "AR_DL", "BLANK", "BLANK", "BLANK", "POWER", "DAR_U", "BLANK"]
    ],
    "objects": [
      {
        "type": "ANTEN",
        "x": 0,
        "y": 4,
        "direction": 0
      },
      {
        "type": "REBOT",
        "x": 5,
        "y": 4,
        "direction": 0,
        "range": [3, 0, 12, 9]
      },
      {
        "type": "GOAL1",
        "x": 12,
        "y": 9
      },
      {
        "type": "GOAL2",
        "x": 12,
        "y": 0
      },
      {
        "type": "GOAL3",
        "x": 9,
        "y": 9
      }
    ],
    "direction": 0
  },
  {
    "name": "BURN-OUT",
    "fields": [
      ["BLANK", "START", "WAL_R", "BLANK", "DAR_D", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "ARR_U", "POWER"],
      ["BLANK", "WAL_U", "BLANK", "ARR_R", "BLANK", "BLANK", "BLANK", "SPACE", "POWER", "BLANK", "BLANK", "BLANK", "DAR_L"],
      ["START", "BLANK", "WA_RD", "BLANK", "BLANK", "WUL1V", "L1S_L", "LA1_H", "LA1_H", "LA1_H", "WRL1H", "BLANK", "BLANK"],
      ["BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "LA1_V", "DA_UR", "DAR_R", "DAR_R", "DA_RD", "L1S_U", "BLANK", "BLANK"],
      ["BLANK", "START", "WAL_R", "BLANK", "BLANK", "LA1_V", "DAR_U", "ROT_R", "BLANK", "DAR_D", "LA1_V", "SPACE", "BLANK"],
      ["BLANK", "START", "WAL_R", "BLANK", "SPACE", "LA1_V", "DAR_U", "POWER", "BLANK", "DAR_D", "LA1_V", "BLANK", "BLANK"],
      ["BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "L1S_D", "DA_LU", "DAR_L", "DAR_L", "DA_DL", "LA1_V", "BLANK", "BLANK"],
      ["START", "BLANK", "WA_UR", "BLANK", "BLANK", "WLL1H", "LA1_H", "LA1_H", "LA1_H", "L1S_R", "WDL1V", "BLANK", "BLANK"],
      ["BLANK", "WAL_D", "BLANK", "DAR_R", "BLANK", "BLANK", "BLANK", "POWER", "SPACE", "BLANK", "BLANK", "BLANK", "ARR_R"],
      ["BLANK", "START", "WAL_R", "POWER", "ARR_D", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_U", "BLANK"]
    ],
    "objects": [
      {
        "type": "ANTEN",
        "x": 0,
        "y": 4,
        "direction": 0
      },
      {
        "type": "REBOT",
        "x": 0,
        "y": 6,
        "direction": 0,
        "range": [0, 0, 12, 9]
      },
      {
        "type": "GOAL1",
        "x": 11,
        "y": 5
      },
      {
        "type": "GOAL2",
        "x": 3,
        "y": 0
      },
      {
        "type": "GOAL3",
        "x": 12,
        "y": 9
      }
    ],
    "direction": 0
  },
  {
    "name": "CHAOS RALLYE",
    "fields": [
      ["BLANK", "BLANK", "ARR_R", "BLANK", "ARR_D", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "ARR_U", "BLANK"],
      ["BLANK", "START", "BLANK", "ARR_L", "AR_DL", "BLANK", "ARR_L", "ARR_L", "ARR_R", "ARR_R", "BLANK", "AR_LU", "ARR_L"],
      ["BLANK", "WAL_U", "BLANK", "BLANK", "BLANK", "POWER", "SPACE", "BLANK", "BLANK", "SPACE", "POWER", "BLANK", "BLANK"],
      ["START", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_D", "WLL1H", "LA1_H", "LA1_H", "L1S_R", "DAR_D", "BLANK", "BLANK"],
      ["BLANK", "START", "WAL_R", "BLANK", "BLANK", "ROT_L", "BLANK", "POWER", "ROT_L", "BLANK", "ROT_R", "P135R", "BLANK"],
      ["BLANK", "START", "WAL_R", "BLANK", "P135L", "ROT_R", "BLANK", "ROT_R", "POWER", "BLANK", "ROT_L", "BLANK", "BLANK"],
      ["START", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_U", "L1S_L", "LA1_H", "LA1_H", "WRL1H", "DAR_U", "BLANK", "BLANK"],
      ["BLANK", "WAL_D", "BLANK", "BLANK", "BLANK", "POWER", "SPACE", "BLANK", "BLANK", "SPACE", "POWER", "BLANK", "BLANK"],
      ["BLANK", "START", "BLANK", "ARR_R", "AR_RD", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "AR_UR", "ARR_R"],
      ["BLANK", "BLANK", "ARR_R", "BLANK", "ARR_D", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "ARR_U", "BLANK"]
    ],
    "objects": [
      {
        "type": "ANTEN",
        "x": 0,
        "y": 4,
        "direction": 0
      },
      {
        "type": "GOAL1",
        "x": 11,
        "y": 4
      },
      {
        "type": "GOAL2",
        "x": 4,
        "y": 5
      },
      {
        "type": "GOAL3",
        "x": 8,
        "y": 2
      },
      {
        "type": "GOAL4",
        "x": 8,
        "y": 7
      },
      {
        "type": "REBOT",
        "x": 0,
        "y": 0,
        "direction": 0,
        "range": [0, 0, 12, 9]
      }
    ],
    "direction": 0
  },
  {
    "name": "ÜBERHOLSPUR",
    "fields": [
      ["BLANK", "START", "WAL_R", "POWER", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "SPACE", "BLANK", "POWER", "POWER", "DAR_D", "DAR_D", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK"],
      ["BLANK", "WAL_U", "BLANK", "DAR_L", "D_LUL", "DAR_L", "DAR_L", "DAR_L", "DAR_L", "BLANK", "BLANK", "BLANK", "WAL_L", "BLANK", "D_DLD", "D_LDL", "DAR_L", "DAR_L", "DAR_L", "DAR_L", "DAR_L", "D_LUL", "DAR_L"],
      ["START", "BLANK", "WA_RD", "BLANK", "DAR_U", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "P24_L", "BLANK", "DAR_D", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "POWER", "D_ULU", "DAR_L"],
      ["BLANK", "BLANK", "BLANK", "BLANK", "DAR_U", "BLANK", "WLU_P", "BLANK", "BLANK", "WUR_P", "BLANK", "DAR_D", "WAL_L", "BLANK", "DAR_D", "BLANK", "L1S_U", "BLANK", "WLL1H", "L1S_R", "BLANK", "DAR_U", "BLANK"],
      ["BLANK", "START", "WAL_R", "BLANK", "DAR_U", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_D", "BLANK", "BLANK", "DAR_D", "BLANK", "WDL1V", "POWER", "BLANK", "BLANK", "BLANK", "DAR_U", "BLANK"],
      ["BLANK", "START", "WAL_R", "BLANK", "DAR_U", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_D", "BLANK", "BLANK", "DAR_D", "BLANK", "BLANK", "BLANK", "POWER", "WUL1V", "BLANK", "DAR_U", "BLANK"],
      ["BLANK", "BLANK", "BLANK", "WAL_R", "DAR_U", "BLANK", "WDL_P", "BLANK", "BLANK", "WRD_P", "BLANK", "DAR_D", "BLANK", "BLANK", "DAR_D", "BLANK", "L1S_L", "WRL1H", "BLANK", "L1S_D", "BLANK", "DAR_U", "BLANK"],
      ["START", "BLANK", "WA_UR", "P24_R", "DAR_U", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_D", "BLANK", "DAR_R", "D_DRD", "POWER", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_U", "BLANK"],
      ["BLANK", "WAL_D", "BLANK", "WAL_R", "BLANK", "BLANK", "BLANK", "DAR_R", "DAR_R", "DAR_R", "DAR_R", "D_RDR", "DAR_R", "DAR_R", "D_RDR", "DAR_R", "DAR_R", "DAR_R", "DAR_R", "DAR_R", "D_RUR", "D_URU", "BLANK"],
      ["BLANK", "START", "WAL_R", "POWER", "BLANK", "SPACE", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "POWER", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_U", "DAR_U", "POWER"]
    ],
    "objects": [
      {
        "type": "ANTEN",
        "x": 0,
        "y": 4,
        "direction": 0
      },
      {
        "type": "GOAL1",
        "x": 17,
        "y": 3
      },
      {
        "type": "GOAL2",
        "x": 6,
        "y": 6
      },
      {
        "type": "GOAL3",
        "x": 22,
        "y": 7
      },
      {
        "type": "REBOT",
        "x": 10,
        "y": 9,
        "direction": 3,
        "range": [3, 0, 12, 9]
      },
      {
        "type": "REBOT",
        "x": 18,
        "y": 0,
        "direction": 1,
        "range": [12, 0, 22, 9]
      }
    ],
    "direction": 0
  },
  {
    "name": "CHECKPOINT-JAGD",
    "fields": [
      ["BLANK", "BLANK", "ARR_R", "BLANK", "BLANK", "BLANK", "BLANK", "WLL1H", "L1S_R", "BLANK", "BLANK", "BLANK", "BLANK"],
      ["BLANK", "START", "BLANK", "BLANK", "DA_UR", "DAR_R", "DA_RD", "BLANK", "BLANK", "DA_UR", "DAR_R", "DA_RD", "BLANK"],
      ["BLANK", "WAL_U", "BLANK", "BLANK", "DAR_U", "POWER", "DAR_D", "BLANK", "BLANK", "DAR_U", "POWER", "DAR_D", "BLANK"],
      ["START", "BLANK", "BLANK", "BLANK", "DA_LU", "DAR_L", "DA_DL", "BLANK", "BLANK", "DA_LU", "DAR_L", "DA_DL", "BLANK"],
      ["BLANK", "START", "WAL_R", "L1S_U", "BLANK", "BLANK", "BLANK", "WD_PO", "WAL_L", "BLANK", "BLANK", "BLANK", "WUL1V"],
      ["BLANK", "START", "WAL_R", "WDL1V", "BLANK", "BLANK", "BLANK", "WAL_R", "WU_PO", "BLANK", "BLANK", "BLANK", "L1S_D"],
      ["START", "BLANK", "BLANK", "BLANK", "DA_UR", "DAR_R", "DA_RD", "BLANK", "BLANK", "DA_UR", "DAR_R", "DA_RD", "BLANK"],
      ["BLANK", "WAL_D", "BLANK", "BLANK", "DAR_U", "POWER", "DAR_D", "BLANK", "BLANK", "DAR_U", "POWER", "DAR_D", "BLANK"],
      ["BLANK", "START", "BLANK", "BLANK", "DA_LU", "DAR_L", "DA_DL", "BLANK", "BLANK", "DA_LU", "DAR_L", "DA_DL", "BLANK"],
      ["BLANK", "BLANK", "ARR_R", "BLANK", "BLANK", "BLANK", "BLANK", "L1S_L", "WRL1H", "BLANK", "BLANK", "BLANK", "BLANK"]
    ],
    "objects": [
      {
        "type": "ANTEN",
        "x": 0,
        "y": 4,
        "direction": 0
      },
      {
        "type": "GOAL1",
        "x": 10,
        "y": 1
      },
      {
        "type": "GOAL2",
        "x": 6,
        "y": 7
      },
      {
        "type": "GOAL3",
        "x": 5,
        "y": 3
      },
      {
        "type": "GOAL4",
        "x": 9,
        "y": 7
      },
      {
        "type": "REBOT",
        "x": 0,
        "y": 7,
        "direction": 0,
        "range": [0, 0, 12, 9]
      }
    ],
    "direction": 0
  },
  {
    "name": "AUSWEICHMANÖVER",
    "fields": [
      ["BLANK", "BLANK", "ARR_R", "BLANK", "BLANK", "BLANK", "BLANK", "WAL_L", "WAL_R", "BLANK", "BLANK", "BLANK", "BLANK"],
      ["BLANK", "START", "BLANK", "L1S_U", "DAR_R", "DAR_R", "DA_RD", "POWER", "BLANK", "DA_LD", "DAR_L", "DAR_L", "DAR_L"],
      ["BLANK", "WAL_U", "BLANK", "LA1_V", "BLANK", "WLL1H", "DD_LH", "LA1_H", "LA1_H", "DD_LH", "L1S_R", "BLANK", "BLANK"],
      ["START", "BLANK", "BLANK", "WDL1V", "BLANK", "SPACE", "SPACE", "WAL_U", "ROT_L", "SPACE", "SPACE", "AR_UL", "BLANK"],
      ["BLANK", "START", "WAL_R", "POWER", "BLANK", "BLANK", "WUL1V", "BLANK", "BLANK", "L1S_U", "BLANK", "ARR_U", "BLANK"],
      ["BLANK", "START", "WAL_R", "BLANK", "ARR_D", "BLANK", "L1S_D", "BLANK", "POWER", "WDL1V", "BLANK", "BLANK", "BLANK"],
      ["START", "BLANK", "BLANK", "BLANK", "AR_DR", "SPACE", "SPACE", "ROT_R", "WAL_D", "SPACE", "SPACE", "BLANK", "WUL1V"],
      ["BLANK", "WAL_D", "BLANK", "BLANK", "BLANK", "L1S_L", "DU_LH", "LA1_H", "LA1_H", "DU_LH", "WRL1H", "BLANK", "LA1_V"],
      ["BLANK", "START", "BLANK", "DAR_R", "DAR_R", "DAR_R", "DA_RU", "BLANK", "BLANK", "DA_LU", "DAR_L", "DAR_L", "L1S_D"],
      ["BLANK", "BLANK", "ARR_R", "BLANK", "BLANK", "BLANK", "BLANK", "WL_PO", "WAL_R", "BLANK", "BLANK", "BLANK", "POWER"]
    ],
    "objects": [
      {
        "type": "ANTEN",
        "x": 0,
        "y": 4,
        "direction": 0
      },
      {
        "type": "GOAL1",
        "x": 8,
        "y": 6
      },
      {
        "type": "GOAL2",
        "x": 12,
        "y": 9
      },
      {
        "type": "GOAL3",
        "x": 8,
        "y": 3
      },
      {
        "type": "REBOT",
        "x": 4,
        "y": 9,
        "direction": 3,
        "range": [3, 0, 12, 9]
      }
    ],
    "direction": 0
  },
  {
    "name": "PUSHER-PANIK",
    "fields": [
      ["BLANK", "BLANK", "ARR_R", "BLANK", "ARR_L", "ARR_L", "ARR_L", "AR_UL", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "WUL1V", "BLANK", "BLANK", "ROT_L", "BLANK", "BLANK"],
      ["BLANK", "START", "BLANK", "BLANK", "P135U", "BLANK", "WAL_D", "AR_LU", "ARR_L", "BLANK", "SPACE", "P135R", "BLANK", "BLANK", "BLANK", "SPACE", "POWER", "L1S_D", "BLANK", "BLANK", "BLANK", "ARR_U", "BLANK"],
      ["BLANK", "WAL_U", "BLANK", "BLANK", "SPACE", "P24_L", "SPACE", "BLANK", "BLANK", "POWER", "P24_U", "BLANK", "ARR_U", "ROT_L", "BLANK", "BLANK", "DA_LD", "DAR_L", "DAR_L", "DAR_L", "DAR_L", "ARR_U", "POWER"],
      ["START", "BLANK", "BLANK", "BLANK", "BLANK", "POWER", "BLANK", "P135L", "SPACE", "BLANK", "SPACE", "WAL_L", "ARR_U", "BLANK", "BLANK", "BLANK", "DAR_D", "BLANK", "AR_UR", "ARR_R", "ARR_R", "AR_RU", "BLANK"],
      ["BLANK", "START", "WAL_R", "BLANK", "ARR_D", "BLANK", "POWER", "P24_R", "BLANK", "P24_L", "POWER", "AR_UR", "AR_RU", "BLANK", "L2S_U", "P135R", "DAR_D", "POWER", "ARR_U", "P24_L", "BLANK", "ROT_R", "BLANK"],
      ["BLANK", "START", "WAL_R", "AR_LD", "AR_DL", "BLANK", "BLANK", "WAL_L", "BLANK", "BLANK", "BLANK", "ARR_U", "BLANK", "BLANK", "WDL2V", "BLANK", "DAR_D", "BLANK", "ARR_U", "BLANK", "BLANK", "BLANK", "BLANK"],
      ["START", "BLANK", "BLANK", "ARR_D", "WAL_R", "SPACE", "BLANK", "SPACE", "P135R", "BLANK", "POWER", "BLANK", "BLANK", "BLANK", "POWER", "BLANK", "DAR_D", "BLANK", "ARR_U", "BLANK", "BLANK", "WLL1H", "L1S_R"],
      ["BLANK", "WAL_D", "BLANK", "ARR_D", "BLANK", "P24_D", "POWER", "BLANK", "BLANK", "SPACE", "P24_R", "SPACE", "BLANK", "ROT_R", "BLANK", "DAR_L", "DA_DL", "L1S_U", "ARR_U", "BLANK", "BLANK", "BLANK", "BLANK"],
      ["BLANK", "START", "BLANK", "ARR_D", "P135L", "SPACE", "BLANK", "ARR_R", "AR_RD", "WAL_U", "BLANK", "P135D", "BLANK", "BLANK", "BLANK", "BLANK", "ARR_R", "AR_LV", "AR_RU", "SPACE", "POWER", "ROT_L", "BLANK"],
      ["BLANK", "BLANK", "ARR_R", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "AR_DR", "ARR_R", "ARR_R", "ARR_R", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "WDL1V", "BLANK", "BLANK", "WAL_U", "BLANK", "BLANK"]
    ],
    "objects": [
      {
        "type": "ANTEN",
        "x": 0,
        "y": 4,
        "direction": 0
      },
      {
        "type": "GOAL1",
        "x": 6,
        "y": 6
      },
      {
        "type": "GOAL2",
        "x": 10,
        "y": 4
      },
      {
        "type": "GOAL3",
        "x": 14,
        "y": 7
      },
      {
        "type": "GOAL4",
        "x": 22,
        "y": 1
      },
      {
        "type": "GOAL5",
        "x": 17,
        "y": 3
      },
      {
        "type": "GOAL6",
        "x": 22,
        "y": 9
      },
      {
        "type": "REBOT",
        "x": 4,
        "y": 9,
        "direction": 0,
        "range": [3, 0, 12, 9]
      },
      {
        "type": "REBOT",
        "x": 15,
        "y": 0,
        "direction": 2,
        "range": [10, 0, 22, 9]
      }
    ],
    "direction": 0
  },
  {
    "name": "CHAOS MANIA",
    "fields": [
      ["_____", "_____", "_____", "BLANK", "BLANK", "BLANK", "BLANK", "WUL1V", "BLANK", "BLANK", "ROT_L", "BLANK", "BLANK", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____"],
      ["_____", "_____", "_____", "BLANK", "BLANK", "SPACE", "POWER", "L1S_D", "BLANK", "BLANK", "BLANK", "ARR_U", "BLANK", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____"],
      ["_____", "_____", "_____", "ROT_L", "BLANK", "BLANK", "DA_LD", "DAR_L", "DAR_L", "DAR_L", "DAR_L", "ARR_U", "POWER", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____"],
      ["_____", "_____", "_____", "BLANK", "BLANK", "BLANK", "DAR_D", "BLANK", "AR_UR", "ARR_R", "ARR_R", "AR_RU", "BLANK", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____"],
      ["_____", "_____", "_____", "BLANK", "L2S_U", "P135R", "DAR_D", "POWER", "ARR_U", "P24_L", "BLANK", "ROT_R", "BLANK", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____"],
      ["BLANK", "START", "WAL_R", "BLANK", "WDL2V", "BLANK", "DAR_D", "BLANK", "ARR_U", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_D", "BLANK", "BLANK", "BLANK", "POWER", "WLL1H", "LA1_H", "L1S_R", "BLANK"],
      ["BLANK", "WAL_U", "BLANK", "BLANK", "POWER", "BLANK", "DAR_D", "BLANK", "ARR_U", "BLANK", "BLANK", "WLL1H", "L1S_R", "BLANK", "DAR_D", "BLANK", "AR_LD", "ARR_L", "BLANK", "BLANK", "BLANK", "DAR_D", "BLANK"],
      ["START", "BLANK", "WA_RD", "ROT_R", "BLANK", "DAR_L", "DA_DL", "L1S_U", "ARR_U", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_D", "L1S_U", "SPACE", "BLANK", "BLANK", "SPACE", "WUL1V", "DAR_D", "BLANK"],
      ["BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "ARR_R", "AR_LV", "AR_RU", "SPACE", "POWER", "ROT_L", "BLANK", "BLANK", "DA_DR", "DR_LV", "SPACE", "L1S_L", "WRL1H", "SPACE", "DL_LV", "DA_DL", "BLANK"],
      ["BLANK", "START", "WAL_R", "BLANK", "BLANK", "BLANK", "BLANK", "WDL1V", "BLANK", "BLANK", "WAL_U", "BLANK", "BLANK", "WU_PO", "BLANK", "LA1_V", "ROT_R", "BLANK", "BLANK", "WAL_R", "LA1_V", "POWER", "WAL_U"],
      ["BLANK", "START", "WAL_R", "BLANK", "ARR_D", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "ARR_U", "BLANK", "WAL_D", "BLANK", "LA1_V", "WAL_L", "POWER", "BLANK", "ROT_L", "LA1_V", "BLANK", "WAL_D"],
      ["BLANK", "BLANK", "BLANK", "ARR_L", "AR_DL", "BLANK", "BLANK", "P135U", "BLANK", "BLANK", "BLANK", "AR_LU", "ARR_L", "BLANK", "DA_UR", "DR_LV", "SPACE", "WLL1H", "L1S_R", "SPACE", "DL_LV", "DA_UL", "BLANK"],
      ["START", "BLANK", "WA_UR", "BLANK", "BLANK", "POWER", "DAR_R", "ROT_R", "ROT_L", "DAR_L", "POWER", "BLANK", "BLANK", "BLANK", "DAR_U", "WDL1V", "SPACE", "BLANK", "BLANK", "SPACE", "L1S_D", "DAR_U", "BLANK"],
      ["BLANK", "WAL_D", "BLANK", "BLANK", "BLANK", "SPACE", "L1S_U", "BLANK", "BLANK", "WUL1V", "SPACE", "ARR_U", "BLANK", "BLANK", "DAR_U", "BLANK", "BLANK", "BLANK", "ARR_R", "AR_RU", "BLANK", "DAR_U", "BLANK"],
      ["BLANK", "START", "WAL_R", "BLANK", "BLANK", "BLANK", "LA1_V", "ROT_R", "POWER", "LA1_V", "BLANK", "ARR_U", "BLANK", "POWER", "L1S_L", "LA1_H", "WRL1H", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_U", "BLANK"],
      ["_____", "_____", "_____", "BLANK", "BLANK", "BLANK", "LA1_V", "POWER", "ROT_L", "LA1_V", "BLANK", "ARR_D", "BLANK", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____"],
      ["_____", "_____", "_____", "BLANK", "BLANK", "SPACE", "WDL1V", "BLANK", "BLANK", "L1S_D", "SPACE", "ARR_D", "BLANK", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____"],
      ["_____", "_____", "_____", "BLANK", "BLANK", "POWER", "DAR_R", "ROT_L", "ROT_R", "DAR_L", "POWER", "BLANK", "BLANK", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____"],
      ["_____", "_____", "_____", "ARR_R", "AR_RD", "BLANK", "BLANK", "BLANK", "P135D", "BLANK", "BLANK", "AR_UR", "ARR_R", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____"],
      ["_____", "_____", "_____", "BLANK", "ARR_D", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "ARR_U", "BLANK", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____"]
    ],
    "objects": [
      {
        "type": "ANTEN",
        "x": 0,
        "y": 9,
        "direction": 0
      },
      {
        "type": "GOAL1",
        "x": 8,
        "y": 1
      },
      {
        "type": "GOAL2",
        "x": 22,
        "y": 8
      },
      {
        "type": "GOAL3",
        "x": 8,
        "y": 16
      },
      {
        "type": "GOAL4",
        "x": 5,
        "y": 11
      },
      {
        "type": "GOAL5",
        "x": 20,
        "y": 13
      },
      {
        "type": "REBOT",
        "x": 4,
        "y": 2,
        "direction": 0,
        "range": [3, 0, 12, 9]
      },
      {
        "type": "REBOT",
        "x": 3,
        "y": 16,
        "direction": 3,
        "range": [3, 10, 12, 19]
      },
      {
        "type": "REBOT",
        "x": 17,
        "y": 14,
        "direction": 3,
        "range": [13, 5, 22, 14]
      }
    ],
    "direction": 0
  },
  {
    "name": "IMMER IN BEWEGUNG",
    "fields": [
      ["BLANK", "ARR_D", "BLANK", "BLANK", "POWER", "BLANK", "BLANK", "SPACE", "BLANK", "BLANK", "ARR_L", "BLANK", "BLANK"],
      ["ARR_L", "AR_DL", "WLL2H", "L2S_R", "DA_LD", "DA_UL", "DA_LD", "DAR_L", "DAR_L", "DAR_L", "BLANK", "START", "BLANK"],
      ["BLANK", "DA_UR", "DAR_R", "DA_RD", "DAR_D", "DAR_U", "DAR_D", "POWER", "WAL_R", "BLANK", "BLANK", "WAL_U", "BLANK"],
      ["BLANK", "DAR_U", "BLANK", "DAR_D", "DAR_D", "DAR_U", "DA_DR", "DAR_R", "DA_RD", "BLANK", "BLANK", "BLANK", "START"],
      ["L2S_U", "DAR_U", "ARR_U", "DAR_D", "DAR_D", "DAR_U", "BLANK", "WUL1V", "DAR_D", "BLANK", "WAL_L", "START", "BLANK"],
      ["WRL2V", "DAR_U", "POWER", "DAR_D", "DAR_D", "DA_LU", "DAR_L", "DL_LV", "DA_DL", "POWER", "WAL_L", "START", "BLANK"],
      ["WDL2V", "DAR_U", "ARR_D", "DAR_D", "DAR_D", "POWER", "BLANK", "LA1_V", "ROT_L", "BLANK", "BLANK", "BLANK", "START"],
      ["BLANK", "DAR_U", "BLANK", "SPACE", "DA_DR", "DAR_R", "DAR_R", "DRDLV", "BLANK", "BLANK", "BLANK", "WAL_D", "BLANK"],
      ["BLANK", "DA_LU", "DAR_L", "DAR_L", "DAR_L", "DAR_L", "DAR_L", "DDLLV", "AR_UR", "ARR_R", "BLANK", "START", "BLANK"],
      ["BLANK", "BLANK", "BLANK", "WL_PO", "BLANK", "BLANK", "BLANK", "L1S_D", "ARR_U", "BLANK", "ARR_L", "BLANK", "BLANK"]
    ],
    "objects": [
      {
        "type": "ANTEN",
        "x": 12,
        "y": 5,
        "direction": 2
      },
      {
        "type": "GOAL1",
        "x": 2,
        "y": 9
      },
      {
        "type": "GOAL2",
        "x": 6,
        "y": 4
      },
      {
        "type": "GOAL3",
        "x": 9,
        "y": 9
      },
      {
        "type": "GOAL4",
        "x": 0,
        "y": 0
      },
      {
        "type": "REBOT",
        "x": 12,
        "y": 7,
        "direction": 2,
        "range": [0, 0, 12, 9]
      }
    ],
    "direction": 2
  },
  {
    "name": "TODESFALLE",
    "fields": [
      ["BLANK", "BLANK", "ARR_L", "ARR_L", "AR_UL", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "ARR_L", "BLANK", "BLANK"],
      ["BLANK", "P135U", "BLANK", "WAL_D", "AR_LU", "ARR_L", "BLANK", "SPACE", "P135R", "ARR_U", "BLANK", "START", "BLANK"],
      ["BLANK", "SPACE", "P24_L", "SPACE", "POWER", "BLANK", "POWER", "P24_U", "BLANK", "ARR_U", "BLANK", "WAL_U", "BLANK"],
      ["BLANK", "BLANK", "POWER", "BLANK", "P24_D", "BLANK", "BLANK", "SPACE", "WAL_L", "ARR_U", "BLANK", "BLANK", "START"],
      ["BLANK", "ARR_D", "BLANK", "SPACE", "BLANK", "BLANK", "P135U", "BLANK", "AR_UR", "AR_RU", "WAL_L", "START", "BLANK"],
      ["AR_LD", "AR_DL", "BLANK", "P135D", "P24_U", "WAL_D", "SPACE", "BLANK", "ARR_U", "BLANK", "WAL_L", "START", "BLANK"],
      ["ARR_D", "WAL_R", "SPACE", "BLANK", "POWER", "BLANK", "BLANK", "POWER", "BLANK", "BLANK", "BLANK", "BLANK", "START"],
      ["ARR_D", "BLANK", "P24_D", "POWER", "BLANK", "BLANK", "SPACE", "P24_R", "SPACE", "BLANK", "BLANK", "WAL_D", "BLANK"],
      ["ARR_D", "P135L", "SPACE", "BLANK", "ARR_R", "AR_RD", "WAL_U", "BLANK", "P135D", "BLANK", "BLANK", "START", "BLANK"],
      ["BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "AR_DR", "ARR_R", "ARR_R", "ARR_R", "BLANK", "ARR_L", "BLANK", "BLANK"]
    ],
    "objects": [
      {
        "type": "ANTEN",
        "x": 12,
        "y": 5,
        "direction": 2
      },
      {
        "type": "GOAL1",
        "x": 1,
        "y": 7
      },
      {
        "type": "GOAL2",
        "x": 4,
        "y": 4
      },
      {
        "type": "GOAL3",
        "x": 7,
        "y": 8
      },
      {
        "type": "GOAL4",
        "x": 8,
        "y": 2
      },
      {
        "type": "GOAL5",
        "x": 0,
        "y": 1
      },
      {
        "type": "REBOT",
        "x": 12,
        "y": 9,
        "direction": 2,
        "range": [0, 0, 12, 9]
      }
    ],
    "direction": 2
  },
  {
    "name": "PFAD DER VERWÜSTUNG",
    "fields": [
      ["BLANK", "DAR_D", "DAR_D", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "POWER", "POWER", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "SPACE", "BLANK", "POWER", "BLANK", "ARR_D", "L1S_U", "BLANK", "BLANK", "BLANK", "WR_PO", "BLANK", "BLANK", "BLANK"],
      ["BLANK", "D_DLD", "D_LDL", "DAR_L", "DAR_L", "DAR_L", "DAR_L", "DAR_L", "D_LUL", "DAR_L", "DAR_L", "D_LUL", "DAR_L", "DAR_L", "DAR_L", "DAR_L", "BLANK", "BLANK", "BLANK", "WAL_L", "ARR_L", "AR_DL", "DURLV", "DAR_R", "DAR_R", "DAR_R", "DAR_R", "DAR_R", "DA_RD", "BLANK"],
      ["BLANK", "DAR_D", "POWER", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "D_ULU", "DAR_L", "BLANK", "DAR_U", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "P24_L", "BLANK", "BLANK", "DLULV", "DAR_L", "DAR_L", "DA_UL", "SPACE", "BLANK", "DAR_D", "BLANK"],
      ["BLANK", "DAR_D", "BLANK", "L1S_U", "BLANK", "WLL1H", "L1S_R", "BLANK", "DAR_U", "BLANK", "BLANK", "DAR_U", "BLANK", "WLU_P", "BLANK", "BLANK", "WUR_P", "BLANK", "DAR_D", "WAL_L", "BLANK", "ROT_L", "LA1_V", "BLANK", "POWER", "DAR_U", "DAR_U", "ARR_U", "DAR_D", "WUL2V"],
      ["BLANK", "DAR_D", "BLANK", "WDL1V", "BLANK", "POWER", "BLANK", "BLANK", "DAR_U", "BLANK", "BLANK", "DAR_U", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_D", "BLANK", "POWER", "DA_UR", "DR_LV", "DAR_R", "DA_RD", "DAR_U", "DAR_U", "POWER", "DAR_D", "WLL2V"],
      ["BLANK", "DAR_D", "BLANK", "BLANK", "POWER", "BLANK", "WUL1V", "BLANK", "DAR_U", "BLANK", "BLANK", "DAR_U", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_D", "BLANK", "BLANK", "DAR_U", "WDL1V", "BLANK", "DAR_D", "DAR_U", "DAR_U", "ARR_D", "DAR_D", "L2S_D"],
      ["BLANK", "DAR_D", "BLANK", "L1S_L", "WRL1H", "BLANK", "L1S_D", "BLANK", "DAR_U", "BLANK", "WAL_R", "DAR_U", "BLANK", "WDL_P", "BLANK", "BLANK", "WRD_P", "BLANK", "DAR_D", "BLANK", "BLANK", "DA_LU", "DAR_L", "DA_UL", "DAR_D", "DAR_U", "DAR_U", "BLANK", "DAR_D", "BLANK"],
      ["DAR_R", "D_DRD", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "POWER", "DAR_U", "BLANK", "P24_R", "DAR_U", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_D", "BLANK", "WAL_R", "BLANK", "POWER", "DAR_U", "DAR_D", "DAR_U", "DA_LU", "DAR_L", "DA_DL", "BLANK"],
      ["DAR_R", "D_RDR", "DAR_R", "DAR_R", "DAR_R", "DAR_R", "DAR_R", "D_RUR", "D_URU", "BLANK", "WAL_R", "BLANK", "BLANK", "BLANK", "DAR_R", "DAR_R", "DAR_R", "DAR_R", "D_RDR", "DAR_R", "DAR_R", "DAR_R", "DAR_R", "DA_RU", "DA_DR", "DA_RU", "L2S_L", "WRL2H", "BLANK", "BLANK"],
      ["POWER", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_U", "DAR_U", "BLANK", "POWER", "BLANK", "SPACE", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "POWER", "BLANK", "BLANK", "SPACE", "BLANK", "BLANK", "POWER", "BLANK", "BLANK", "BLANK", "BLANK"],
      ["_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "ARR_U", "BLANK", "BLANK", "BLANK", "WAL_U", "WAL_U", "BLANK", "BLANK", "BLANK", "ARR_U", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____"],
      ["_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "BLANK", "START", "WAL_L", "BLANK", "START", "START", "BLANK", "WAL_R", "START", "BLANK", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____"],
      ["_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "BLANK", "BLANK", "BLANK", "START", "BLANK", "BLANK", "START", "BLANK", "BLANK", "BLANK", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____", "_____"]
    ],
    "objects": [
      {
        "type": "ANTEN",
        "x": 14,
        "y": 12,
        "direction": 0
      },
      {
        "type": "GOAL1",
        "x": 7,
        "y": 1
      },
      {
        "type": "GOAL2",
        "x": 13,
        "y": 8
      },
      {
        "type": "GOAL3",
        "x": 21,
        "y": 4
      },
      {
        "type": "REBOT",
        "x": 5,
        "y": 5,
        "direction": 0,
        "range": [0, 0, 9, 9]
      },
      {
        "type": "REBOT",
        "x": 13,
        "y": 4,
        "direction": 0,
        "range": [10, 0, 19, 9]
      },
      {
        "type": "REBOT",
        "x": 23,
        "y": 9,
        "direction": 3,
        "range": [20, 0, 29, 9]
      }
    ],
    "direction": 3
  },
  {
    "name": "TORNADO CHALLENGE",
    "fields": [
      ["BLANK", "BLANK", "POWER", "AR_UR", "ARR_R", "ARR_R", "ARR_R", "ARR_R", "ARR_R", "AR_RD", "BLANK", "ARR_D", "BLANK", "BLANK", "POWER", "BLANK", "BLANK", "SPACE", "BLANK", "BLANK"],
      ["BLANK", "ROT_R", "L1S_U", "ARR_U", "DAR_R", "DAR_R", "DAR_R", "DAR_R", "DA_RD", "ARR_D", "ARR_L", "AR_DL", "WLL2H", "L2S_R", "DA_LD", "DA_UL", "DA_LD", "DAR_L", "DAR_L", "DAR_L"],
      ["BLANK", "BLANK", "WDL1V", "ARR_U", "AR_UR", "ARR_R", "ARR_R", "AR_RD", "BLANK", "ARR_D", "BLANK", "DA_UR", "DAR_R", "DA_RD", "DAR_D", "DAR_U", "DAR_D", "POWER", "WAL_R", "BLANK"],
      ["BLANK", "WUL1V", "BLANK", "ARR_U", "ARR_U", "POWER", "BLANK", "ARR_D", "L3SLW", "ARR_D", "BLANK", "DAR_U", "BLANK", "DAR_D", "DAR_D", "DAR_U", "DA_DR", "DAR_R", "DA_RD", "BLANK"],
      ["BLANK", "LA1_V", "ROT_L", "ARR_U", "ARR_U", "SPACE", "ARR_L", "AR_DL", "POWER", "ARR_D", "L2S_U", "DAR_U", "ARR_U", "DAR_D", "DAR_D", "DAR_U", "BLANK", "WUL1V", "DAR_D", "BLANK"],
      ["BLANK", "L1S_D", "BLANK", "ARR_U", "ARR_U", "BLANK", "DAR_R", "DAR_R", "DA_RU", "ARR_D", "WRL2V", "DAR_U", "POWER", "DAR_D", "DAR_D", "DA_LU", "DAR_L", "DL_LV", "DA_DL", "POWER"],
      ["BLANK", "ARR_D", "BLANK", "ARR_U", "AR_LU", "ARR_L", "ARR_L", "ARR_L", "ARR_L", "AR_DL", "WDL2V", "DAR_U", "ARR_D", "DAR_D", "DAR_D", "POWER", "BLANK", "LA1_V", "ROT_L", "BLANK"],
      ["BLANK", "ARR_D", "SPACE", "ARR_U", "BLANK", "ROT_L", "POWER", "ROT_R", "BLANK", "BLANK", "BLANK", "DAR_U", "BLANK", "SPACE", "DA_DR", "DAR_R", "DAR_R", "DRDLV", "BLANK", "BLANK"],
      ["BLANK", "AR_DR", "ARR_R", "AR_RU", "SPACE", "BLANK", "L1S_L", "LA1_H", "WRL1H", "BLANK", "BLANK", "DA_LU", "DAR_L", "DAR_L", "DAR_L", "DAR_L", "DAR_L", "DDLLV", "AR_UR", "ARR_R"],
      ["POWER", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "WL_PO", "BLANK", "BLANK", "BLANK", "L1S_D", "ARR_U", "BLANK"],
      ["_____", "_____", "_____", "_____", "_____", "ARR_U", "BLANK", "BLANK", "BLANK", "WAL_U", "WAL_U", "BLANK", "BLANK", "BLANK", "ARR_U", "_____", "_____", "_____", "_____", "_____"],
      ["_____", "_____", "_____", "_____", "_____", "BLANK", "START", "WAL_L", "BLANK", "START", "START", "BLANK", "WAL_R", "START", "BLANK", "_____", "_____", "_____", "_____", "_____"],
      ["_____", "_____", "_____", "_____", "_____", "BLANK", "BLANK", "BLANK", "START", "BLANK", "BLANK", "START", "BLANK", "BLANK", "BLANK", "_____", "_____", "_____", "_____", "_____"]
    ],
    "objects": [
      {
        "type": "ANTEN",
        "x": 9,
        "y": 12,
        "direction": 3
      },
      {
        "type": "GOAL1",
        "x": 1,
        "y": 6
      },
      {
        "type": "GOAL2",
        "x": 19,
        "y": 1
      },
      {
        "type": "GOAL3",
        "x": 5,
        "y": 3
      },
      {
        "type": "REBOT",
        "x": 1,
        "y": 2,
        "direction": 0,
        "range": [0, 0, 9, 9]
      },
      {
        "type": "REBOT",
        "x": 10,
        "y": 9,
        "direction": 2,
        "range": [10, 0, 19, 9]
      }
    ],
    "direction": 3
  },
  {
    "name": "KURZER PROZESS",
    "fields": [
      ["BLANK", "BLANK", "ARR_R", "BLANK", "DAR_D", "BLANK", "BLANK", "BLANK", "POWER", "WLL1H", "LA1_H", "L1S_R", "BLANK"],
      ["BLANK", "START", "BLANK", "BLANK", "DAR_D", "BLANK", "AR_LD", "ARR_L", "BLANK", "BLANK", "BLANK", "DAR_D", "BLANK"],
      ["BLANK", "WAL_U", "BLANK", "BLANK", "DAR_D", "L1S_U", "SPACE", "BLANK", "BLANK", "SPACE", "WUL1V", "DAR_D", "BLANK"],
      ["START", "BLANK", "BLANK", "BLANK", "DA_DR", "DR_LV", "SPACE", "L1S_L", "WRL1H", "SPACE", "DL_LV", "DA_DL", "BLANK"],
      ["BLANK", "START", "WAL_R", "WU_PO", "BLANK", "LA1_V", "ROT_R", "BLANK", "BLANK", "WAL_R", "LA1_V", "POWER", "WAL_U"],
      ["BLANK", "START", "WAL_R", "WAL_D", "BLANK", "LA1_V", "WAL_L", "POWER", "BLANK", "ROT_L", "LA1_V", "BLANK", "WAL_D"],
      ["START", "BLANK", "BLANK", "BLANK", "DA_UR", "DR_LV", "SPACE", "WLL1H", "L1S_R", "SPACE", "DL_LV", "DA_UL", "BLANK"],
      ["BLANK", "WAL_D", "BLANK", "BLANK", "DAR_U", "WDL1V", "SPACE", "BLANK", "BLANK", "SPACE", "L1S_D", "DAR_U", "BLANK"],
      ["BLANK", "START", "BLANK", "BLANK", "DAR_U", "BLANK", "BLANK", "BLANK", "ARR_R", "AR_RU", "BLANK", "DAR_U", "BLANK"],
      ["BLANK", "BLANK", "ARR_R", "POWER", "L1S_L", "LA1_H", "WRL1H", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_U", "BLANK"]
    ],
    "objects": [
      {
        "type": "ANTEN",
        "x": 0,
        "y": 4,
        "direction": 0
      },
      {
        "type": "GOAL1",
        "x": 10,
        "y": 2
      },
      {
        "type": "GOAL2",
        "x": 5,
        "y": 7
      },
      {
        "type": "GOAL3",
        "x": 10,
        "y": 7
      },
      {
        "type": "GOAL4",
        "x": 5,
        "y": 2
      },
      {
        "type": "REBOT",
        "x": 0,
        "y": 0,
        "direction": 0,
        "range": [0, 0, 12, 9]
      }
    ],
    "direction": 0
  },
  {
    "name": "DAS GROSSE RENNEN",
    "fields": [
      ["BLANK", "START", "WAL_R", "BLANK", "DAR_D", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_U", "BLANK", "BLANK", "BLANK", "ARR_D", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "ARR_U", "BLANK"],
      ["BLANK", "WAL_U", "BLANK", "BLANK", "DAR_D", "BLANK", "AR_LD", "ARR_L", "AR_UL", "BLANK", "DA_LU", "DAR_L", "DAR_L", "ARR_L", "AR_DL", "BLANK", "BLANK", "P135U", "BLANK", "BLANK", "BLANK", "AR_LU", "ARR_L"],
      ["START", "BLANK", "WA_RD", "DAR_L", "DA_DL", "BLANK", "ARR_D", "POWER", "ARR_U", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "POWER", "DAR_R", "ROT_R", "ROT_L", "DAR_L", "POWER", "BLANK", "BLANK"],
      ["BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "AR_LD", "AR_DL", "BLANK", "AR_LU", "ARR_L", "ARR_L", "AR_UL", "BLANK", "BLANK", "BLANK", "SPACE", "L1S_U", "BLANK", "BLANK", "WUL1V", "SPACE", "ARR_U", "BLANK"],
      ["BLANK", "START", "WAL_R", "BLANK", "AR_LD", "AR_DL", "BLANK", "BLANK", "BLANK", "POWER", "BLANK", "ARR_U", "BLANK", "BLANK", "BLANK", "BLANK", "LA1_V", "ROT_R", "POWER", "LA1_V", "BLANK", "ARR_U", "BLANK"],
      ["BLANK", "START", "WAL_R", "BLANK", "ARR_D", "BLANK", "POWER", "BLANK", "BLANK", "BLANK", "AR_UR", "AR_RU", "BLANK", "BLANK", "BLANK", "BLANK", "LA1_V", "POWER", "ROT_L", "LA1_V", "BLANK", "ARR_D", "BLANK"],
      ["BLANK", "BLANK", "BLANK", "BLANK", "AR_DR", "ARR_R", "ARR_R", "AR_RD", "BLANK", "AR_UR", "AR_RU", "BLANK", "BLANK", "BLANK", "BLANK", "SPACE", "WDL1V", "BLANK", "BLANK", "L1S_D", "SPACE", "ARR_D", "BLANK"],
      ["START", "BLANK", "WA_UR", "BLANK", "BLANK", "BLANK", "BLANK", "ARR_D", "POWER", "ARR_U", "BLANK", "DA_UR", "DAR_R", "BLANK", "BLANK", "POWER", "DAR_R", "ROT_L", "ROT_R", "DAR_L", "POWER", "BLANK", "BLANK"],
      ["BLANK", "WAL_D", "BLANK", "DAR_R", "DAR_R", "DA_RD", "BLANK", "AR_DR", "ARR_R", "AR_RU", "BLANK", "DAR_U", "BLANK", "ARR_R", "AR_RD", "BLANK", "BLANK", "BLANK", "P135D", "BLANK", "BLANK", "AR_UR", "ARR_R"],
      ["BLANK", "START", "WAL_R", "BLANK", "BLANK", "DAR_D", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_U", "BLANK", "BLANK", "ARR_D", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "ARR_U", "BLANK"],
      ["_____", "_____", "_____", "POWER", "WAL_D", "P135D", "WAL_D", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_U", "POWER", "BLANK", "DAR_D", "BLANK", "BLANK", "BLANK", "POWER", "AR_UR", "ARR_R", "AR_RU", "BLANK"],
      ["_____", "_____", "_____", "BLANK", "BLANK", "DAR_R", "DAR_R", "DAR_R", "DAR_R", "DAR_R", "DAR_R", "D_URU", "BLANK", "AR_UL", "DA_DR", "DAR_R", "DAR_R", "SPACE", "BLANK", "ARR_U", "BLANK", "DA_LD", "DAR_L"],
      ["_____", "_____", "_____", "SPACE", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_U", "BLANK", "ARR_U", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "ARR_U", "BLANK", "DAR_D", "BLANK"],
      ["_____", "_____", "_____", "BLANK", "BLANK", "BLANK", "WLU_P", "BLANK", "BLANK", "WUR_P", "BLANK", "DAR_U", "BLANK", "AR_LU", "ARR_L", "ARR_L", "ARR_L", "BLANK", "BLANK", "ARR_U", "BLANK", "DAR_D", "BLANK"],
      ["_____", "_____", "_____", "BLANK", "DAR_D", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_U", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "SPACE", "BLANK"],
      ["_____", "_____", "_____", "BLANK", "DAR_D", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_U", "BLANK", "POWER", "SPACE", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "POWER", "BLANK"],
      ["_____", "_____", "_____", "BLANK", "DAR_D", "BLANK", "WDL_P", "BLANK", "BLANK", "WRD_P", "BLANK", "BLANK", "BLANK", "BLANK", "DAR_U", "BLANK", "ARR_D", "BLANK", "BLANK", "ARR_R", "ARR_R", "ARR_R", "AR_RD"],
      ["_____", "_____", "_____", "BLANK", "DAR_D", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "SPACE", "BLANK", "DAR_U", "BLANK", "ARR_D", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "ARR_D"],
      ["_____", "_____", "_____", "BLANK", "D_DLD", "DAR_L", "DAR_L", "DAR_L", "DAR_L", "DAR_L", "BLANK", "BLANK", "BLANK", "DAR_R", "DA_RU", "POWER", "ARR_D", "BLANK", "SPACE", "DAR_L", "DAR_L", "DA_UL", "AR_DR"],
      ["_____", "_____", "_____", "POWER", "DAR_D", "BLANK", "BLANK", "BLANK", "BLANK", "WAL_U", "P135U", "WAL_U", "POWER", "BLANK", "AR_LD", "ARR_L", "AR_DL", "BLANK", "BLANK", "BLANK", "POWER", "DAR_U", "BLANK"]
    ],
    "objects": [
      {
        "type": "ANTEN",
        "x": 0,
        "y": 4,
        "direction": 0
      },
      {
        "type": "GOAL1",
        "x": 7,
        "y": 19
      },
      {
        "type": "GOAL2",
        "x": 17,
        "y": 16
      },
      {
        "type": "GOAL3",
        "x": 19,
        "y": 1
      },
      {
        "type": "GOAL4",
        "x": 7,
        "y": 3
      },
      {
        "type": "GOAL5",
        "x": 5,
        "y": 12
      },
      {
        "type": "GOAL6",
        "x": 20,
        "y": 12
      },
      {
        "type": "REBOT",
        "x": 12,
        "y": 9,
        "direction": 3,
        "range": [3, 0, 12, 9]
      },
      {
        "type": "REBOT",
        "x": 20,
        "y": 0,
        "direction": 2,
        "range": [13, 0, 22, 9]
      },
      {
        "type": "REBOT",
        "x": 3,
        "y": 11,
        "direction": 0,
        "range": [3, 10, 12, 19]
      },
      {
        "type": "REBOT",
        "x": 13,
        "y": 19,
        "direction": 3,
        "range": [13, 10, 22, 19]
      }
    ],
    "direction": 0
  }
];
