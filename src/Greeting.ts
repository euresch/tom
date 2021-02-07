import { Print } from "@eure21/reuse/dist";

export class Greeting {
  public static print(text): void {
    Print.log(`Tom's greetings: ${text}`);
  }
}
