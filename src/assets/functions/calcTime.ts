import { utcToZonedTime } from "date-fns-tz";

function calculateTime() {
    let now = new Date().toISOString();
    let nowConverted = utcToZonedTime(now, "America/Sao_Paulo");

    let hours = nowConverted.getHours();
    let minutes = nowConverted.getMinutes();
    let seconds = nowConverted.getSeconds();

    return { hours, minutes, seconds };
}
export default calculateTime;