class AddNameToMessages < ActiveRecord::Migration[5.0]
  def change
    add_column :messages, :guestname, :string
  end
end
