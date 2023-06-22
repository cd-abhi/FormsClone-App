import { ItemType } from "./enums";

export interface QuestionType {
  questionTitle: string;
  description?: string;
  questionType: ItemType;
}

export interface Item{
    title: string;
    description?: string;
    type: ItemType;
}

export interface InitialValues {
    formTitle: string;
    formDescription: string;
    formData: any[];
}