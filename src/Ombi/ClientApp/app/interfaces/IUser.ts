﻿import { ICheckbox } from ".";

export interface IUser {
    id: string;
    userName: string;
    alias: string;
    claims: ICheckbox[];
    emailAddress: string;
    password: string;
    userType: UserType;
    lastLoggedIn: Date;
    hasLoggedIn: boolean;
    movieRequestLimit: number;
    episodeRequestLimit: number;
    musicRequestLimit: number;
    userAccessToken: string;
    // FOR UI
    checked: boolean;
}

export interface ICreateWizardUser {
    username: string;
    password: string;
    usePlexAdminAccount: boolean;
}

export interface IWizardUserResult {
    result: boolean;
    errors: string[];
}

export enum UserType {
    LocalUser = 1,
    PlexUser = 2,
    EmbyUser = 3,
}

export interface IIdentityResult {
    errors: string[];
    successful: boolean;
}

export interface IUpdateLocalUser extends IUser {
    currentPassword: string;
    confirmNewPassword: string;
}

export interface IResetPasswordToken {
    email: string;
    token: string;
    password: string;
}

export interface IMobileUsersViewModel {
    username: string;
    userId: string;
    devices: number;
}

export interface IMassEmailUserModel {
    user: IUser;
    selected: boolean;
}

export interface IMassEmailModel {
    subject: string;
    body: string;
    users: IUser[];
}

export interface INotificationPreferences {
    id: number;
    userId: string;
    agent: INotificationAgent;
    enabled: boolean;
    value: string;
}

export enum INotificationAgent {
    Email = 0,
    Discord = 1,
    Pushbullet = 2,
    Pushover = 3,
    Telegram = 4,
    Slack = 5,
    Mattermost = 6,
    Mobile = 7,
}
