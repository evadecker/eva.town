declare module "yarn-bound" {
  interface HasToString {
    toString: () => string;
  }
  type Primitive = number | string | boolean;

  export interface ResultMetaData {
    title: string;
    fileTags: string[];
  }

  interface Markup {
    name: string;
    properties: Record<string, string>;
    position: number;
    length: number;
  }

  class BaseResult {
    hashtags: string[];
    markup: Markup[];
    isDialogueEnd?: true;
  }

  export class CommandResult extends BaseResult {
    command: string;
    metadata: ResultMetaData;
  }

  export class TextResult extends BaseResult {
    text: string;
    metadata: ResultMetaData;
  }

  export class OptionResult extends BaseResult {
    text: string;
    metadata?: ResultMetaData;
    isAvailable: boolean;
  }

  export class OptionsResult extends BaseResult {
    text?: string;
    metadata?: ResultMetaData;
    options: OptionResult[];
  }

  export type YarnFunction = <T extends HasToString>(
    ...args: any[]
  ) => T | Primitive | undefined;

  export type CurrentResult =
    | TextResult
    | CommandResult
    | OptionsResult
    | undefined;

  export interface YarnStorage {
    get: (key: string) => Primitive;
    set: (key: string, val: Primitive) => void;
  }

  export default class YarnBound {
    public currentResult: CurrentResult;

    constructor(options: {
      dialogue: string;
      startAt?: string;
      combineTextAndOptionsResults?: boolean;
      handleCommand?: (command: CommandResult) => void;
      functions?: Record<string, YarnFunction>;
      variableStorage?: YarnStorage;
    });

    advance(step?: number): void;

    registerFunction(key: string, func: YarnFunction): void;
  }
}
