import Clock from "./clock";
let clock = new Clock;

export default function tick() {
  let event = new CustomEvent(ENVS.tick, {detail: {value: clock.deltaTime()}});
  window.dispatchEvent(event);
  return requestAnimationFrame(() => tick())
}