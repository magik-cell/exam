import { Amplifier } from "./structural/facade/Amplifier";
import { Projector } from "./structural/facade/Projector";
import { StreamingService } from "./structural/facade/StreamingService";
import { HomeTheaterFacade } from "./structural/facade/HomeTheaterFacade";

// Створюємо об'єкти підсистем
const amp = new Amplifier();
const projector = new Projector();
const streaming = new StreamingService();

// Створюємо фасад
const homeTheater = new HomeTheaterFacade(amp, projector, streaming);

// Викликаємо прості методи замість купи дрібних операцій
homeTheater.watchMovie("Interstellar");

setTimeout(() => {
    homeTheater.endMovie();
}, 1000);