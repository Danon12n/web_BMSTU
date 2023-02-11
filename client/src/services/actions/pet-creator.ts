import { bindActionCreators } from "@reduxjs/toolkit";
import {
    TPet,
    TPetAvailability,
    TPetGender,
    TPetType,
} from "../../types/types";
import {
    SET_PET,
    SET_PET_AGE,
    SET_PET_AVAILABILITY,
    SET_PET_BREED,
    SET_PET_CAN_REPRODUCE,
    SET_PET_CAN_SWIM,
    SET_PET_COLOR,
    SET_PET_GENDER,
    SET_PET_NAME,
    SET_PET_PRICE,
    SET_PET_SHOP_ID,
    SET_PET_TYPE,
} from "../action-types/pet-creator";
import { store } from "../store";

//types
export interface ISetPet {
    readonly type: typeof SET_PET;
    readonly payload: TPet;
}
export interface ISetPetAge {
    readonly type: typeof SET_PET_AGE;
    readonly payload: number;
}
export interface ISetPetAvailability {
    readonly type: typeof SET_PET_AVAILABILITY;
    readonly payload: TPetAvailability;
}
export interface ISetPetBreed {
    readonly type: typeof SET_PET_BREED;
    readonly payload: string;
}
export interface ISetPetCanSwim {
    readonly type: typeof SET_PET_CAN_SWIM;
    readonly payload: 1 | 0;
}
export interface ISetPetCanReproduce {
    readonly type: typeof SET_PET_CAN_REPRODUCE;
    readonly payload: 1 | 0;
}
export interface ISetPetColor {
    readonly type: typeof SET_PET_COLOR;
    readonly payload: string;
}
export interface ISetPetGender {
    readonly type: typeof SET_PET_GENDER;
    readonly payload: TPetGender;
}
export interface ISetPetPrice {
    readonly type: typeof SET_PET_PRICE;
    readonly payload: number;
}
export interface ISetPetName {
    readonly type: typeof SET_PET_NAME;
    readonly payload: string;
}
export interface ISetPetShopId {
    readonly type: typeof SET_PET_SHOP_ID;
    readonly payload: number;
}
export interface ISetPetType {
    readonly type: typeof SET_PET_TYPE;
    readonly payload: TPetType;
}

export type TPetCreatorActions =
    | ISetPet
    | ISetPetAge
    | ISetPetAvailability
    | ISetPetBreed
    | ISetPetCanReproduce
    | ISetPetCanSwim
    | ISetPetColor
    | ISetPetGender
    | ISetPetName
    | ISetPetPrice
    | ISetPetShopId
    | ISetPetType;

//types

const doSetPet = (pet: TPet): ISetPet => ({
    type: "SET_PET",
    payload: pet,
});
const doSetPetAvailability = (
    available: TPetAvailability
): ISetPetAvailability => ({
    type: "SET_PET_AVAILABILITY",
    payload: available,
});
const doSetPetAge = (age: number): ISetPetAge => ({
    type: "SET_PET_AGE",
    payload: age,
});
const doSetPetBreed = (breed: string): ISetPetBreed => ({
    type: "SET_PET_BREED",
    payload: breed,
});
const doSetPetCanReproduce = (canReproduce: 1 | 0): ISetPetCanReproduce => ({
    type: "SET_PET_CAN_REPRODUCE",
    payload: canReproduce,
});
const doSetPetCanSwim = (canSwim: 1 | 0): ISetPetCanSwim => ({
    type: "SET_PET_CAN_SWIM",
    payload: canSwim,
});
const doSetPetColor = (color: string): ISetPetColor => ({
    type: "SET_PET_COLOR",
    payload: color,
});
const doSetPetGender = (gender: TPetGender): ISetPetGender => ({
    type: "SET_PET_GENDER",
    payload: gender,
});
const doSetPetName = (name: string): ISetPetName => ({
    type: "SET_PET_NAME",
    payload: name,
});
const doSetPetPrice = (price: number): ISetPetPrice => ({
    type: "SET_PET_PRICE",
    payload: price,
});
const doSetPetShopId = (shopId: number): ISetPetShopId => ({
    type: "SET_PET_SHOP_ID",
    payload: shopId,
});
const doSetPetType = (type: TPetType): ISetPetType => ({
    type: "SET_PET_TYPE",
    payload: type,
});

export const boundPetCreator = bindActionCreators(
    {
        setPet: doSetPet,
        setPetAvailability: doSetPetAvailability,
        setPetAge: doSetPetAge,
        setPetCanSwin: doSetPetCanSwim,
        setPetCanReproduce: doSetPetCanReproduce,
        setPetPrice: doSetPetPrice,
        setPetName: doSetPetName,
        setPetType: doSetPetType,
        setPetShopId: doSetPetShopId,
        setPetGender: doSetPetGender,
        setPetColor: doSetPetColor,
        setPetBreed: doSetPetBreed,
    },
    store.dispatch
);
