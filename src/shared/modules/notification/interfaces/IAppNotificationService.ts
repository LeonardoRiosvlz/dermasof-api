import { Result } from 'src/shared/core/class/result';


//@todo Place the notifications, according to the context
export enum NotificationType {
  //Forum
  REACTION_POST = 'REACTION_POST',
  REACTION_COMMENT = 'REACTION_COMMENT',
  REACTION_PROJECT = 'REACTION_PROJECT',
  REACTION_PROJECT_COMMENT = 'REACTION_PROJECT_COMMENT',
  RESPONSE_COMMENT = 'RESPONSE_COMMENT',
  COMMENT_POST = 'COMMENT_POST',
  COMMENT_PROJECT = 'COMMENT_PROJECT',
  FORGOT_PASSWORD = 'FORGOT_PASSWORD',
  INTERNAL = 'INTERNAL', //example: welcome to bitacora

  //Tickets
  TICKET_CREATED = 'TICKET_CREATED',
  TICKET_RESPONSE = 'TICKET_RESPONSE',

  // Calendar
  CALENDAR_EVENT_INVITED = 'CALENDAR_EVENT_INVITED',
  CALENDAR_EVENT_UPDATED = 'CALENDAR_EVENT_UPDATED',
  CALENDAR_EVENT_DELETED = 'CALENDAR_EVENT_DELETED',

  //Course
  CREATED_COURSE = 'CREATED_COURSE',
  CREATED_PROJECT = 'CREATED_PROJECT',
  CREATED_CERTIFICATION = 'CREATED_CERTIFICATION',
  CREATED_LESSON_COMMENT = 'COMMENT_LESSON',
  FINISH_LESSON = 'FINISH_LESSON',
  APPROVAL_FINAL_EXAM = 'APPROVAL_FINAL_EXAM',
  APPROVAL_QUIZ = 'APPROVAL_QUIZ',
  DISAPPROVAL_FINAL_EXAM = 'DISAPPROVAL_FINAL_EXAM',
  DISAPPROVAL_QUIZ = 'DISAPPROVAL_QUIZ',

  //Trancode
  TRANSCODE_ERROR = 'TRANSCODE_ERROR',
  TRANSCODE_SUCCESS = 'TRANSCODE_SUCCESS',


}


export interface I18nMessage {
  es: string;
  en: string;
  de?: string;
  pt?: string;
  it?: string;
  ru?: string;
  fr?: string;
}

export interface IEmailNotificationOption {
  active: boolean;
  subject: I18nMessage;
  title: I18nMessage;
  subtitle: I18nMessage;
  body: I18nMessage
}

export interface ICreateNotification {
  toUser: string;
  message: I18nMessage;
  type: NotificationType,
  options?: {
    email?: IEmailNotificationOption;
    whatsapp?: boolean;
    telegram?: boolean
  }
}


export interface IAppNotificationService {
  create(params: ICreateNotification): Promise<Result<void>>
}

export namespace IAppNotificationService {
  export const $ = Symbol('IAppNotificationService');
}