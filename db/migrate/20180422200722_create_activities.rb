class CreateActivities < ActiveRecord::Migration[5.1]
  def change
    create_table :activities do |t|
      t.string :title
      # t.boolean :favorite
      # t.boolean :archive

      t.timestamps
    end
  end
end
