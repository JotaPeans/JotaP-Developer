import { utcToZonedTime } from "date-fns-tz";

function calculateTime() {
    const now = new Date().toISOString();
    const nowConverted = utcToZonedTime(now, "America/Sao_Paulo");

    const hours = nowConverted.getHours();
    const minutes = nowConverted.getMinutes();
    const seconds = nowConverted.getSeconds();

    return { hours, minutes, seconds };
}
export default calculateTime;