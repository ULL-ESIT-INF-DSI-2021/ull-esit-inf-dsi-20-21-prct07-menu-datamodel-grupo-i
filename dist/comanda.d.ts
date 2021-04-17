declare var inquirer: any;
declare var inquirer: any;
declare var questions: ({
    type: string;
    name: string;
    message: string;
    default: boolean;
    validate?: undefined;
    choices?: undefined;
    filter?: undefined;
    when?: undefined;
} | {
    type: string;
    name: string;
    message: string;
    validate: (value: any) => true | "Please enter a valid phone number";
    default?: undefined;
    choices?: undefined;
    filter?: undefined;
    when?: undefined;
} | {
    type: string;
    name: string;
    message: string;
    choices: string[];
    filter: (val: any) => any;
    default?: undefined;
    validate?: undefined;
    when?: undefined;
} | {
    type: string;
    name: string;
    message: string;
    validate: (value: any) => true | "Please enter a number";
    filter: NumberConstructor;
    default?: undefined;
    choices?: undefined;
    when?: undefined;
} | {
    type: string;
    name: string;
    message: string;
    choices: {
        key: string;
        name: string;
        value: string;
    }[];
    default?: undefined;
    validate?: undefined;
    filter?: undefined;
    when?: undefined;
} | {
    type: string;
    name: string;
    message: string;
    choices: string[];
    default?: undefined;
    validate?: undefined;
    filter?: undefined;
    when?: undefined;
} | {
    type: string;
    name: string;
    message: string;
    default: string;
    validate?: undefined;
    choices?: undefined;
    filter?: undefined;
    when?: undefined;
} | {
    type: string;
    name: string;
    message: string;
    choices: string[];
    when: (answers: any) => boolean;
    default?: undefined;
    validate?: undefined;
    filter?: undefined;
})[];
