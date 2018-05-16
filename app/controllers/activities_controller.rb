class ActivitiesController < ApplicationController
  before_action :set_activity, only: [:show, :edit, :update, :destroy]

  # GET /activities
  def index
    @activities = current_user.activities.history
  end

  # GET /activities/1
  def show
    @activity = current_user.activities.includes(:events).order('events.happened_at').find(params[:id])
  end

  # GET /activities/new
  def new
    @activity = Activity.new
  end

  # GET /activities/1/edit
  def edit
  end

  # POST /activities
  def create
    @activity = current_user.activities.find_or_initialize_by(title: activity_params[:title])

    if @activity.persisted?
      flash[:alert] = "This Mov has already been created: \"#{@activity.title}\""
    elsif @activity.update(activity_params)
      flash[:success] = "Mov Created, be sure to still Record the Mov when you are ready."
    else
      flash[:alert] = "Could not save move because: \"#{@activity.errors.full_messages.join(', ')}\""
    end

    redirect_back(fallback_location: new_event_path)
  end

  # PATCH/PUT /activities/1
  def update
    if @activity.update(activity_params)
      redirect_to edit_activity_path(params[:id]), notice: 'Activity was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /activities/1
  def destroy
    @activity.destroy
    redirect_to activities_url, notice: 'Activity was successfully destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_activity
      @activity = Activity.find(params[:id])
    end

    def set_activities
      @default_activity = current_user.events.order(updated_at: :desc).limit(1).first
      @activities = current_user.activities.order(:title)
    end

    # Only allow a trusted parameter "white list" through.
    def activity_params
      params.require(:activity).permit(:title, :value, :favorite)
    end
end
