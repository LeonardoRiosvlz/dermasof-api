export interface IResultError {
  name: string;
  message: string;
  pretty(): string;
  throw(): void;
  translatedMessage(lan?: string): string;
}