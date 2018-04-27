class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.float    :value
      t.datetime :happened_at
      t.integer  :activity_id

      t.timestamps
    end
  end
end
