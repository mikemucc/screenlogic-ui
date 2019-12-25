
import { LightButton } from './lightButton';

export const POWERBUTTONS: LightButton[] = [
  {
    text: "Lights Off",
    buttonType : "primary",
    commandInt: 0,
    commandString: "ScreenLogic.LIGHT_CMD_LIGHTS_OFF",
    visible: false,
    pallet: "OnOff",
    color: null
  },
  {
    text: "Lights On",
    buttonType : "primary",
    commandInt: 1,
    commandString: "ScreenLogic.LIGHT_CMD_LIGHTS_ON",
    visible: false,
    pallet: "OnOff",
    color: null
  },
]

export const COLORLIGHTBUTTONS: LightButton[] = [
  {
    text: "Set",
    buttonType : "primary",
    commandInt: 2,
    commandString: "ScreenLogic.LIGHT_CMD_COLOR_SET",
    visible: true,
    pallet: "Color Lights",
    color: null
  },
  {
    text: "Sync",
    buttonType : "primary",
    commandInt: 3,
    commandString: "ScreenLogic.LIGHT_CMD_COLOR_SYNC",
    visible: true,
    pallet: "Color Lights",
    color: null
  },
  {
    text: "Swim",
    buttonType : "basic",
    commandInt: 4,
    commandString: "ScreenLogic.LIGHT_CMD_COLOR_SWIM",
    visible: true,
    pallet: "Color Lights",
    color: null
  },
]

export const INTELLIBRITEBUTTONS: LightButton[] = [
  {
    text: "Party",
    buttonType : "basic",
    commandInt: 5,
    commandString: "ScreenLogic.LIGHT_CMD_COLOR_MODE_PARTY",
    visible: true,
    pallet: "IntelliBrite",
    color: null
  },
  {
    text: "Romance",
    buttonType : "basic",
    commandInt: 6,
    commandString: "ScreenLogic.LIGHT_CMD_COLOR_MODE_ROMANCE",
    visible: true,
    pallet: "IntelliBrite",
    color: null
  },
  {
    text: "Caribbean",
    buttonType : "basic",
    commandInt: 7,
    commandString: "ScreenLogic.LIGHT_CMD_COLOR_MODE_CARIBBEAN",
    visible: true,
    pallet: "IntelliBrite",
    color: null
  },
  {
    text: "American",
    buttonType : "basic",
    commandInt: 8,
    commandString: "ScreenLogic.LIGHT_CMD_COLOR_MODE_AMERICAN",
    visible: true,
    pallet: "IntelliBrite",
    color: null
  },
  {
    text: "Sunset",
    buttonType : "basic",
    commandInt: 9,
    commandString: "ScreenLogic.LIGHT_CMD_COLOR_MODE_SUNSET",
    visible: true,
    pallet: "IntelliBrite",
    color: null
  },
  {
    text: "Royal",
    buttonType : "basic",
    commandInt: 10,
    commandString: "ScreenLogic.LIGHT_CMD_COLOR_MODE_ROYAL",
    visible: true,
    pallet: "IntelliBrite",
    color: null
  },
  {
    text: "Save",
    buttonType : "basic",
    commandInt: 11,
    commandString: "ScreenLogic.LIGHT_CMD_COLOR_SET_SAVE",
    visible: false,
    pallet: "IntelliBrite",
    color: null
  },
  {
    text: "Recall",
    buttonType : "basic",
    commandInt: 12,
    commandString: "ScreenLogic.LIGHT_CMD_COLOR_SET_RECALL",
    visible: false,
    pallet: "IntelliBrite",
    color: null
  },

]

export const SOLIDCOLORBUTTONS: LightButton[] = [
  {
    text: "Blue",
    buttonType : "mat-fab",
    commandInt: 13,
    commandString: "ScreenLogic.LIGHT_CMD_COLOR_BLUE",
    visible: true,
    pallet: "Solid Colors",
    color: "#2400c7"
  },
  {
    text: "Green",
    buttonType : "mat-fab",
    commandInt: 14,
    commandString: "ScreenLogic.LIGHT_CMD_COLOR_GREEN",
    visible: true,
    pallet: "Solid Colors",
    color: "#00a008"
  },
  {
    text: "Red",
    buttonType : "mat-fab",
    commandInt: 15,
    commandString: "ScreenLogic.LIGHT_CMD_COLOR_RED",
    visible: true,
    pallet: "Solid Colors",
    color: "#c20000"
  },
  {
    text: "White",
    buttonType : "mat-fab",
    commandInt: 16,
    commandString: "ScreenLogic.LIGHT_CMD_COLOR_WHITE",
    visible: true,
    pallet: "Solid Colors",
    color: "#ffffff"
  },
  {
    text: "Purple",
    buttonType : "mat-fab",
    commandInt: 17,
    commandString: "ScreenLogic.LIGHT_CMD_COLOR_PURPLE",
    visible: true,
    pallet: "Solid Colors",
    color: "#d800ff"
  }
]
