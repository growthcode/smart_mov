class AddGraphTokenToUsers < ActiveRecord::Migration[5.1]
  def up
    add_column :users, :graph_token, :string, uniq: true

    User.find_each do |user|
      user.update(graph_token: SecureRandom.hex(8))
    end

    change_column :users, :graph_token, :string, null: false
  end

  def down
    remove_column :users, :graph_token
  end
end
