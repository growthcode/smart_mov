class RemoveColumnsOnUsers < ActiveRecord::Migration[5.1]
  def change
    remove_columns :users, :provider, :uid, :tokens
  end
end
