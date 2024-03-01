import 'Clock', './clock'

clock = Clock.new

export default def tick
  event = new CustomEvent(ENVS[:tick], {
    detail: {
      value: clock.delta_time()
    }
  })
  window.dispatch_event(event)
  
  request_animation_frame lambda { tick() }
end
