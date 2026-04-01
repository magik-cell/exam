import { Amplifier } from "./Amplifier";
import { Projector } from "./Projector";
import { StreamingService } from "./StreamingService";

export class HomeTheaterFacade {
  constructor(
    private amp: Amplifier,
    private projector: Projector,
    private streaming: StreamingService
  ) {}

  public watchMovie(movie: string): void {
    console.log("--- Підготовка до кіносеансу ---");
    this.projector.on();
    this.amp.on();
    this.amp.setVolume(15);
    this.streaming.play(movie);
  }

  public endMovie(): void {
    console.log("--- Завершення роботи ---");
    this.projector.off();
    this.amp.off();
  }
}