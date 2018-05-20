class EventsController < ApplicationController
  before_action :set_event, only: [:show, :edit, :update, :destroy]
  before_action :set_activities, only: [:new, :edit]

  # GET /events
  def index
    respond_to do |format|
        format.html {}
        format.json do
          render json: current_user.activities.history.to_json, status: :ok
        end
    end

  end

  # GET /events/1
  def show
  end

  # GET /events/new
  def new
    @activity = Activity.new
    @event = Event.new
  end

  # GET /events/1/edit
  def edit
  end

  # POST /events
  def create
    @event = current_user.activities.find(activity_id_from_params).events.new(event_params)

    if @event.save
      redirect_to action: :new
    else
      @activity = Activity.new
      set_activities
      render :new
    end
  end

  # PATCH/PUT /events/1
  def update
    if @event.update(event_params)
      redirect_to @event, notice: 'Event was successfully updated.'
    else
      set_activities
      render :edit
    end
  end

  # DELETE /events/1
  def destroy
    @event.destroy
    redirect_to events_url, notice: 'Event was successfully destroyed.'
  end

  private

  def set_event
    @event = Event.find(params[:id])
  end

  def event_params
    params.require(:event).permit(:activity_id, :value)
  end

  def activity_id_from_params
    params.require(:event).require(:activity_id)
  end

  def set_activities
    @default_activity = current_user.events.order(updated_at: :desc).limit(1).first || Event.new
    @activities = current_user.activities.order(:title)
    # @activities = current_user.activities.joins(
    #   "LEFT OUTER JOIN events on events.activity_id = activities.id"
    # ).select(%{
    #   activities.id,
    #   activities.title,
    #   activities.value,
    #   count(events.activity_id) as events_count
    # }).group(%{
    #   activities.id,
    #   activities.title,
    #   activities.value
    # }).order('events_count DESC, activities.title')
  end

  def reuse_activity_params
    params.require(:reuse).require(:activity).permit(:title, :event)
  end

  def new_activity_params
    params.require(:activity).permit(:title, :value)
  end
end
