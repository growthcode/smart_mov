class AddDefaultToActivitiesFavorite < ActiveRecord::Migration[5.1]
  def change
    change_column :activities, :favorite, :boolean, default: false
    add_index :activities, :user_id
    add_index :events, :activity_id
  end
end
