class EventsController < ApplicationController
  before_action :set_event, only: [:show, :edit, :update, :destroy]
  before_action :set_activities, only: [:new, :edit]

  # GET /events
  def index
    respond_to do |format|
        format.html {}
        format.json do
          # binding.pry
          render json: {}, status: :ok
        end
    end

  end

  # GET /events/1
  def show
  end

  # GET /events/new
  def new
    @new_activity = Activity.new
    @event = Event.new
  end

  # GET /events/1/edit
  def edit
  end

  # POST /events
  def create
    if new_activity_params.present? && new_activity_params[:title].present?
      @new_activity = current_user.activities.with_title(new_activity_params).first
      @new_activity ||= current_user.activities.create(new_activity_params)
    elsif event_params[:activity_id].present?
      @activity = current_user.activities.find(event_params[:activity_id])
    end

    @event = if @activity.present?
               @activity.events.new(event_params)
             elsif @new_activity.blank?
               @new_activity = Activity.new
               @event = Event.new
             end

    if @event.value.blank?
      @event.value = @activity.try(:value)
    end

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

  def set_activities
    @activities = current_user.activities
  end

  def new_activity_params
    params.require(:activity).permit(:title, :value)
  end
end
