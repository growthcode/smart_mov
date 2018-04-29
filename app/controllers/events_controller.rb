class EventsController < ApplicationController
  before_action :set_event, only: [:show, :edit, :update, :destroy]
  before_action :set_activities, only: [:new]

  # GET /events
  def index
    @events = current_user.events.includes(:activity).order(:happened_at)
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
    if activity_params.present?
      @activity = current_user.activities.with_title(activity_params).first
      @activity ||= current_user.activities.create(activity_params)
    elsif event_params[:activity_id].present?
      @activity = current_user.activities.find(event_params[:activity_id])
    end

    @event = @activity.events.new(event_params)

    if @event.save
      redirect_to @event, notice: 'Event was successfully created.'
    else
      set_activities
      render :new
    end
  end

  # PATCH/PUT /events/1
  def update
    if @event.update(event_params)
      redirect_to @event, notice: 'Event was successfully updated.'
    else
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
      params.require(:event).permit(:activity_id)
    end

    def set_activities
      @activities = current_user.activities
    end

    def activity_params
      params.require(:activity).permit(:title)
    end
end
