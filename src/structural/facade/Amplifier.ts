export class Amplifier {
  on() { console.log("Підсилювач: Увімкнено"); }
  setVolume(level: number) { console.log(`Підсилювач: Гучність ${level}`); }
  off() { console.log("Підсилювач: Вимкнено"); }
}