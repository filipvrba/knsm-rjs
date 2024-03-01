import 'ElmFilter', './elm_filter'

export default class ElmFilterTick < ElmFilter
  RESPONSE_TIME = 0.2
  
  def initialize
    super

    @h_fi_input = lambda { fi_input_tick() }
    @h_tick = lambda { |d| tick(d.detail.value) }
    @h_send = nil
    
    @time = 0.0
    @is_active = false
  end

  def connectedCallback()
    super
    window.add_event_listener(ENVS[:tick], @h_tick)
  end

  def disconnectedCallback()
    super
    window.remove_event_listener(ENVS[:tick], @h_tick)
  end

  def fi_input()
    super(@floating_input.value)
  end
  
  def tick(dt)
    unless @is_active
      return
    end
    
    if @time >= RESPONSE_TIME
      if @h_send == nil
        @h_send = lambda do
          @is_active = false
          fi_input()
        end.call
      end
      return
    end
    
    @time += dt
  end

  def fi_input_tick()
    @h_send = nil
    
    @time = 0.0
    @is_active = true
  end
end









