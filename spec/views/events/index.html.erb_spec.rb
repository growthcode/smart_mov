require 'rails_helper'

RSpec.describe "events/index", type: :view do
  before(:each) do
    assign(:events, [
      Event.create!(
        :activity_id => 2
      ),
      Event.create!(
        :activity_id => 2
      )
    ])
  end

  it "renders a list of events" do
    render
    assert_select "tr>td", :text => 2.to_s, :count => 2
  end
end
