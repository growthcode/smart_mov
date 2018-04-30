module EventHelper
  def happened_at_formatted(event)
    event.happened_at.localtime.stamp("9/9/99 at 3:00am PST")
  end
end
