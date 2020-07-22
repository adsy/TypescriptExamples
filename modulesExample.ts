//variable
export let captain = "Picard";
//interface
export interface CaptainChecker {
  isGreat(inName: string): boolean;
}
//function
export function addFirst(inLast: string): string {
  console.log("HERE");
  return "This test is added to " + inLast;
}
//class
export class Ship {
  name = "Enterprise";
}
//Type Alias
export type captain = string;
